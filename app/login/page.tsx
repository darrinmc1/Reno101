import StarterPage from "@/components/starter-page"

export default function LoginPage() {
  return (
    <StarterPage
      eyebrow="Secret Entrance"
      title="Log In"
      description="Authentication is not wired up yet, which is honestly the safest possible security model: nobody gets in, including you."
      aside="When you do implement auth, aim for something more elegant than emailing yourself a six-digit code and hoping future-you remembers what it was for."
      bullets={[
        "Future users should be able to save projects, track materials, and resume their very specific grudge against splashback pricing.",
        "This page currently works as a placeholder and as a gentle reminder that auth is always 'just one quick feature' until it absolutely is not.",
      ]}
      primaryHref="/dashboard"
      primaryLabel="Peek At The Dashboard"
      secondaryHref="/signup"
      secondaryLabel="Fake Sign Up"
    />
  )
}
