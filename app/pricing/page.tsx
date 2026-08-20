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
      "5 renovation guides",
      "Basic cost estimator",
      "1 active project",
      "Community forum access",
      "Email support (72h response)",
    ],
    missing: [
      "AI renovation assistant",
      "Unlimited projects",
      "Material tracker",
      "Contractor comparison tool",
      "Priority support",
      "Downloadable checklists & templates",
    ],
  },
  {
    name: "Pro",
    price: "$12",
    period: "per month",
    description: "For the serious renovator juggling multiple rooms, contractors, and a spreadsheet that's gotten out of hand.",
    cta: "Start 14-Day Free Trial",
    ctaHref: "/sign-up?plan=pro",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Free",
      "Unlimited renovation guides",
      "AI renovation assistant",
      "Unlimited projects",
      "Material tracker",
      "Contractor comparison tool",
      "Downloadable checklists & templates",
      "Priority support (24h response)",
    ],
    missing: [
      "White-glove onboarding",
      "Dedicated account manager",
    ],
  },
  {
    name: "Contractor",
    price: "$49",
    period: "per month",
    description: "Built for professionals managing multiple client projects. Impress clients with polished reports and real-time tracking.",
    cta: "Contact Sales",
    ctaHref: "/contact",
    highlight: false,
    badge: null,
    features: [
      "Everything in Pro",
      "Up to 25 client projects",
      "Client-facing project reports",
      "White-glove onboarding",
      "Dedicated account manager",
      "Custom branding on exports",
      "Team member seats (up to 5)",
      "API access",
    ],
    missing: [],
  },
]

const COMPARISON_FEATURES = [
  { label: "Renovation guides", free: "5 guides", pro: "Unlimited", contractor: "Unlimited" },
  { label: "Active projects", free: "1", pro: "Unlimited", contractor: "Up to 25 client projects" },
  { label: "AI renovation assistant", free: false, pro: true, contractor: true },
  { label: "Material tracker", free: false, pro: true, contractor: true },
  { label: "Contractor comparison tool", free: false, pro: true, contractor: true },
  { label: "Downloadable checklists & templates", free: false, pro: true, contractor: true },
  { label: "Cost estimator", free: "Basic", pro: "Advanced", contractor: "Advanced" },
  { label: "Support response time", free: "72 hours", pro: "24 hours", contractor: "Dedicated manager" },
  { label: "Client-facing reports", free: false, pro: false, contractor: true },
  { label: "Custom branding on exports", free: false, pro: false, contractor: true },
  { label: "Team member seats", free: false, pro: false, contractor: "Up to 5" },
  { label: "API access", free: false, pro: false, contractor: true },
]

const FAQS = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. No contracts, no cancellation fees. Cancel from your dashboard and you'll keep access until the end of your billing period. We won't guilt-trip you with a sad email.",
  },
  {
    q: "What happens to my projects if I downgrade?",
    a: "Your data is safe. If you downgrade from Pro to Free, your projects are archived (not deleted) and you can access them again if you re-subscribe. We're not monsters.",
  },
  {
    q: "Is the 14-day trial really free? No credit card?",
    a: "The trial is genuinely free. We do ask for a card to start it — so the transition is seamless if you decide to stay — but we won't charge you a cent until day 15, and we'll remind you before that happens.",
  },
  {
    q: "What counts as a 'project'?",
    a: "A project is any renovation scope you track in Reno101 — a bathroom remodel, a kitchen refresh, a full basement finish. Each gets its own budget tracker, material list, and timeline.",
  },
  {
    q: "Do you offer discounts for annual billing?",
    a: "Yes — pay annually and get two months free (effectively 17% off). Switch to annual billing any time from your account settings.",
  },
  {
    q: "I'm a contractor. Can I add my clients to my account?",
    a: "The Contractor plan lets you manage up to 25 client projects and generate client-facing reports with your branding. Need more than 25 projects? Reach out and we'll sort something out.",
  },
]

