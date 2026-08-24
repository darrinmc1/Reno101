import { Check, X, HelpCircle, Zap, Shield, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for dipping your toes in before committing to anything — like testing a paint color on one wall.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlight: false,
    badge: null,
    features: [
      "Access to 10 renovation guides",
      "Basic cost estimator",
      "Community Q&A access",
      "Weekly newsletter",
      "1 active project",
    ],
    missing: [
      "AI renovation assistant",
      "Full guide library (200+)",
      "Material tracker",
      "Contractor comparison tool",
      "Priority support",
      "Downloadable checklists & templates",
    ],
  },
  {
    name: "Pro",
    price: "$9",
    period: "per month",
    description: "For the homeowner who has accepted that this renovation will take longer than a weekend and wants to do it right.",
    cta: "Start Pro — 7 Days Free",
    ctaHref: "/sign-up?plan=pro",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Free",
      "Full guide library (200+ guides)",
      "AI renovation assistant",
      "Material tracker & cost logger",
      "Contractor comparison tool",
      "Downloadable checklists & templates",
      "Up to 5 active projects",
      "Email support",
    ],
    missing: [
      "Priority support",
      "Custom project reports",
    ],
  },
  {
    name: "Expert",
    price: "$19",
    period: "per month",
    description: "For serial renovators, landlords, or anyone who has said \"just one more project\" more than three times.",
    cta: "Start Expert — 7 Days Free",
    ctaHref: "/sign-up?plan=expert",
    highlight: false,
    badge: "Best Value",
    features: [
      "Everything in Pro",
      "Unlimited active projects",
      "Custom project reports (PDF export)",
      "Priority support (24h response)",
      "Early access to new tools",
      "Dedicated onboarding call",
    ],
    missing: [],
  },
]

const FEATURE_MATRIX = [
  { feature: "Renovation guides", free: "10 guides", pro: "200+ guides", expert: "200+ guides" },
  { feature: "Active projects", free: "1", pro: "5", expert: "Unlimited" },
  { feature: "AI renovation assistant", free: false, pro: true, expert: true },
  { feature: "Material tracker", free: false, pro: true, expert: true },
  { feature: "Cost estimator", free: "Basic", pro: "Advanced", expert: "Advanced" },
  { feature: "Contractor comparison", free: false, pro: true, expert: true },
  { feature: "Checklists & templates", free: false, pro: true, expert: true },
  { feature: "PDF project reports", free: false, pro: false, expert: true },
  { feature: "Support", free: "Community", pro: "Email", expert: "Priority (24h)" },
  { feature: "Onboarding call", free: false, pro: false, expert: true },
  { feature: "Early feature access", free: false, pro: false, expert: true },
]

const FAQS = [
  {
    q: "Can I cancel anytime?",
    a: "Yes, absolutely. No contracts, no cancellation fees, no passive-aggressive emails asking why you left. Cancel from your account settings whenever you like.",
  },
  {
    q: "What happens to my projects if I downgrade?",
    a: "Your data stays safe. If you have more active projects than your new plan allows, they'll be archived (not deleted) and you can reactivate them if you upgrade again.",
  },
  {
    q: "Is the 7-day free trial actually free?",
    a: "Yes. We ask for a card to start the trial, but you won't be charged until day 8. Cancel before then and you owe nothing. We're not trying to trick you — we just want you to see the value first.",
  },
  {
    q: "What counts as an 'active project'?",
    a: "Any renovation project you're actively tracking in your dashboard. Completed or archived projects don't count toward your limit.",
  },
  {
    q: "Do you offer discounts for annual billing?",
    a: "Yes — pay annually and get 2 months free (roughly 17% off). You'll see the annual option on the checkout page.",
  },
  {
    q: "I'm a contractor. Is there a plan for me?",
    a: "The Expert plan works well for contractors managing multiple client projects. If you need something more custom, reach out via our contact page and we'll figure something out.",
  },
]

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="mx-auto h-5 w-5 text-amber-600" />
  if (value === false) return <X className="mx-auto h-5 w-5 text-slate-300" />
  return <span className="text-sm text-slate-700">{value}</span>
}

export default function PricingPage() {
  return (
    <div className="container mx-auto max-w-6xl space-y-20 px-4 py-16">
      {/* Hero */}
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Pricing</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Simple pricing. No surprises.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Unlike your last renovation quote, our prices don&apos;t change halfway through. Pick the plan that fits where
          you are right now — you can always upgrade later.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className={`relative flex flex-col rounded-2xl border p-8 shadow-sm ${
              tier.highlight
                ? "border-amber-400 bg-amber-50 shadow-amber-100 ring-2 ring-amber-400"
                : "border-slate-200 bg-white"
            }`}
          >
            {tier.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-4 py-1 text-xs font-semibold text-white shadow">
                {tier.badge}
              </span>
            )}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-900">{tier.name}</h2>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
                <span className="mb-1 text-sm text-slate-500">/{tier.period}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{tier.description}</p>
            </div>

            <ul className="mb-8 flex-1 space-y-3">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                  {f}
                </li>
              ))}
              {tier.missing.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-slate-300" />
                  {f}
                </li>
              ))}
            </ul>

            <Link href={tier.ctaHref}>
              <Button
                className={`w-full rounded-xl ${
                  tier.highlight
                    ? "bg-amber-500 text-white hover:bg-amber-600"
                    : "bg-slate-900 text-white hover:bg-slate-700"
                }`}
              >
                {tier.cta}
              </Button>
            </Link>
          </div>
        ))}
      </div>

      {/* Trust bar */}
      <div className="flex flex-wrap items-center justify-center gap-8 rounded-2xl border bg-slate-50 px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Shield className="h-5 w-5 text-amber-600" />
          <span>Cancel anytime, no fees</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Zap className="h-5 w-5 text-amber-600" />
          <span>7-day free trial on paid plans</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Star className="h-5 w-5 text-amber-600" />
          <span>2 months free with annual billing</span>
        </div>
      </div>

      {/* Feature Comparison Table */}
      <div>
        <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">Full feature comparison</h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="px-6 py-4 text-sm font-semibold text-slate-700">Feature</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">Free</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-amber-700">Pro</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">Expert</th>
              </tr>
            </thead>
            <tbody>
              {FEATURE_MATRIX.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-slate-100 ${
                    i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                  }`}
                >
                  <td className="px-6 py-4 text-sm font-medium text-slate-800">{row.feature}</td>
                  <td className="px-6 py-4 text-center">
                    <CellValue value={row.free} />
                  </td>
                  <td className="bg-amber-50/40 px-6 py-4 text-center">
                    <CellValue value={row.pro} />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CellValue value={row.expert} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="mb-2 text-center text-2xl font-bold text-slate-900">Frequently asked questions</h2>
        <p className="mb-10 text-center text-slate-600">
          The questions people actually ask, answered honestly.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {FAQS.map((faq) => (
            <Card key={faq.q} className="rounded-2xl border-slate-200 bg-white shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-start gap-2 text-base font-semibold text-slate-900">
                  <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                  {faq.q}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-slate-600">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="rounded-2xl border bg-amber-50 p-8 text-center md:p-12">
        <p className="text-xl font-semibold text-slate-900">Still not sure which plan is right for you?</p>
        <p className="mt-2 text-slate-600">
          Start free — no card required. Upgrade when you&apos;re ready, or when your renovation scope inevitably expands.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link href="/sign-up">
            <Button className="rounded-xl bg-amber-500 px-8 text-white hover:bg-amber-600">
              Get started for free
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="rounded-xl border-slate-300 px-8 text-slate-700 hover:bg-white">
              Talk to us first
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
