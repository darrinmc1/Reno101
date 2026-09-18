import Link from "next/link"
import { Check, X, Zap, Shield, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const TIERS = [
  {
    name: "Free",
    icon: Zap,
    price: "$0",
    period: "forever",
    description: "Perfect for homeowners planning their first renovation project.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlight: false,
    badge: null,
    features: [
      { label: "Access to all blog guides", included: true },
      { label: "Renovation glossary", included: true },
      { label: "Basic project stage guides", included: true },
      { label: "FAQ library", included: true },
      { label: "AI renovation assistant", included: false },
      { label: "Material cost tracker", included: false },
      { label: "Downloadable checklists & templates", included: false },
      { label: "Design tools suite", included: false },
      { label: "Priority email support", included: false },
      { label: "Contractor comparison worksheets", included: false },
    ],
  },
  {
    name: "Pro",
    icon: Shield,
    price: "$9",
    period: "per month",
    description: "For serious renovators who want every tool in one place.",
    cta: "Start Pro — 7 Days Free",
    ctaHref: "/sign-up?plan=pro",
    highlight: true,
    badge: "Most Popular",
    features: [
      { label: "Access to all blog guides", included: true },
      { label: "Renovation glossary", included: true },
      { label: "Basic project stage guides", included: true },
      { label: "FAQ library", included: true },
      { label: "AI renovation assistant", included: true },
      { label: "Material cost tracker", included: true },
      { label: "Downloadable checklists & templates", included: true },
      { label: "Design tools suite", included: true },
      { label: "Priority email support", included: false },
      { label: "Contractor comparison worksheets", included: false },
    ],
  },
  {
    name: "Expert",
    icon: Crown,
    price: "$19",
    period: "per month",
    description: "For multi-project renovators and small contractors who need it all.",
    cta: "Start Expert — 7 Days Free",
    ctaHref: "/sign-up?plan=expert",
    highlight: false,
    badge: "Best Value",
    features: [
      { label: "Access to all blog guides", included: true },
      { label: "Renovation glossary", included: true },
      { label: "Basic project stage guides", included: true },
      { label: "FAQ library", included: true },
      { label: "AI renovation assistant", included: true },
      { label: "Material cost tracker", included: true },
      { label: "Downloadable checklists & templates", included: true },
      { label: "Design tools suite", included: true },
      { label: "Priority email support", included: true },
      { label: "Contractor comparison worksheets", included: true },
    ],
  },
]

const FAQS = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. No contracts, no cancellation fees. Cancel from your dashboard and your access continues until the end of the billing period.",
  },
  {
    q: "What happens after the 7-day free trial?",
    a: "You'll be charged at your chosen plan rate. We'll send a reminder email 24 hours before the trial ends — no surprise charges.",
  },
  {
    q: "Is there a discount for annual billing?",
    a: "Yes — pay annually and get 2 months free. Switch to annual billing any time from your account settings.",
  },
  {
    q: "Do I need a credit card to start the free plan?",
    a: "Nope. The free plan is genuinely free — no card required, no trial period, no expiry.",
  },
]

export default function PricingPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      {/* Header */}
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Pricing</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Plans that match your project
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Whether you&rsquo;re repainting one room or gutting a whole house, there&rsquo;s a plan that fits.
          Start free — upgrade when you need more firepower.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {TIERS.map((tier) => {
          const Icon = tier.icon
          return (
            <Card
              key={tier.name}
              className={`relative flex flex-col overflow-hidden rounded-2xl shadow-sm ${
                tier.highlight
                  ? "border-2 border-amber-400 bg-amber-50 shadow-lg"
                  : "border bg-white"
              }`}
            >
              {tier.badge && (
                <div
                  className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
                    tier.highlight
                      ? "bg-amber-400 text-white"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {tier.badge}
                </div>
              )}
              <CardHeader className="pb-4 pt-8">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    tier.highlight ? "bg-amber-200 text-amber-700" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4 text-xl font-bold text-slate-900">{tier.name}</CardTitle>
                <p className="text-sm text-slate-500">{tier.description}</p>
                <div className="mt-4 flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
                  <span className="mb-1 text-sm text-slate-500">/{tier.period}</span>
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature.label} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
                      ) : (
                        <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-300" />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? "text-slate-700" : "text-slate-400"
                        }`}
                      >
                        {feature.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-6">
                <Link href={tier.ctaHref} className="w-full">
                  <Button
                    className={`w-full rounded-xl py-5 text-sm font-semibold ${
                      tier.highlight
                        ? "bg-amber-500 text-white hover:bg-amber-600"
                        : "bg-slate-900 text-white hover:bg-slate-700"
                    }`}
                  >
                    {tier.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          )
        })}
      </div>

      {/* Feature Comparison Table */}
      <div className="mt-20">
        <h2 className="text-center text-2xl font-bold text-slate-900">Full feature comparison</h2>
        <p className="mt-2 text-center text-sm text-slate-500">See exactly what&rsquo;s included at every level.</p>
        <div className="mt-8 overflow-x-auto rounded-2xl border bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-slate-50">
                <th className="px-6 py-4 text-left font-semibold text-slate-700">Feature</th>
                <th className="px-6 py-4 text-center font-semibold text-slate-700">Free</th>
                <th className="px-6 py-4 text-center font-semibold text-amber-600">Pro</th>
                <th className="px-6 py-4 text-center font-semibold text-slate-700">Expert</th>
              </tr>
            </thead>
            <tbody>
              {TIERS[0].features.map((feature, i) => (
                <tr key={feature.label} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                  <td className="px-6 py-3 text-slate-700">{feature.label}</td>
                  <td className="px-6 py-3 text-center">
                    {TIERS[0].features[i].included ? (
                      <Check className="mx-auto h-4 w-4 text-amber-500" />
                    ) : (
                      <X className="mx-auto h-4 w-4 text-slate-300" />
                    )}
                  </td>
                  <td className="px-6 py-3 text-center">
                    {TIERS[1].features[i].included ? (
                      <Check className="mx-auto h-4 w-4 text-amber-500" />
                    ) : (
                      <X className="mx-auto h-4 w-4 text-slate-300" />
                    )}
                  </td>
                  <td className="px-6 py-3 text-center">
                    {TIERS[2].features[i].included ? (
                      <Check className="mx-auto h-4 w-4 text-amber-500" />
                    ) : (
                      <X className="mx-auto h-4 w-4 text-slate-300" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-20">
        <h2 className="text-center text-2xl font-bold text-slate-900">Pricing questions, answered</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {FAQS.map((faq) => (
            <div key={faq.q} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">{faq.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 rounded-2xl border bg-amber-50 p-10 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Still not sure which plan is right?</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">
          Start with the free plan — no card required. You can upgrade in seconds once you see what
          the tools can do for your project.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/sign-up">
            <Button className="rounded-xl bg-amber-500 px-8 py-5 text-sm font-semibold text-white hover:bg-amber-600">
              Start for free
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="rounded-xl px-8 py-5 text-sm font-semibold">
              Talk to us first
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
