import Link from "next/link"
import { Check, X, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"

const TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "Get started with the basics",
    cta: "Get Started",
    ctaHref: "/sign-up",
    highlight: false,
    badge: null,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/month",
    description: "Everything you need for a full renovation",
    cta: "Start Pro",
    ctaHref: "/sign-up?plan=pro",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Premium",
    price: "$19",
    period: "/month",
    description: "Full access plus priority support",
    cta: "Go Premium",
    ctaHref: "/sign-up?plan=premium",
    highlight: false,
    badge: null,
  },
]

type FeatureValue = boolean | string

const FEATURES: { category: string; items: { label: string; free: FeatureValue; pro: FeatureValue; premium: FeatureValue }[] }[] = [
  {
    category: "Guides & Content",
    items: [
      { label: "Basic renovation guides", free: true, pro: true, premium: true },
      { label: "Step-by-step project walkthroughs", free: "3 guides", pro: "Unlimited", premium: "Unlimited" },
      { label: "Room-by-room planning guides", free: false, pro: true, premium: true },
      { label: "Seasonal maintenance checklists", free: false, pro: true, premium: true },
      { label: "Expert deep-dive articles", free: false, pro: false, premium: true },
    ],
  },
  {
    category: "Tools & Calculators",
    items: [
      { label: "Basic cost estimator", free: true, pro: true, premium: true },
      { label: "Material quantity calculator", free: false, pro: true, premium: true },
      { label: "Material tracker", free: false, pro: true, premium: true },
      { label: "Project timeline planner", free: false, pro: true, premium: true },
      { label: "Contractor comparison tool", free: false, pro: false, premium: true },
    ],
  },
  {
    category: "Templates",
    items: [
      { label: "Budget spreadsheet template", free: false, pro: true, premium: true },
      { label: "Contractor quote template", free: false, pro: true, premium: true },
      { label: "Project scope of work template", free: false, pro: true, premium: true },
      { label: "Permit checklist templates", free: false, pro: false, premium: true },
      { label: "Custom template builder", free: false, pro: false, premium: true },
    ],
  },
  {
    category: "Support",
    items: [
      { label: "Community forum access", free: true, pro: true, premium: true },
      { label: "Email support", free: false, pro: true, premium: true },
      { label: "Priority email support", free: false, pro: false, premium: true },
      { label: "1-on-1 planning session (monthly)", free: false, pro: false, premium: true },
    ],
  },
]

function FeatureCell({ value }: { value: FeatureValue }) {
  if (value === true) {
    return (
      <span className="flex items-center justify-center">
        <Check className="h-5 w-5 text-amber-600" />
      </span>
    )
  }
  if (value === false) {
    return (
      <span className="flex items-center justify-center">
        <X className="h-4 w-4 text-slate-300" />
      </span>
    )
  }
  return <span className="text-xs font-medium text-slate-600">{value}</span>
}

export default function PricingPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      {/* Header */}
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Pricing</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Simple, honest pricing
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          No hidden fees, no surprise charges. Pick the plan that matches your project — upgrade or cancel any time.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-2xl border p-8 shadow-sm ${
              tier.highlight
                ? "border-amber-400 bg-amber-50 shadow-amber-100"
                : "border-slate-200 bg-white"
            }`}
          >
            {tier.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow">
                {tier.badge}
              </span>
            )}
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">{tier.name}</p>
            <div className="mt-3 flex items-end gap-1">
              <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
              {tier.period && <span className="mb-1 text-slate-500">{tier.period}</span>}
            </div>
            <p className="mt-2 text-sm text-slate-600">{tier.description}</p>
            <Link href={tier.ctaHref}>
              <Button
                className={`mt-6 w-full rounded-xl ${
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

      {/* Comparison Table */}
      <div className="mt-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">What&rsquo;s included in each plan</h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="px-6 py-4 text-left font-semibold text-slate-700 w-1/2">Feature</th>
                {TIERS.map((tier) => (
                  <th
                    key={tier.name}
                    className={`px-4 py-4 text-center font-semibold ${
                      tier.highlight ? "text-amber-600" : "text-slate-700"
                    }`}
                  >
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((section) => (
                <>
                  <tr key={section.category} className="bg-slate-50">
                    <td
                      colSpan={4}
                      className="px-6 py-3 text-xs font-semibold uppercase tracking-widest text-slate-500"
                    >
                      {section.category}
                    </td>
                  </tr>
                  {section.items.map((item) => (
                    <tr key={item.label} className="border-t border-slate-100 hover:bg-slate-50/60 transition-colors">
                      <td className="px-6 py-3 text-slate-700">{item.label}</td>
                      <td className="px-4 py-3 text-center">
                        <FeatureCell value={item.free} />
                      </td>
                      <td className="px-4 py-3 text-center bg-amber-50/40">
                        <FeatureCell value={item.pro} />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <FeatureCell value={item.premium} />
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer note */}
      <p className="mt-8 text-center text-sm text-slate-500">
        All plans include a 14-day free trial. No credit card required to start.{" "}
        <Link href="/faq" className="font-medium text-amber-600 underline underline-offset-2 hover:text-amber-700">
          See FAQ
        </Link>{" "}
        for billing details.
      </p>
    </div>
  )
}
