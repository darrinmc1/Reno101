import StarterPage from "@/components/starter-page"

export default function ContactPage() {
  return (
    <StarterPage
      eyebrow="Send Help"
      title="Contact"
      description="Eventually this page should let people ask smart questions. For now it stands ready for messages such as 'Is this wall structural?' and 'Why is my budget on fire?'"
      aside="A real contact flow can wait. A real route cannot. Broken navigation is less charming than a contractor who says 'I'll definitely be there at 8.'"
      bullets={[
        "Use this page later for support, bookings, quote requests, or a form titled 'Please explain what my builder meant by character.'",
        "Good contact UX matters because renovation questions rarely arrive calm, concise, or with all relevant measurements attached.",
        "If nothing else, it should eventually include a category for 'I bought paint samples and now my house looks emotionally unstable.'",
      ]}
      primaryHref="/research"
      primaryLabel="Ask A Research Question"
      secondaryHref="/pricing"
      secondaryLabel="See Pricing"
    />
  )
}
