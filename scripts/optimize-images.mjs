/**
 * One-off asset pipeline: takes the original photos from /pics and writes
 * web-sized versions into /public/pics.
 *
 * The site is a static export to GitHub Pages with `images.unoptimized: true`
 * — there is no image-optimization server on Pages, so oversized originals would
 * be shipped straight to visitors.
 *
 * Output goes to `src/assets/`, NOT `public/`. Public files are served by their
 * literal path, and Next does not prepend `basePath` to a plain string `src` on
 * `next/image`, so on a project Pages site (`/taka/`) every image would 404.
 * Importing the files as modules puts them through the bundler, which bakes in
 * `basePath` and gives them content-hashed names for caching.
 *
 * Originals stay in /pics (git-ignored); only the optimised copies are committed.
 *
 * Usage: npm run images
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = "pics";
const OUT = "src/assets/pics";

// Covers a 3x display density on a ~480px card without wasting bytes on
// 2400px source files.
const MAX_WIDTH = 1500;
const QUALITY = 82;

const SUPPORTED = new Set([".jpg", ".jpeg", ".png", ".webp"]);

/**
 * Originals are named like `Lampa okno.jpg` and `stolik składany.jpg`, and live
 * in folders like `our products/`. Spaces, uppercase and Polish diacritics all
 * have to be percent-encoded in every URL that references them, which is
 * fragile across servers and easy to get wrong by hand. Emit ASCII, lowercase,
 * dash-separated paths instead — every path segment, not just the filename.
 *
 * Everything is encoded to JPEG: the a_1 files are PNG renders of 1.7–2.3 MB
 * each, and JPEG is what a browser would decode anyway.
 */
const DIACRITICS = { ł: "l", Ł: "L", ó: "o", Ó: "O", ą: "a", Ą: "A", ę: "e", Ę: "E", ż: "z", Ż: "Z", ź: "z", Ź: "Z", ć: "c", Ć: "C", ń: "n", Ń: "N", ś: "s", Ś: "S" };

function slugify(segment) {
  return segment
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[łŁóÓąĄęĘżŻźŹćĆńŃśŚ]/g, (c) => DIACRITICS[c] ?? c)
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function outputPathFor(file) {
  const rel = path.relative(SRC, file);
  const segments = rel.split(/[\\/]/);
  const name = segments.pop();
  const slug = slugify(path.parse(name).name);
  return path.join(OUT, ...segments.map(slugify), `${slug}.jpg`);
}

async function* walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (SUPPORTED.has(path.extname(entry.name).toLowerCase())) yield full;
  }
}

async function main() {
  try {
    await fs.access(SRC);
  } catch {
    console.log(`Nothing to do — no ${SRC}/ folder.`);
    return;
  }

  const files = [];
  for await (const f of walk(SRC)) files.push(f);

  if (files.length === 0) {
    console.log(`No images found in ${SRC}/.`);
    return;
  }

  let before = 0;
  let after = 0;

  for (const file of files.sort()) {
    const dest = outputPathFor(file);
    await fs.mkdir(path.dirname(dest), { recursive: true });

    const input = await fs.readFile(file);
    before += input.length;

    const buffer = await sharp(input)
      .rotate() // honour EXIF orientation before resizing
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
      .toBuffer();

    await fs.writeFile(dest, buffer);
    after += buffer.length;

    const ratio = ((1 - buffer.length / input.length) * 100).toFixed(0);
    console.log(
      `  ${file.padEnd(34)} -> ${path.relative(process.cwd(), dest).padEnd(40)}` +
        `${(input.length / 1024).toFixed(0).padStart(6)} kB ->` +
        `${(buffer.length / 1024).toFixed(0).padStart(5)} kB  (-${ratio}%)`,
    );
  }

  const mb = (n) => `${(n / 1048576).toFixed(2)} MB`;
  console.log(
    `\n  ${files.length} images: ${mb(before)} -> ${mb(after)} ` +
      `(-${(((1 - after / before) * 100) || 0).toFixed(0)}%)\n` +
      `  Output in ${OUT}/ — commit that folder, keep ${SRC}/ local.`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});