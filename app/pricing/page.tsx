import { Check, X, HelpCircle, Zap, Shield, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const TIERS = [
  {
    name: "Free",
    price: 0,
    period: null,
    description: "Dip your toes in. No credit card, no commitment, no regrets.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlight: false,
    badge: null,
    icon: Zap,
    features: [
      { label: "Access to 10 renovation guides", included: true },
      { label: "Basic project cost estimator", included: true },
      { label: "Renovation glossary", included: true },
      { label: "Community blog access", included: true },
      { label: "AI-powered project planner", included: false },
      { label: "Full guide library (100+ guides)", included: false },
      { label: "Material tracker tool", included: false },
      { label: "Contractor question templates", included: false },
      { label: "Priority email support", included: false },
      { label: "Downloadable checklists & templates", included: false },
    ],
  },
  {
    name: "Pro",
    price: 9,
    period: "month",
    description: "For the homeowner who's serious about not getting ripped off or making expensive mistakes.",
    cta: "Start 7-Day Free Trial",
    ctaHref: "/sign-up?plan=pro",
    highlight: true,
    badge: "Most Popular",
    icon: Star,
    features: [
      { label: "Access to 10 renovation guides", included: true },
      { label: "Basic project cost estimator", included: true },
      { label: "Renovation glossary", included: true },
      { label: "Community blog access", included: true },
      { label: "AI-powered project planner", included: true },
      { label: "Full guide library (100+ guides)", included: true },
      { label: "Material tracker tool", included: true },
      { label: "Contractor question templates", included: true },
      { label: "Priority email support", included: false },
      { label: "Downloadable checklists & templates", included: false },
    ],
  },
  {
    name: "Pro+",
    price: 19,
    period: "month",
    description: "Everything in Pro, plus the tools that save you real money when the stakes are high.",
    cta: "Start 7-Day Free Trial",
    ctaHref: "/sign-up?plan=pro-plus",
    highlight: false,
    badge: "Best Value",
    icon: Shield,
    features: [
      { label: "Access to 10 renovation guides", included: true },
      { label: "Basic project cost estimator", included: true },
      { label: "Renovation glossary", included: true },
      { label: "Community blog access", included: true },
      { label: "AI-powered project planner", included: true },
      { label: "Full guide library (100+ guides)", included: true },
      { label: "Material tracker tool", included: true },
      { label: "Contractor question templates", included: true },
      { label: "Priority email support", included: true },
      { label: "Downloadable checklists & templates", included: true },
    ],
  },
]

const FAQS = [
  {
    q: "Can I cancel anytime?",
    a: "Yes, absolutely. No cancellation fees, no awkward phone calls, no guilt trips. Cancel from your account settings in under 30 seconds.",
  },
  {
    q: "What happens when my free trial ends?",
    a: "We'll send you a reminder before it ends. If you don't upgrade, you'll automatically drop to the Free plan — you won't be charged anything.",
  },
  {
    q: "Is the AI project planner actually useful or just a gimmick?",
    a: "Fair question. It's genuinely useful: it helps you scope projects, flag things you've probably forgotten (like permits, demo disposal, and lead times), and gives you realistic budget ranges based on your region and project type.",
  },
  {
    q: "Do you offer refunds?",
    a: "If you're not happy within the first 14 days of a paid plan, email us and we'll refund you. No questions asked — though we might ask what we could do better.",
  },
  {
    q: "What's the difference between Pro and Pro+?",
    a: "Pro gives you the full content library and AI tools. Pro+ adds priority support (real humans, fast responses) and all our downloadable templates — the checklists, contractor bid comparison sheets, and room-by-room planning docs that save you hours.",
  },
  {
    q: "Do you offer annual billing?",
    a: "Yes — pay annually and get 2 months free. Switch to annual billing anytime from your account settings.",
  },
]

const COMPARISON_FEATURES = [
  { category: "Content", features: [
    { label: "Renovation guides", free: "10 guides", pro: "100+ guides", proPlus: "100+ guides" },
    { label: "Renovation glossary", free: true, pro: true, proPlus: true },
    { label: "Blog & community content", free: true, pro: true, proPlus: true },
    { label: "Downloadable checklists & templates", free: false, pro: false, proPlus: true },
  ]},
  { category: "Tools", features: [
    { label: "Basic cost estimator", free: true, pro: true, proPlus: true },
    { label: "AI-powered project planner", free: false, pro: true, proPlus: true },
    { label: "Material tracker", free: false, pro: true, proPlus: true },
    { label: "Contractor question templates", free: false, pro: true, proPlus: true },
  ]},
  { category: "Support", features: [
    { label: "Community access", free: true, pro: true, proPlus: true },
    { label: "Email support", free: false, pro: false, proPlus: true },
    { label: "Priority response (< 24 hrs)", free: false, pro: false, proPlus: true },
  ]},
]

function FeatureValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="text-sm text-slate-700">{value}</span>
  }
  if (value) {
    return <Check className="mx-auto h-5 w-5 text-amber-500" />
  }
  return <X className="mx-auto h-5 w-5 text-slate-300" />
}

