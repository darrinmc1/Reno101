import { Check, X, HelpCircle, Calculator, Zap, Shield, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for dipping your toes into your first renovation project.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlight: false,
    badge: null,
    features: [
      { text: "5 renovation stage guides", included: true },
      { text: "Basic cost estimator", included: true },
      { text: "Community forum access", included: true },
      { text: "3 blog articles per month", included: true },
      { text: "Material tracker (up to 10 items)", included: true },
      { text: "AI renovation assistant", included: false },
      { text: "Unlimited stage guides", included: false },
      { text: "Priority email support", included: false },
      { text: "Contractor comparison tool", included: false },
      { text: "Budget variance alerts", included: false },
      { text: "Downloadable project plans", included: false },
    ],
  },
  {
    name: "Pro",
    price: "$12",
    period: "per month",
    description: "For homeowners who are serious about not making expensive mistakes.",
    cta: "Start 14-Day Free Trial",
    ctaHref: "/sign-up",
    highlight: true,
    badge: "Most Popular",
    features: [
      { text: "5 renovation stage guides", included: true },
      { text: "Basic cost estimator", included: true },
      { text: "Community forum access", included: true },
      { text: "Unlimited blog articles", included: true },
      { text: "Material tracker (unlimited items)", included: true },
      { text: "AI renovation assistant", included: true },
      { text: "Unlimited stage guides", included: true },
      { text: "Priority email support", included: true },
      { text: "Contractor comparison tool", included: true },
      { text: "Budget variance alerts", included: true },
      { text: "Downloadable project plans", included: true },
    ],
  },
  {
    name: "Teams",
    price: "$39",
    period: "per month",
    description: "For property investors, landlords, or anyone juggling multiple projects at once.",
    cta: "Contact Sales",
    ctaHref: "/contact",
    highlight: false,
    badge: null,
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Up to 5 team members", included: true },
      { text: "Multi-project dashboard", included: true },
      { text: "Shared material tracker", included: true },
      { text: "Custom budget templates", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "White-label project reports", included: true },
      { text: "API access", included: true },
      { text: "SSO / SAML login", included: true },
      { text: "SLA uptime guarantee", included: true },
      { text: "Onboarding call", included: true },
    ],
  },
]

const COMPARISON_FEATURES = [
  { category: "Core Access", features: [
    { name: "Renovation stage guides", free: "5 guides", pro: "Unlimited", teams: "Unlimited" },
    { name: "Blog & article library", free: "3/month", pro: "Unlimited", teams: "Unlimited" },
    { name: "Community forum", free: true, pro: true, teams: true },
  ]},
  { category: "Planning Tools", features: [
    { name: "Cost estimator", free: "Basic", pro: "Advanced", teams: "Advanced" },
    { name: "Material tracker", free: "10 items", pro: "Unlimited", teams: "Unlimited + shared" },
    { name: "Budget variance alerts", free: false, pro: true, teams: true },
    { name: "Downloadable project plans", free: false, pro: true, teams: true },
    { name: "Multi-project dashboard", free: false, pro: false, teams: true },
  ]},
  { category: "AI & Automation", features: [
    { name: "AI renovation assistant", free: false, pro: true, teams: true },
    { name: "Contractor comparison tool", free: false, pro: true, teams: true },
    { name: "Custom budget templates", free: false, pro: false, teams: true },
  ]},
  { category: "Support", features: [
    { name: "Email support", free: "Standard", pro: "Priority", teams: "Dedicated manager" },
    { name: "Onboarding call", free: false, pro: false, teams: true },
    { name: "SLA uptime guarantee", free: false, pro: false, teams: true },
  ]},
]

const FAQS = [
  {
    q: "Can I really use Reno101 for free?",
    a: "Yes — genuinely free, no credit card required. The Free plan gives you access to 5 stage guides, a basic cost estimator, and the community forum. It's enough to plan a single room renovation without spending a cent.",
  },
  {
    q: "What happens after my 14-day Pro trial?",
    a: "You'll be asked if you want to continue with Pro at $12/month. If you don't, you automatically drop back to the Free plan — no charges, no awkward cancellation flows. We're not that kind of company.",
  },
  {
    q: "How accurate is the cost estimator?",
    a: "The Pro estimator pulls from real contractor quotes and material prices updated quarterly. It won't be exact — no estimator is — but it's calibrated to be within 15% of actual costs for most projects. We'll always tell you what we don't know.",
  },
  {
    q: "What does the AI renovation assistant actually do?",
    a: "It answers renovation questions in plain English, helps you sequence tasks correctly, flags common mistakes for your specific project type, and can generate a rough scope of work you can hand to a contractor. It's like having a knowledgeable friend who actually returns your calls.",
  },
  {
    q: "Is the Teams plan right for me if I'm just one person with two properties?",
    a: "Probably not — Pro handles multiple projects fine. Teams is designed for when you need to collaborate with others (a partner, a property manager, a contractor) or need white-label reports for clients. If you're flying solo, Pro is your sweet spot.",
  },
  {
    q: "Can I switch plans mid-project?",
    a: "Absolutely. Upgrade or downgrade any time. If you upgrade mid-month, you're prorated. If you downgrade, the change takes effect at the end of your billing cycle so you don't lose access mid-project.",
  },
]

