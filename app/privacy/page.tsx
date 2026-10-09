import { PrivacyPage } from "@/components/legal/privacy-content"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Privacy",
  description: "How Reno101 handles personal data, and how to reach us through the contact form.",
  path: "/privacy",
})

export default function Page() {
  return (
    <PrivacyPage
      siteName="Reno101"
      domain="renos101.com"
    />
  )
}
