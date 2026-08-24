import { EmailCapture } from "@/components/email-capture"
import { WaitlistPricingSection } from "@/components/waitlist-pricing"

export const metadata = {
  title: "Pricing",
  description:
    "Start free. Paid packs when checkout's actually live — AU$49 Project Bundle, AU$149 All-Access. Waitlist only.",
}

export default function PricingPage() {
  return (
    <main className="flex-1">
      <WaitlistPricingSection headingAs="h1" />

      <section id="subscribe" className="container px-4 py-16 md:px-6">
        <div className="mx-auto max-w-4xl">
          <EmailCapture
            variant="hero"
            theme="orange"
            heading="Get the free Renovation Starter Pack"
            subheading="The Ideas and Planning stage checklists, a quote comparison template, and a budget tracker — delivered to your inbox. No spam, no man named Gary."
            source="pricing-starter-pack"
            showName
          />
        </div>
      </section>
    </main>
  )
}
