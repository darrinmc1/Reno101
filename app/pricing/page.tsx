import { Check, X, HelpCircle, Zap, Shield, Star } from "lucide-react"
import Link from "next/link"

const TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with the basics. Perfect for a single project or just kicking the tires.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlight: false,
    badge: null,
    features: [
      "Access to 10 renovation guides",
      "Basic cost estimator",
      "Community Q&A access",
      "1 active project",
      "Email support (48h response)",
    ],
    missing: [
      "AI-powered renovation planner",
      "Unlimited projects",
      "Material tracker",
      "Contractor comparison tools",
      "Priority support",
      "Downloadable checklists & templates",
    ],
  },
  {
    name: "Pro",
    price: "$12",
    period: "per month",
    description: "For the serious renovator juggling multiple rooms, timelines, and a contractor who never texts back.",
    cta: "Start Pro — 7 Days Free",
    ctaHref: "/sign-up?plan=pro",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Access to all 200+ renovation guides",
      "AI-powered renovation planner",
      "Unlimited projects",
      "Material tracker with cost history",
      "Contractor comparison tools",
      "Downloadable checklists & templates",
      "Priority email support (4h response)",
    ],
    missing: [
      "White-label reports",
      "Team collaboration (multi-user)",
    ],
  },
  {
    name: "Contractor",
    price: "$39",
    period: "per month",
    description: "Built for pros managing client projects. Impress clients with polished reports and keep every job on track.",
    cta: "Start Contractor Plan",
    ctaHref: "/sign-up?plan=contractor",
    highlight: false,
    badge: "Best for Pros",
    features: [
      "Everything in Pro",
      "White-label client reports",
      "Team collaboration (up to 5 users)",
      "Client portal sharing",
      "Advanced budget analytics",
      "Dedicated account manager",
      "Phone & email support (1h response)",
    ],
    missing: [],
  },
]

const COMPARISON = [
  { feature: "Renovation guides", free: "10 guides", pro: "200+ guides", contractor: "200+ guides" },
  { feature: "Active projects", free: "1", pro: "Unlimited", contractor: "Unlimited" },
  { feature: "AI renovation planner", free: false, pro: true, contractor: true },
  { feature: "Material tracker", free: false, pro: true, contractor: true },
  { feature: "Cost estimator", free: "Basic", pro: "Advanced", contractor: "Advanced" },
  { feature: "Contractor comparison", free: false, pro: true, contractor: true },
  { feature: "Downloadable templates", free: false, pro: true, contractor: true },
  { feature: "White-label reports", free: false, pro: false, contractor: true },
  { feature: "Team collaboration", free: false, pro: false, contractor: "Up to 5 users" },
  { feature: "Client portal", free: false, pro: false, contractor: true },
  { feature: "Support", free: "Email (48h)", pro: "Priority email (4h)", contractor: "Phone + email (1h)" },
]

const FAQS = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. No contracts, no cancellation fees. Cancel from your dashboard and you keep access until the end of your billing period. We're not the gym membership type.",
  },
  {
    q: "What happens to my projects if I downgrade?",
    a: "Your data stays safe. If you downgrade to Free, projects beyond the 1-project limit are archived (not deleted) and become accessible again if you re-upgrade.",
  },
  {
    q: "Is the 7-day Pro trial really free?",
    a: "Completely free — no charge until day 8. We'll send you a reminder on day 6 so you're never surprised. Cancel before then and you owe nothing.",
  },
  {
    q: "Do you offer annual billing?",
    a: "Yes! Pay annually and save 20% on Pro ($115/yr instead of $144) and Contractor ($374/yr instead of $468). Switch to annual billing anytime from your account settings.",
  },
  {
    q: "Can I switch plans mid-month?",
    a: "Absolutely. Upgrades take effect immediately and we prorate the difference. Downgrades take effect at the start of your next billing cycle.",
  },
  {
    q: "Do you offer discounts for students or non-profits?",
    a: "We offer 50% off Pro for verified students and registered non-profits. Email us at hello@renos101.com with proof and we'll sort you out within one business day.",
  },
]

