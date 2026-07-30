import type { MetadataRoute } from "next"
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://reno101.com", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://reno101.com/learn", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://reno101.com/pricing", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://reno101.com/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: "https://reno101.com/terms", lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: "https://reno101.com/privacy", lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
  ]
}
