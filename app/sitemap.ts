import { MetadataRoute } from "next";
import { STAGES } from "@/lib/stages";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.renos101.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`,             changeFrequency: "weekly"  as const, priority: 1.0 },
    { url: `${base}/about`,        changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/blogs`,        changeFrequency: "weekly"  as const, priority: 0.8 },
    { url: `${base}/contact`,      changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/design-tools`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/faq`,          changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/glossary`,     changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/pricing`,      changeFrequency: "weekly"  as const, priority: 0.9 },
    { url: `${base}/research`,     changeFrequency: "weekly"  as const, priority: 0.7 },
    { url: `${base}/resources`,    changeFrequency: "weekly"  as const, priority: 0.8 },
    { url: `${base}/stages`,       changeFrequency: "weekly"  as const, priority: 0.9 },
    { url: `${base}/tools`,        changeFrequency: "weekly"  as const, priority: 0.8 },
    { url: `${base}/updates`,      changeFrequency: "weekly"  as const, priority: 0.7 },
  ].map((r) => ({ ...r, lastModified: new Date() }));

  const stageRoutes: MetadataRoute.Sitemap = STAGES.map((stage) => ({
    url: `${base}/stages/${stage.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...stageRoutes];
}