function FeatureValue({ value }: { value: boolean | string }) {
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
          We know renovation budgets are already stretched. Pick the plan that fits where you are right now — you can always upgrade when the dust settles (literally).
        </p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm text-amber-700 border border-amber-200">
          <Zap className="h-4 w-4" />
          Annual billing saves you 2 months — switch any time in settings
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-2xl border p-8 shadow-sm flex flex-col ${
              tier.highlight
                ? "border-amber-400 bg-amber-50 shadow-amber-100 shadow-md"
                : "border-slate-200 bg-white"
            }`}
          >
            {tier.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white shadow">
                  <Star className="h-3 w-3" />
                  {tier.badge}
                </span>
              </div>
            )}

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">{tier.name}</p>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                <span className="mb-1 text-sm text-slate-500">/{tier.period}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{tier.description}</p>
            </div>

            <ul className="mt-6 space-y-3 flex-1">
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

            <div className="mt-8">
              <Link
                href={tier.ctaHref}
                className={`block w-full rounded-xl py-3 text-center text-sm font-semibold transition-colors ${
                  tier.highlight
                    ? "bg-amber-500 text-white hover:bg-amber-600"
                    : "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Feature Comparison Table */}
      <div>
        <div className="text-center mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Compare Plans</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Everything side by side</h2>
          <p className="mt-2 text-slate-600">So you don&apos;t have to squint at the fine print.</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="py-4 pl-6 pr-4 text-left font-semibold text-slate-700 w-1/2">Feature</th>
                {TIERS.map((tier) => (
                  <th
                    key={tier.name}
                    className={`py-4 px-4 text-center font-semibold ${
                      tier.highlight ? "text-amber-700 bg-amber-50" : "text-slate-700"
                    }`}
                  >
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_FEATURES.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-b border-slate-50 ${
                    i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                  }`}
                >
                  <td className="py-3 pl-6 pr-4 text-slate-700">{row.label}</td>
                  <td className="py-3 px-4 text-center">
                    <FeatureValue value={row.free} />
                  </td>
                  <td className="py-3 px-4 text-center bg-amber-50/40">
                    <FeatureValue value={row.pro} />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <FeatureValue value={row.contractor} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Trust signals */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600 mx-auto">
            <Shield className="h-6 w-6" />
          </div>
          <h3 className="mt-4 font-semibold text-slate-900">No lock-in contracts</h3>
          <p className="mt-2 text-sm text-slate-600">Month-to-month by default. Cancel whenever you want, no questions asked (though we might cry a little).</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600 mx-auto">
            <Zap className="h-6 w-6" />
          </div>
          <h3 className="mt-4 font-semibold text-slate-900">Instant access</h3>
          <p className="mt-2 text-sm text-slate-600">Sign up and you&apos;re in. No approval process, no waiting for a sales call. Your project can&apos;t wait — neither should you.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600 mx-auto">
            <Star className="h-6 w-6" />
          </div>
          <h3 className="mt-4 font-semibold text-slate-900">14-day free trial</h3>
          <p className="mt-2 text-sm text-slate-600">Try Pro free for 14 days. If it&apos;s not worth it, downgrade before day 15 and pay nothing. We&apos;re confident you&apos;ll stay.</p>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <div className="text-center mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Questions we actually get asked</h2>
          <p className="mt-2 text-slate-600">Not the ones we made up to fill space.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {FAQS.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100">
                  <HelpCircle className="h-4 w-4 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8 text-center md:p-12">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Still not sure which plan is right?</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">
          Start free — no card required. Upgrade when your project demands it. Or just email us and we&apos;ll tell you honestly which plan makes sense for your situation.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/sign-up"
            className="rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-600 transition-colors"
          >
            Get Started Free
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
          >
            Talk to Us
          </Link>
        </div>
      </div>

    </div>
  )
}
