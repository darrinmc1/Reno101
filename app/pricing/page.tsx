import { Check, X, Zap, Shield, Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const FREE_FEATURES = [
  "Access to all renovation stage guides",
  "Basic cost estimator tool",
  "Renovation glossary (200+ terms)",
  "Community blog articles",
  "Material type overviews",
  "3 saved projects",
]

const FREE_MISSING = [
  "AI-powered renovation planner",
  "Detailed contractor question checklists",
  "Material cost tracker (unlimited)",
  "Priority email support",
  "Downloadable PDF guides & checklists",
  "ROI calculator by renovation type",
]

const PRO_FEATURES = [
  "Everything in Free",
  "AI-powered renovation planner",
  "Detailed contractor question checklists",
  "Material cost tracker (unlimited projects)",
  "Priority email support",
  "Downloadable PDF guides & checklists",
  "ROI calculator by renovation type",
  "Early access to new tools & features",
  "Ad-free experience",
]

const COMPARISON_ROWS = [
  { feature: "Renovation stage guides", free: true, pro: true },
  { feature: "Basic cost estimator", free: true, pro: true },
  { feature: "Renovation glossary", free: true, pro: true },
  { feature: "Blog & community articles", free: true, pro: true },
  { feature: "Saved projects", free: "Up to 3", pro: "Unlimited" },
  { feature: "Material cost tracker", free: "3 projects", pro: "Unlimited" },
  { feature: "AI renovation planner", free: false, pro: true },
  { feature: "Contractor question checklists", free: false, pro: true },
  { feature: "Downloadable PDF guides", free: false, pro: true },
  { feature: "ROI calculator", free: false, pro: true },
  { feature: "Priority email support", free: false, pro: true },
  { feature: "Ad-free experience", free: false, pro: true },
  { feature: "Early access to new features", free: false, pro: true },
]

const ROI_EXAMPLES = [
  {
    icon: Zap,
    title: "Avoid one contractor overcharge",
    desc: "Our contractor checklists help you ask the right questions upfront. Homeowners who negotiate with data save an average of $800–$2,400 on mid-size projects.",
    value: "$800–$2,400 saved",
  },
  {
    icon: Shield,
    title: "Prevent one costly material mistake",
    desc: "Buying the wrong tile, flooring, or fixture is expensive. Our material guides and cost tracker help you buy right the first time.",
    value: "$200–$600 saved",
  },
  {
    icon: Star,
    title: "Maximize resale value",
    desc: "Our ROI calculator shows which renovations return the most at resale — so you spend where it counts and skip what doesn't move the needle.",
    value: "Up to 70% ROI on key upgrades",
  },
]

export default function PricingPage() {
  return (
    <div className="container mx-auto max-w-5xl space-y-20 px-4 py-16">
      {/* Header */}
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Pricing</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Simple, honest pricing
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Start free and upgrade when you need the tools that save real money. No hidden fees, no surprise charges — just
          better renovations.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Free Card */}
        <Card className="rounded-2xl border bg-white shadow-sm">
          <CardHeader className="pb-4">
            <p className="text-sm font-medium uppercase tracking-widest text-slate-500">Free</p>
            <CardTitle className="mt-2 text-4xl font-bold text-slate-900">
              $0
              <span className="text-base font-normal text-slate-500"> / forever</span>
            </CardTitle>
            <p className="mt-2 text-sm text-slate-600">
              Everything you need to get started planning your renovation.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              {FREE_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  {f}
                </li>
              ))}
              {FREE_MISSING.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-slate-400">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-slate-300" />
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/sign-up" className="block pt-4">
              <Button variant="outline" className="w-full rounded-xl border-slate-300">
                Get started free
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Pro Card */}
        <Card className="rounded-2xl border-2 border-amber-400 bg-amber-50 shadow-md">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium uppercase tracking-widest text-amber-600">Pro</p>
              <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-white">Most popular</span>
            </div>
            <CardTitle className="mt-2 text-4xl font-bold text-slate-900">
              $9
              <span className="text-base font-normal text-slate-500"> / month</span>
            </CardTitle>
            <p className="mt-2 text-sm text-slate-600">
              The full toolkit for homeowners who want to renovate smarter and spend less.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              {PRO_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/sign-up" className="block pt-4">
              <Button className="w-full rounded-xl bg-amber-500 text-white hover:bg-amber-600">
                Start Pro — $9/mo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <p className="text-center text-xs text-slate-500">Cancel anytime. No contracts.</p>
          </CardContent>
        </Card>
      </div>

      {/* Feature Comparison Table */}
      <div>
        <h2 className="mb-6 text-center text-2xl font-bold text-slate-900">Full feature comparison</h2>
        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-slate-50">
                <th className="px-6 py-4 text-left font-semibold text-slate-700">Feature</th>
                <th className="px-6 py-4 text-center font-semibold text-slate-700">Free</th>
                <th className="px-6 py-4 text-center font-semibold text-amber-600">Pro</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                  <td className="px-6 py-3 text-slate-700">{row.feature}</td>
                  <td className="px-6 py-3 text-center">
                    {row.free === true ? (
                      <Check className="mx-auto h-4 w-4 text-emerald-500" />
                    ) : row.free === false ? (
                      <X className="mx-auto h-4 w-4 text-slate-300" />
                    ) : (
                      <span className="text-xs text-slate-500">{row.free}</span>
                    )}
                  </td>
                  <td className="px-6 py-3 text-center">
                    {row.pro === true ? (
                      <Check className="mx-auto h-4 w-4 text-amber-500" />
                    ) : row.pro === false ? (
                      <X className="mx-auto h-4 w-4 text-slate-300" />
                    ) : (
                      <span className="text-xs font-medium text-amber-600">{row.pro}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ROI Section */}
      <div>
        <div className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Return on Investment</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">Pro pays for itself — fast</h2>
          <p className="mx-auto mt-2 max-w-xl text-slate-600">
            At $9/month, it takes one avoided mistake or one better negotiation to cover the cost of a full year.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {ROI_EXAMPLES.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                <p className="mt-4 text-sm font-bold text-emerald-600">{item.value}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* FAQ Teaser */}
      <div className="rounded-2xl border bg-amber-50 p-8 text-center md:p-12">
        <h2 className="text-xl font-bold text-slate-900">Still have questions?</h2>
        <p className="mt-2 text-slate-600">
          Check out our FAQ for answers about billing, cancellation, and what&apos;s included — or reach out directly.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/faq">
            <Button variant="outline" className="rounded-xl border-amber-300 bg-white">
              View FAQ
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="rounded-xl bg-amber-500 text-white hover:bg-amber-600">
              Contact us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
