import type { MetadataRoute } from "next"
import { blogPosts } from "@/lib/content"
import { renovationGuides } from "@/lib/guides"
import { STAGES, RESOURCE_KIND_SLUGS } from "@/lib/stages"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: "https://reno101.com", lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: "https://reno101.com/learn", lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: "https://reno101.com/guides", lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: "https://reno101.com/blogs", lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: "https://reno101.com/resources", lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: "https://reno101.com/tools", lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: "https://reno101.com/glossary", lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: "https://reno101.com/faq", lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: "https://reno101.com/pricing", lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: "https://reno101.com/about", lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: "https://reno101.com/terms", lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: "https://reno101.com/privacy", lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ]

  const stages = STAGES.map((stage) => ({
    url: `https://reno101.com/stages/${stage.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const guides = renovationGuides.map((guide) => ({
    url: `https://reno101.com/guides/${guide.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const blogs = blogPosts.map((post) => ({
    url: `https://reno101.com/blogs/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  const resourceTypes = Object.values(RESOURCE_KIND_SLUGS).map((type) => ({
    url: `https://reno101.com/resources/${type}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }))

  return [...staticRoutes, ...stages, ...guides, ...blogs, ...resourceTypes]
}
