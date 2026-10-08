import type { Metadata } from "next"

export const SITE_ORIGIN = "https://renos101.com"

const ogImage = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "Renos101 renovation guides",
}

/** Per-page title, description, canonical, and social image. */
export function pageMetadata({
  title,
  description,
  path,
  absolute = false,
  index = true,
}: {
  title: string
  description: string
  path: string
  absolute?: boolean
  index?: boolean
}): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical },
    robots: index ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Renos101",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  }
}
