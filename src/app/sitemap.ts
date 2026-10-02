import type { MetadataRoute } from "next";

// Required for `output: "export"`.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // NOTE: replace with the real domain once it is live.
  const base = "https://taka-architektura.pl";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/o-nas`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/portfolio`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/cooperacja`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/kontakt`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
  ];
}