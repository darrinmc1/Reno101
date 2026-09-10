import Link from "next/link"
import { Check, X, Zap, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to start planning your renovation with confidence.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlight: false,
    icon: Zap,
    features: [
      { text: "Access to all renovation guides & blogs", included: true },
      { text: "Renovation stage walkthroughs", included: true },
      { text: "Glossary of 200+ renovation terms", included: true },
      { text: "Basic cost estimator", included: true },
      { text: "Community FAQ access", included: true },
      { text: "AI-powered renovation assistant", included: false },
      { text: "Material tracker & cost breakdowns", included: false },
      { text: "Downloadable checklists & templates", included: false },
      { text: "Priority email support", included: false },
    ],
  },
  {
    name: "Pro",
    price: "$9",
    period: "per month",
    description: "For homeowners who are serious about getting their renovation right the first time.",
    cta: "Start Pro — 7 Days Free",
    ctaHref: "/sign-up",
    highlight: true,
    icon: Star,
    features: [
      { text: "Everything in Free", included: true },
      { text: "AI-powered renovation assistant", included: true },
      { text: "Material tracker & cost breakdowns", included: true },
      { text: "Downloadable checklists & templates", included: true },
      { text: "Priority email support", included: true },
      { text: "Early access to new tools & features", included: true },
      { text: "Saved projects & renovation history", included: true },
      { text: "Contractor question scripts", included: true },
    ],
  },
  {
    name: "Lifetime",
    price: "$149",
    period: "one-time",
    description: "Pay once, own it forever. Best value for anyone with more than one renovation ahead of them.",
    cta: "Get Lifetime Access",
    ctaHref: "/sign-up",
    highlight: false,
    icon: Shield,
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Lifetime access — no recurring fees", included: true },
      { text: "All future features included", included: true },
      { text: "Dedicated support channel", included: true },
      { text: "Founding member badge", included: true },
      { text: "Input on future feature roadmap", included: true },
      { text: "Unlimited projects", included: true },
      { text: "Bulk export of all your data", included: true },
    ],
  },
]

const FAQ = [
  {
    q: "Can I really use Reno101 for free?",
    a: "Yes — the Free tier is genuinely free, no credit card required. You get full access to all our guides, glossary, stage walkthroughs, and the FAQ. We don't hide the good stuff behind a paywall just to annoy you.",
  },
  {
    q: "What does the AI renovation assistant actually do?",
    a: "It answers your specific renovation questions — things like \"how much tile do I need for a 9x11 bathroom\" or \"what order should I do my basement reno in.\" It's trained on renovation knowledge, not general internet noise.",
  },
  {
    q: "Is the 7-day Pro trial really free?",
    a: "Yes. You'll need to enter a card to start, but you won't be charged until day 8. Cancel any time before that and you owe nothing. We'll send you a reminder on day 6.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "Your saved projects and history stay in your account for 90 days after cancellation. Pro subscribers can export everything before they go. We don't hold your data hostage.",
  },
  {
    q: "Is the Lifetime deal really a one-time payment?",
    a: "Yes. Pay $149 once and you're in forever — including every feature we add in the future. No gotchas, no \"legacy plan\" downgrades. We've priced it so it pays for itself after about 17 months of Pro.",
  },
]

export default function PricingPage() {
  return (
    <div className="container mx-auto max-w-6xl space-y-20 px-4 py-16">
      {/* Header */}
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Pricing</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Honest pricing. No surprises.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          We built Reno101 because renovations are already expensive enough. Start free, upgrade when you need more — or grab lifetime access and never think about it again.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-8 md:grid-cols-3">
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
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-amber-500 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    tier.highlight ? "bg-amber-200 text-amber-700" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-4 text-xl font-bold text-slate-900">{tier.name}</h2>
                <div className="mt-2 flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
                  <span className="mb-1 text-sm text-slate-500">/{tier.period}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{tier.description}</p>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-3">
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
                      {feature.text}
                    </span>
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
          )
        })}
      </div>

      {/* Value callout */}
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8 text-center md:p-12">
        <p className="text-lg font-semibold text-slate-900">
          Not sure which plan is right for you?
        </p>
        <p className="mx-auto mt-2 max-w-xl text-slate-600">
          Start with Free — it covers most single-project homeowners completely. Upgrade to Pro if you want the AI assistant or downloadable tools. Go Lifetime if you have more than one renovation in your future (you probably do).
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/sign-up">
            <Button className="rounded-xl bg-amber-500 px-6 text-white hover:bg-amber-600">
              Start for Free
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="rounded-xl border-slate-300 px-6 text-slate-700 hover:bg-white">
              Talk to us first
            </Button>
          </Link>
        </div>
      </div>

      {/* Feature comparison table */}
      <div>
        <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">Full feature comparison</h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="px-6 py-4 text-left font-semibold text-slate-700">Feature</th>
                <th className="px-6 py-4 text-center font-semibold text-slate-700">Free</th>
                <th className="px-6 py-4 text-center font-semibold text-amber-600">Pro</th>
                <th className="px-6 py-4 text-center font-semibold text-slate-700">Lifetime</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Renovation guides & blogs", true, true, true],
                ["Stage-by-stage walkthroughs", true, true, true],
                ["Renovation glossary", true, true, true],
                ["Basic cost estimator", true, true, true],
                ["Community FAQ", true, true, true],
                ["AI renovation assistant", false, true, true],
                ["Material tracker", false, true, true],
                ["Downloadable checklists", false, true, true],
                ["Saved projects", false, true, true],
                ["Contractor question scripts", false, true, true],
                ["Priority support", false, true, true],
                ["Future features included", false, false, true],
                ["Founding member badge", false, false, true],
                ["Roadmap input", false, false, true],
              ].map(([feature, free, pro, lifetime]) => (
                <tr key={String(feature)} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50">
                  <td className="px-6 py-3 text-slate-700">{String(feature)}</td>
                  <td className="px-6 py-3 text-center">
                    {free ? <Check className="mx-auto h-4 w-4 text-amber-500" /> : <X className="mx-auto h-4 w-4 text-slate-300" />}
                  </td>
                  <td className="px-6 py-3 text-center">
                    {pro ? <Check className="mx-auto h-4 w-4 text-amber-500" /> : <X className="mx-auto h-4 w-4 text-slate-300" />}
                  </td>
                  <td className="px-6 py-3 text-center">
                    {lifetime ? <Check className="mx-auto h-4 w-4 text-amber-500" /> : <X className="mx-auto h-4 w-4 text-slate-300" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">Pricing FAQ</h2>
        <div className="mx-auto max-w-3xl space-y-4">
          {FAQ.map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
