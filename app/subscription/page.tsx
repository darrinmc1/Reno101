import Link from "next/link"
import { Check, ArrowRight, Sparkles, Users, Building2 } from "lucide-react"

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    icon: Sparkles,
    blurb: "Get started with essential guides and tools.",
    features: ["Access to all blog posts", "Stage guides & checklists", "Budget spreadsheet template", "Monthly newsletter"],
    cta: "Get started",
    href: "/signup",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "per month",
    icon: Users,
    blurb: "Full access for active renovators.",
    features: ["Everything in Free", "Detailed renovation plans", "Material cost calculator", "Contractor comparison tool", "Priority email support", "Ad-free experience"],
    cta: "Go Pro",
    href: "/signup",
    highlight: true,
  },
  {
    name: "Contractor",
    price: "$29",
    period: "per month",
    icon: Building2,
    blurb: "For tradies who want smarter project management.",
    features: ["Everything in Pro", "Multi-project dashboard", "Client estimate generator", "Timeline planning tools", "Team collaboration", "API access"],
    cta: "Contact sales",
    href: "/contact",
    highlight: false,
  },
]

export default function SubscriptionPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-16">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Membership</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Plans for every stage of your build
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Whether you&apos;re planning a single bathroom refresh or managing a full renovation portfolio,
          there&apos;s a plan that fits.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {PLANS.map((plan) => {
          const Icon = plan.icon
          return (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border bg-white p-8 shadow-sm ${
                plan.highlight ? "border-amber-400 ring-2 ring-amber-400/20" : "border-slate-200"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-xl font-bold text-slate-900">{plan.name}</h2>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-slate-900">{plan.price}</span>
                <span className="text-sm text-slate-500">/ {plan.period}</span>
              </div>
              <p className="mt-3 text-sm text-slate-500">{plan.blurb}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
                  plan.highlight
                    ? "bg-amber-600 text-white shadow-lg hover:bg-amber-700"
                    : "border border-slate-300 text-slate-700 hover:bg-slate-50"
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
