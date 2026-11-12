import type { MetadataRoute } from "next";
import { allWork } from "@/lib/content";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nora-rasuli.github.io";
  return [
    { url: base, priority: 1 },
    { url: `${base}/resume/`, priority: 0.7 },
    ...allWork.map(({ slug }) => ({
      url: `${base}/work/${slug}/`,
      priority: 0.8,
    })),
  ];
}
