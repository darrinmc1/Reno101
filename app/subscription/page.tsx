import StarterPage from "@/components/starter-page"

export default function SubscriptionPage() {
  return (
    <StarterPage
      eyebrow="Money Corner"
      title="Manage Subscription"
      description="This page will eventually handle billing, plan changes, and the delicate art of explaining why unlimited access still does not include free marble."
      aside="Subscription management should be clear enough that users do not need a spreadsheet, a priest, and a support ticket just to change plans."
      bullets={[
        "Use this area later for invoices, entitlements, billing history, and feature comparisons that do not sound like ransom notes.",
        "It is also where you politely explain which plan includes research requests, premium tools, and the right to say 'I knew I should've upgraded.'",
      ]}
      primaryHref="/pricing"
      primaryLabel="Compare Plans"
      secondaryHref="/dashboard"
      secondaryLabel="Return To Dashboard"
    />
  )
}
