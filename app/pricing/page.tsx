import Link from "next/link"
import { Check, X, Zap, Shield, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const PLANS = [
  {
    name: "Free",
    icon: Zap,
    price: "$0",
    period: "forever",
    description: "Perfect for dipping your toes into your first renovation project.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlight: false,
    color: "text-slate-600",
    bg: "bg-slate-100",
    features: [
      { label: "Access to renovation guides", included: true },
      { label: "Basic project checklists", included: true },
      { label: "Glossary & terminology", included: true },
      { label: "Community blog access", included: true },
      { label: "AI renovation assistant", included: false },
      { label: "Material cost tracker", included: false },
      { label: "Contractor comparison tools", included: false },
      { label: "Priority email support", included: false },
      { label: "Downloadable templates & plans", included: false },
    ],
  },
  {
    name: "Pro",
    icon: Shield,
    price: "$12",
    period: "per month",
    description: "For homeowners actively planning or mid-renovation who need real tools.",
    cta: "Start Pro Trial",
    ctaHref: "/sign-up?plan=pro",
    highlight: true,
    color: "text-amber-600",
    bg: "bg-amber-100",
    features: [
      { label: "Access to renovation guides", included: true },
      { label: "Basic project checklists", included: true },
      { label: "Glossary & terminology", included: true },
      { label: "Community blog access", included: true },
      { label: "AI renovation assistant", included: true },
      { label: "Material cost tracker", included: true },
      { label: "Contractor comparison tools", included: true },
      { label: "Priority email support", included: false },
      { label: "Downloadable templates & plans", included: false },
    ],
  },
  {
    name: "Expert",
    icon: Crown,
    price: "$29",
    period: "per month",
    description: "For serial renovators, flippers, and anyone who treats renos like a second job.",
    cta: "Go Expert",
    ctaHref: "/sign-up?plan=expert",
    highlight: false,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
    features: [
      { label: "Access to renovation guides", included: true },
      { label: "Basic project checklists", included: true },
      { label: "Glossary & terminology", included: true },
      { label: "Community blog access", included: true },
      { label: "AI renovation assistant", included: true },
      { label: "Material cost tracker", included: true },
      { label: "Contractor comparison tools", included: true },
      { label: "Priority email support", included: true },
      { label: "Downloadable templates & plans", included: true },
    ],
  },
]

const COMPARISON_FEATURES = [
  "Access to renovation guides",
  "Basic project checklists",
  "Glossary & terminology",
  "Community blog access",
  "AI renovation assistant",
  "Material cost tracker",
  "Contractor comparison tools",
  "Priority email support",
  "Downloadable templates & plans",
]

const FAQS = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. No contracts, no cancellation fees. Cancel from your dashboard and your plan downgrades to Free at the end of the billing period.",
  },
  {
    q: "Is there a free trial for paid plans?",
    a: "Pro comes with a 7-day free trial. Expert comes with a 14-day free trial. No credit card required to start.",
  },
  {
    q: "What counts as a 'project' in the material tracker?",
    a: "Each distinct renovation scope — a bathroom, a kitchen, a deck — counts as one project. Pro supports up to 5 active projects; Expert is unlimited.",
  },
  {
    q: "Do you offer discounts for multiple properties?",
    a: "Expert plan covers all your properties. If you're managing 10+ units professionally, reach out and we'll talk.",
  },
]

export default function PricingPage() {
  return (
    <div className="container mx-auto max-w-6xl space-y-20 px-4 py-16">
      {/* Hero */}
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Pricing</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Plans that match where you are
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Whether you&rsquo;re planning your first bathroom refresh or flipping your fifth property, there&rsquo;s a tier
          that fits. No surprise charges, no &ldquo;call us for pricing&rdquo; nonsense.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {PLANS.map((plan) => {
          const Icon = plan.icon
          return (
            <Card
              key={plan.name}
              className={`relative overflow-hidden rounded-2xl border shadow-sm ${
                plan.highlight
                  ? "border-amber-400 shadow-amber-100 ring-2 ring-amber-400"
                  : "border-slate-200"
              } bg-white`}
            >
              {plan.highlight && (
                <div className="absolute right-0 top-0 rounded-bl-2xl bg-amber-400 px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}
              <CardHeader className="pb-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${plan.bg} ${plan.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4 text-xl font-bold text-slate-900">{plan.name}</CardTitle>
                <p className="text-sm text-slate-500">{plan.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                  <span className="ml-1 text-sm text-slate-500">/ {plan.period}</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f.label} className="flex items-center gap-3 text-sm">
                      {f.included ? (
                        <Check className="h-4 w-4 flex-shrink-0 text-emerald-500" />
                      ) : (
                        <X className="h-4 w-4 flex-shrink-0 text-slate-300" />
                      )}
                      <span className={f.included ? "text-slate-700" : "text-slate-400"}>{f.label}</span>
                    </li>
                  ))}
                </ul>
                <Link href={plan.ctaHref} className="block">
                  <Button
                    className={`w-full rounded-xl ${
                      plan.highlight
                        ? "bg-amber-500 text-white hover:bg-amber-600"
                        : "bg-slate-900 text-white hover:bg-slate-700"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Comparison Table */}
      <div>
        <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">Full feature comparison</h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="px-6 py-4 text-left font-semibold text-slate-700">Feature</th>
                {PLANS.map((plan) => (
                  <th
                    key={plan.name}
                    className={`px-6 py-4 text-center font-semibold ${
                      plan.highlight ? "text-amber-600" : "text-slate-700"
                    }`}
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_FEATURES.map((feature, idx) => (
                <tr
                  key={feature}
                  className={`border-b border-slate-100 ${
                    idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                  }`}
                >
                  <td className="px-6 py-4 text-slate-700">{feature}</td>
                  {PLANS.map((plan) => {
                    const f = plan.features.find((x) => x.label === feature)
                    return (
                      <td key={plan.name} className="px-6 py-4 text-center">
                        {f?.included ? (
                          <Check className="mx-auto h-5 w-5 text-emerald-500" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-slate-300" />
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">Pricing FAQ</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {FAQS.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="font-semibold text-slate-900">{faq.q}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8 text-center md:p-12">
        <p className="text-xl font-semibold text-slate-900">Still not sure which plan is right for you?</p>
        <p className="mt-2 text-slate-600">
          Start free — no credit card, no commitment. Upgrade when your project demands it.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/sign-up">
            <Button className="rounded-xl bg-amber-500 px-8 text-white hover:bg-amber-600">Start for Free</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="rounded-xl border-slate-300 px-8 text-slate-700 hover:bg-white">
              Talk to Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
