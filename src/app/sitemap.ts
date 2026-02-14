import type { MetadataRoute } from "next";
import { listPostSlugs } from "@/lib/content";

const siteUrl = "https://openclawai.club";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const docsDays = Array.from({ length: 7 }, (_, i) => `/docs/day-${i + 1}`);
  const zhDocsDays = Array.from({ length: 7 }, (_, i) => `/zh/docs/day-${i + 1}`);

  const staticRoutes = [
    "/",
    "/zh",
    "/docs",
    ...docsDays,
    "/zh/docs",
    ...zhDocsDays,
    "/blog",
    "/changelog",
    "/game",
  ].map(
    (path) => ({
      url: `${siteUrl}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.7,
    })
  );

  const postRoutes = listPostSlugs().map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
