import StarterPage from "@/components/starter-page"

export default function PrivacyPage() {
  return (
    <StarterPage
      eyebrow="Your Data, Probably"
      title="Privacy Policy"
      description="This is where you will eventually explain what data you collect, why you collect it, and whether you truly needed to know someone owns fourteen paint swatches named 'warm oatmeal'."
      aside="Write the real version before adding analytics, forms, or accounts. Privacy policies are much more convincing when they exist before the data starts flowing."
      bullets={[
        "Future topics: email capture, analytics, account storage, saved projects, and whether uploaded kitchen photos will be used for anything beyond helping that kitchen.",
        "The ideal tone is trustworthy and clear, not 'we value your privacy' followed by three pages of legal smoke bombs.",
      ]}
      primaryHref="/contact"
      primaryLabel="Ask A Question"
      secondaryHref="/terms"
      secondaryLabel="See Terms"
    />
  )
}
