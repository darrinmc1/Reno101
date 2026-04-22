import StarterPage from "@/components/starter-page"

export default function SignupPage() {
  return (
    <StarterPage
      eyebrow="Join The Chaos"
      title="Create Your Account"
      description="One day this page will welcome new users. Today it mostly stands here looking confident and pretending Stripe and auth are already old friends."
      aside="Good onboarding for a renovation platform should feel calm, competent, and mildly reassuring, like a project manager who has seen a crooked backsplash before and lived."
      bullets={[
        "Future sign-up steps might capture project type, budget range, renovation timeline, and tolerance for living without a kitchen.",
        "You can also use onboarding to sort users into homeowner, DIY, designer, or professional flows instead of dumping everyone into the same beige hallway.",
      ]}
      primaryHref="/pricing"
      primaryLabel="View Plans"
      secondaryHref="/login"
      secondaryLabel="Back To Login"
    />
  )
}