function FeatureCell({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="mx-auto h-5 w-5 text-amber-600" />
  if (value === false) return <X className="mx-auto h-5 w-5 text-slate-300" />
  return <span className="text-sm text-slate-700">{value}</span>
}

export default function PricingPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16 space-y-20">

      {/* Hero */}
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Pricing</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Honest pricing. No surprises.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Pick the plan that matches your project. Upgrade, downgrade, or cancel whenever you like — we&apos;re not going to make it weird.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm text-amber-700 border border-amber-200">
          <Zap className="h-4 w-4" />
          Annual billing saves you up to 20% — switch anytime
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-2xl border p-8 shadow-sm flex flex-col ${
              tier.highlight
                ? "border-amber-400 bg-amber-50 shadow-amber-100 shadow-lg ring-2 ring-amber-400"
                : "border-slate-200 bg-white"
            }`}
          >
            {tier.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className={`rounded-full px-4 py-1 text-xs font-semibold ${
                  tier.highlight ? "bg-amber-500 text-white" : "bg-slate-800 text-white"
                }`}>
                  {tier.badge}
                </span>
              </div>
            )}

            <div>
              <h2 className="text-lg font-semibold text-slate-900">{tier.name}</h2>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                <span className="mb-1 text-sm text-slate-500">/{tier.period}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{tier.description}</p>
            </div>

            <div className="mt-6 flex-1 space-y-3">
              {tier.features.map((f) => (
                <div key={f} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                  <span className="text-sm text-slate-700">{f}</span>
                </div>
              ))}
              {tier.missing.map((f) => (
                <div key={f} className="flex items-start gap-2 opacity-40">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                  <span className="text-sm text-slate-500 line-through">{f}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href={tier.ctaHref}
                className={`block w-full rounded-xl px-6 py-3 text-center text-sm font-semibold transition-colors ${
                  tier.highlight
                    ? "bg-amber-500 text-white hover:bg-amber-600"
                    : "bg-slate-900 text-white hover:bg-slate-700"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex items-center gap-3 rounded-2xl border bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Cancel anytime</p>
            <p className="text-xs text-slate-500">No contracts. No cancellation fees. Ever.</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-2xl border bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
            <Zap className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">7-day free trial</p>
            <p className="text-xs text-slate-500">Try Pro free. No credit card required to start.</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-2xl border bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
            <Star className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">4.8 / 5 average rating</p>
            <p className="text-xs text-slate-500">From 1,200+ renovators who survived their projects.</p>
          </div>
        </div>
      </div>

      {/* Feature Comparison Table */}
      <div>
        <div className="text-center mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Compare Plans</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Everything side by side</h2>
          <p className="mt-2 text-slate-600">No fine print. Just a straightforward look at what you get.</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="px-6 py-4 text-left font-semibold text-slate-700">Feature</th>
                <th className="px-6 py-4 text-center font-semibold text-slate-700">Free</th>
                <th className="px-6 py-4 text-center font-semibold text-amber-700 bg-amber-50">Pro</th>
                <th className="px-6 py-4 text-center font-semibold text-slate-700">Contractor</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-slate-100 ${
                    i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                  }`}
                >
                  <td className="px-6 py-4 font-medium text-slate-800">{row.feature}</td>
                  <td className="px-6 py-4 text-center">
                    <FeatureCell value={row.free} />
                  </td>
                  <td className="px-6 py-4 text-center bg-amber-50/40">
                    <FeatureCell value={row.pro} />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <FeatureCell value={row.contractor} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <div className="text-center mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">FAQ</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Questions we actually get asked</h2>
          <p className="mt-2 text-slate-600">If yours isn&apos;t here, email us. We respond fast.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {FAQS.map((faq) => (
            <div key={faq.q} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                  <HelpCircle className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{faq.q}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="rounded-2xl border bg-amber-50 p-8 text-center md:p-12">
        <p className="text-xl font-semibold text-slate-900">Still not sure which plan is right for you?</p>
        <p className="mt-2 text-slate-600">
          Start free — no credit card needed. You can upgrade the moment you need more, and we&apos;ll prorate everything fairly.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/sign-up"
            className="rounded-xl bg-amber-500 px-8 py-3 text-sm font-semibold text-white hover:bg-amber-600 transition-colors"
          >
            Start for Free
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Talk to Us First
          </Link>
        </div>
      </div>

    </div>
  )
}