const ROI_ITEMS = [
  { icon: Shield, label: "Avoid one costly mistake", value: "$2,000–$15,000", desc: "The average cost of a single bad contractor hire or incorrect material order" },
  { icon: Zap, label: "Save time on research", value: "40+ hours", desc: "Average time homeowners spend researching a mid-size renovation project" },
  { icon: Star, label: "Better contractor quotes", value: "8–12% savings", desc: "Homeowners who arrive prepared typically negotiate better rates" },
  { icon: Calculator, label: "Pro plan cost per day", value: "$0.39", desc: "Less than a third of a coffee. For a renovation that might cost $30,000+." },
]

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="mx-auto h-5 w-5 text-amber-600" />
  if (value === false) return <X className="mx-auto h-5 w-5 text-slate-300" />
  return <span className="text-sm text-slate-700">{value}</span>
}

export default function PricingPage() {
  return (
    <div className="container mx-auto max-w-6xl space-y-24 px-4 py-16">

      {/* Hero */}
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Pricing</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Honest pricing for honest renovators
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          No hidden fees. No "call for pricing." No plan named "Enterprise" that costs more than your bathroom remodel.
          Just straightforward tiers that match where you are in your project.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-2xl border p-8 shadow-sm ${
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
            <ul className="mt-8 space-y-3">
              {tier.features.map((f) => (
                <li key={f.text} className="flex items-start gap-3">
                  {f.included ? (
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                  ) : (
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-slate-300" />
                  )}
                  <span className={`text-sm ${ f.included ? "text-slate-700" : "text-slate-400" }`}>
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ROI Section */}
      <div className="rounded-2xl border bg-slate-900 p-8 text-white md:p-12">
        <div className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400">The Math</p>
          <h2 className="mt-2 text-3xl font-bold">Why $12/month is a no-brainer</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            Renovations are expensive. The tools to do them right are not. Here's what Pro membership is worth in real terms.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ROI_ITEMS.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="rounded-xl bg-white/5 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-2xl font-bold text-amber-400">{item.value}</p>
                <p className="mt-1 text-sm font-semibold text-white">{item.label}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Feature Comparison Table */}
      <div>
        <div className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Compare Plans</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Everything side by side</h2>
          <p className="mt-3 text-slate-600">No asterisks. No footnotes. Just what you get.</p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-[600px] text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="px-6 py-4 text-left font-semibold text-slate-700">Feature</th>
                <th className="px-6 py-4 text-center font-semibold text-slate-700">Free</th>
                <th className="px-6 py-4 text-center font-semibold text-amber-700">Pro</th>
                <th className="px-6 py-4 text-center font-semibold text-slate-700">Teams</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_FEATURES.map((section) => (
                <>
                  <tr key={section.category} className="border-b border-slate-100 bg-slate-50/60">
                    <td colSpan={4} className="px-6 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {section.category}
                    </td>
                  </tr>
                  {section.features.map((feat) => (
                    <tr key={feat.name} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50">
                      <td className="px-6 py-3 text-slate-700">{feat.name}</td>
                      <td className="px-6 py-3 text-center"><CellValue value={feat.free} /></td>
                      <td className="bg-amber-50/40 px-6 py-3 text-center"><CellValue value={feat.pro} /></td>
                      <td className="px-6 py-3 text-center"><CellValue value={feat.teams} /></td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <div className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">FAQ</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Questions we actually get asked</h2>
          <p className="mt-3 text-slate-600">Not the ones we made up to make ourselves look good.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {FAQS.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
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
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8 text-center md:p-12">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Start free. Upgrade when you're ready.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">
          No pressure, no countdown timers, no fake urgency. Your renovation timeline is stressful enough.
          We'll be here when you need us.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/sign-up">
            <Button className="rounded-xl bg-amber-500 px-8 text-white hover:bg-amber-600">
              Create Free Account
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="rounded-xl border-slate-300 px-8 text-slate-700 hover:bg-white">
              Talk to a Human
            </Button>
          </Link>
        </div>
        <p className="mt-4 text-xs text-slate-500">No credit card required for Free or Pro trial. Cancel any time.</p>
      </div>

    </div>
  )
}
