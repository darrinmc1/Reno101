import { ComingSoonList } from "@/components/coming-soon-list"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Coming soon",
  description: "Join the list.",
  path: "/subscription",
})

export default function SubscriptionPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16">
      <ComingSoonList source="subscription-coming-soon" />
    </div>
  )
}
