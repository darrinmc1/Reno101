import { CookiesPage } from "@/components/legal/cookies-content"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Cookies",
  description: "How Reno101 uses cookies, and how to ask a question through the contact form.",
  path: "/cookies",
})

export default function Page() {
  return (
    <CookiesPage
      siteName="Reno101"
      domain="renos101.com"
    />
  )
}