export default function PricingPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-amber-50 to-white px-4 py-16 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Pricing</p>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Honest pricing for honest renovators
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          No hidden fees. No "call for pricing." No tier called "Enterprise" that costs more than your bathroom remodel.
          Just straightforward plans that match where you are in your project.
        </p>
        <p className="mt-3 text-sm text-slate-500">
          All paid plans include a <strong>7-day free trial</strong>. Cancel anytime.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {TIERS.map((tier) => {
            const Icon = tier.icon
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border p-8 shadow-sm ${
                  tier.highlight
                    ? "border-amber-400 bg-amber-50 shadow-amber-100 ring-2 ring-amber-400"
                    : "border-slate-200 bg-white"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-amber-500 text-white hover:bg-amber-500">{tier.badge}</Badge>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                      tier.highlight ? "bg-amber-500 text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">{tier.name}</h2>
                </div>

                <div className="mt-4">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold text-slate-900">
                      {tier.price === 0 ? "Free" : `$${tier.price}`}
                    </span>
                    {tier.period && (
                      <span className="mb-1 text-slate-500">/{tier.period}</span>
                    )}
                  </div>
                  {tier.price > 0 && (
                    <p className="mt-1 text-xs text-slate-500">
                      or ${tier.price === 9 ? "90" : "190"}/year (save 2 months)
                    </p>
                  )}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">{tier.description}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f.label} className="flex items-start gap-2">
                      {f.included ? (
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
                      ) : (
                        <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-300" />
                      )}
                      <span
                        className={`text-sm ${
                          f.included ? "text-slate-700" : "text-slate-400"
                        }`}
                      >
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    asChild
                    className={`w-full rounded-xl ${
                      tier.highlight
                        ? "bg-amber-500 text-white hover:bg-amber-600"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    <Link href={tier.ctaHref}>{tier.cta}</Link>
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          Prices in USD. Taxes may apply depending on your location.
        </p>
      </section>

      {/* Feature Comparison Table */}
      <section className="bg-slate-50 px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-2 text-center text-3xl font-bold text-slate-900">Full feature comparison</h2>
          <p className="mb-10 text-center text-slate-600">
            Not sure which plan is right for you? Here's everything, side by side.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="px-6 py-4 text-left font-semibold text-slate-700">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold text-slate-700">Free</th>
                  <th className="bg-amber-50 px-6 py-4 text-center font-semibold text-amber-700">Pro</th>
                  <th className="px-6 py-4 text-center font-semibold text-slate-700">Pro+</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_FEATURES.map((section) => (
                  <>
                    <tr key={section.category} className="border-b border-slate-100 bg-slate-50">
                      <td colSpan={4} className="px-6 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {section.category}
                      </td>
                    </tr>
                    {section.features.map((f) => (
                      <tr key={f.label} className="border-b border-slate-100 last:border-0">
                        <td className="px-6 py-3 text-slate-700">{f.label}</td>
                        <td className="px-6 py-3 text-center">
                          <FeatureValue value={f.free} />
                        </td>
                        <td className="bg-amber-50/50 px-6 py-3 text-center">
                          <FeatureValue value={f.pro} />
                        </td>
                        <td className="px-6 py-3 text-center">
                          <FeatureValue value={f.proPlus} />
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { stat: "12,000+", label: "homeowners planning smarter renovations" },
              { stat: "$3,200", label: "average savings reported by Pro members" },
              { stat: "4.8/5", label: "average rating from verified users" },
            ].map((item) => (
              <div key={item.stat} className="rounded-2xl border bg-white p-6 text-center shadow-sm">
                <p className="text-3xl font-bold text-amber-500">{item.stat}</p>
                <p className="mt-1 text-sm text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
              <HelpCircle className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Frequently asked questions</h2>
            <p className="mt-2 text-slate-600">
              Still on the fence? These are the questions we get most often.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Still have questions?{" "}
            <Link href="/contact" className="font-medium text-amber-600 hover:underline">
              Drop us a line
            </Link>
            {" "}— we actually respond.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-2xl rounded-2xl bg-amber-500 p-10 text-center shadow-lg">
          <h2 className="text-3xl font-bold text-white">Ready to renovate smarter?</h2>
          <p className="mt-3 text-amber-100">
            Start free. Upgrade when you need more. Cancel whenever you want. Your next project will thank you.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild className="rounded-xl bg-white px-8 text-amber-600 hover:bg-amber-50">
              <Link href="/sign-up">Get Started Free</Link>
            </Button>
            <Button asChild variant="ghost" className="rounded-xl text-white hover:bg-amber-600 hover:text-white">
              <Link href="/sign-up?plan=pro">Start Pro Trial →</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
