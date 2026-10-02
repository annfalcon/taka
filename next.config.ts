import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export in ./out — deployable to GitHub Pages.
  output: "export",

  // Served from https://<user>.github.io/taka (repo name = "taka").
  // Set to "" when publishing to a custom domain or <user>.github.io.
  basePath: "/taka",

  // GitHub Pages resolves /o-nas only if /o-nas/index.html exists on disk.
  trailingSlash: true,

  images: {
    // There is no image-optimizer server on GitHub Pages, so /_next/image
    // would 404. Serve the original files instead. Images are requested with
    // w= and q= params already, which keeps them reasonably sized.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
};

export default nextConfig;