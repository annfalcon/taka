import type { MetadataRoute } from "next";

// Required for `output: "export"`.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    // NOTE: replace with the real domain once it is live, e.g.
    // https://twojadomena.pl/sitemap.xml
    sitemap: "https://taka-architektura.pl/sitemap.xml",
  };
}