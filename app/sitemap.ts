import type { MetadataRoute } from "next"
import { blogPosts } from "@/lib/content"
import { RESOURCE_KIND_SLUGS, STAGES } from "@/lib/stages"

const ORIGIN = "https://renos101.com"

const STATIC_PATHS = [
  "/",
  "/about",
  "/blogs",
  "/contact",
  "/cookies",
  "/design-tools",
  "/downloads",
  "/faq",
  "/glossary",
  "/privacy",
  "/research",
  "/resources",
  "/terms",
  "/tools",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const paths = [
    ...STATIC_PATHS,
    ...STAGES.map((stage) => `/stages/${stage.slug}`),
    ...blogPosts.map((post) => `/blogs/${post.slug}`),
    ...Object.values(RESOURCE_KIND_SLUGS).map((type) => `/resources/${type}`),
  ]

  return paths.map((path) => ({
    url: path === "/" ? ORIGIN : `${ORIGIN}${path}`,
    lastModified,
    changeFrequency: path === "/" || path.startsWith("/blogs") ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }))
}
