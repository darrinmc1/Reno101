import StarterPage from "@/components/starter-page"

export default function TermsPage() {
  return (
    <StarterPage
      eyebrow="Boring But Necessary"
      title="Terms of Service"
      description="These will eventually be the official rules. For now, think of this as the legal equivalent of painter's tape: not glamorous, but unwise to skip."
      aside="When you write the real terms, include subscriptions, refunds, account responsibilities, and a polite statement that advice from the platform does not override local laws, common sense, or gravity."
      bullets={[
        "Important future clause: clicking 'buy now' does not summon a contractor, a permit, or emotional resilience.",
        "Also important: inspiration photos are not binding promises that your 1987 laundry will become a Scandinavian spa by Thursday.",
      ]}
      primaryHref="/pricing"
      primaryLabel="View Pricing"
      secondaryHref="/privacy"
      secondaryLabel="Read Privacy"
    />
  )
}
