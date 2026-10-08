import { TermsPage } from "@/components/legal/terms-content"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Terms",
  description: "Terms of use for Reno101. Questions go through the contact form.",
  path: "/terms",
})

export default function Page() {
  return (
    <TermsPage
      siteName="Reno101"
      domain="renos101.com"
    />
  )
}
