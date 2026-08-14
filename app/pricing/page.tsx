import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { EmailCapture } from "@/components/email-capture"
import { PriceDisclaimer } from "@/components/price-disclaimer"

export const metadata = {
  title: "Pricing",
  description:
    "Free Starter Pack now. Project Bundle AU$49 one-off and All-Access AU$149/year on the waitlist — we'll email when Stripe checkout is live.",
}

const plans = [
  {
    name: "Starter Pack",
    kind: "Live now",
    price: "Free",
    unit: "",
    tagline: "Enough to figure out if you're actually doing this.",
    features: [
      "Free Renovation Starter Pack",
      "Any individual free checklist",
      "Weekly renovation tip email",
      "Full access to the blog",
    ],
    cta: "Get the free Starter Pack",
    href: "#subscribe",
    highlighted: true,
    flag: "Start here",
  },
  {
    name: "Project Bundle",
    kind: "Project Bundle · soon",
    price: "AU$49",
    unit: " one-off",
    tagline: "Renovating one room? Everything for that job — when checkout lands.",
    features: [
      "Kitchen, Bathroom, Laundry or Outdoor pack",
      "All ebooks, templates, checklists & tools for that project",
      "Printable project tracker PDF",
      "Lifetime access + one year of free updates",
    ],
    cta: "Join the waitlist",
    href: "#subscribe",
    highlighted: false,
    flag: "Best for one room",
    footnote: "We'll email when Stripe checkout is live. No charge until then.",
  },
  {
    name: "All-Access",
    kind: "All-Access · soon",
    price: "AU$149",
    unit: " / year",
    tagline: "For multi-room renos and chaos managers with receipts.",
    features: [
      "Every stage, every resource, every bundle",
      "New content added every month",
      "Reno Advisor — one cited answer from the 16-stage guides",
      "Early access to new stages — cancel renewal anytime",
    ],
    cta: "Join the waitlist",
    href: "#subscribe",
    highlighted: false,
    footnote: "We'll email when Stripe checkout is live. No charge until then.",
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-border/70 bg-background/40 py-16 text-center">
        <div className="container px-4 md:px-6">
          <Badge className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-800 hover:bg-amber-100">
            Paid packs on the waitlist
          </Badge>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
            Start free. Paid packs when checkout&apos;s actually live.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            The Starter Pack is yours now — drop your email. Project Bundle AU$49 one-off and All-Access AU$149/year
            stay listed so you know what&apos;s coming. We&apos;ll email when Stripe checkout is live. No fake checkout.
          </p>
        </div>
      </section>

      <section id="bundles" className="container scroll-mt-24 px-4 py-16 md:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex h-full flex-col rounded-2xl ${
                plan.highlighted
                  ? "border-0 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-xl"
                  : "border-2"
              }`}
            >
              {plan.flag && (
                <div
                  className={`absolute -top-3 right-4 rounded-full px-3 py-1 text-xs font-bold shadow ${
                    plan.highlighted
                      ? "bg-background text-primary"
                      : "border border-border bg-background text-muted-foreground"
                  }`}
                >
                  {plan.flag}
                </div>
              )}
              <CardHeader>
                <div
                  className={`text-xs font-semibold uppercase tracking-widest ${
                    plan.highlighted ? "opacity-90" : "text-muted-foreground"
                  }`}
                >
                  {plan.kind}
                </div>
                <CardTitle className="mt-2 flex items-baseline gap-1">
                  <span className={`text-4xl font-extrabold ${plan.highlighted ? "" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlighted ? "opacity-90" : "text-muted-foreground"}`}>
                    {plan.unit}
                  </span>
                </CardTitle>
                <p className={`mt-3 text-sm ${plan.highlighted ? "opacity-90" : "text-muted-foreground"}`}>
                  {plan.tagline}
                </p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2.5 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check
                        className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                          plan.highlighted ? "text-primary-foreground" : "text-primary"
                        }`}
                        aria-hidden
                      />
                      <span className={plan.highlighted ? "" : "text-foreground"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.footnote && (
                  <p className={`mt-4 text-xs ${plan.highlighted ? "opacity-80" : "text-muted-foreground"}`}>
                    {plan.footnote}
                  </p>
                )}
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant={plan.highlighted ? "secondary" : "outline"}
                  className={`w-full rounded-lg ${
                    plan.highlighted ? "bg-background text-primary hover:bg-background/90" : ""
                  }`}
                >
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Prices in AUD. Checkout isn&apos;t live yet — free Starter Pack and waitlist only for now.
        </p>
        <div className="mt-10">
          <PriceDisclaimer />
        </div>
      </section>

      <section id="subscribe" className="container px-4 pb-16 md:px-6">
        <div className="mx-auto max-w-4xl">
          <EmailCapture
            variant="hero"
            theme="orange"
            heading="Get the free Starter Pack — or join the paid waitlist"
            subheading="We'll email when Stripe checkout is live for the Project Bundle (AU$49) and All-Access (AU$149/year). No charge until then."
            source="pricing-waitlist"
            showName
          />
        </div>
        <div className="mt-6 text-center">
          <Button asChild variant="link" className="text-primary">
            <Link href="/#bundles">
              See the same packs on the homepage
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
