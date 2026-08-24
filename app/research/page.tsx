import Link from "next/link"
import { BarChart2, TrendingUp, MapPin, ArrowRight, Database, FileSearch, Users, HelpCircle } from "lucide-react"

const RESEARCH_AREAS = [
  {
    icon: BarChart2,
    title: "Cost checking",
    description:
      "Compare quotes against current local prices for labour and materials. A single national average hides differences in access, specification, and council requirements.",
    tag: "Costs",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Value by project type",
    description:
      "Decide what the work is for: daily use, resale, or both. Kitchen and bathroom updates often change how a house lives, but they do not guarantee a set return.",
    tag: "Value",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: MapPin,
    title: "Local market differences",
    description:
      "Trade rates, lead times, and approval paths vary by Australian city and council. Use local quotes and council information rather than figures from another country.",
    tag: "Local",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: FileSearch,
    title: "Contractor selection",
    description:
      "Work out how you will find licensed trades, collect more than one written quote, and check insurance and scope before you sign.",
    tag: "Trades",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Users,
    title: "Lessons from finished jobs",
    description:
      "Ask people who recently completed similar work what they would change about scope, sequencing, contingency, and communication with trades.",
    tag: "Planning",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Database,
    title: "Material prices",
    description:
      "Timber, plasterboard, tile, and fixtures move with supply. Get dated quotes for the specification you actually want instead of relying on last year’s numbers.",
    tag: "Pricing",
    color: "bg-orange-100 text-orange-600",
  },
]

const STARTING_POINTS = [
  {
    title: "Ask a research question",
    description:
      "Send a specific question about scope, location, or a quote. Research help is for details that a general guide cannot answer.",
    tag: "Request",
    href: "/research/new",
  },
  {
    title: "Planning resources",
    description:
      "Guides, checklists, and tools for budgeting, sequencing, and briefing trades. Start here when you need orientation, not a custom answer.",
    tag: "Resources",
    href: "/resources",
  },
  {
    title: "Downloadable templates",
    description:
      "Briefs, budget trackers, quote comparison sheets, and approval checklists you can fill in as the project takes shape.",
    tag: "Templates",
    href: "/downloads",
  },
]

export default function ResearchPage() {
  return (
    <div className="container mx-auto max-w-6xl space-y-16 px-4 py-16">
      <div className="rounded-[2rem] border border-white/50 bg-[linear-gradient(135deg,rgba(224,240,255,0.95),rgba(224,240,230,0.9))] p-8 shadow-sm md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">Research help</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Questions to settle before you commit
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Use this page to work out what still needs checking: local costs, quotes, materials, and council
            requirements. Renos101 is an Australian renovation site priced in AUD. We do not publish a proprietary
            survey dataset on this page.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/60 bg-white/70 p-5 text-center shadow-sm">
            <p className="text-lg font-bold text-slate-900">Ask a specific question</p>
            <p className="mt-1 text-sm text-slate-500">When the answer depends on your scope and location</p>
          </div>
          <div className="rounded-2xl border border-white/60 bg-white/70 p-5 text-center shadow-sm">
            <p className="text-lg font-bold text-slate-900">Compare local quotes</p>
            <p className="mt-1 text-sm text-slate-500">Written bids from more than one licensed trade</p>
          </div>
          <div className="rounded-2xl border border-white/60 bg-white/70 p-5 text-center shadow-sm">
            <p className="text-lg font-bold text-slate-900">Confirm local rules</p>
            <p className="mt-1 text-sm text-slate-500">Council, certification, and licensed-work requirements</p>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">What to research</h2>
          <p className="mt-2 text-slate-600">Topics that usually need local answers before you lock a budget.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {RESEARCH_AREAS.map((area) => {
            const Icon = area.icon
            return (
              <div key={area.title} className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className={`flex h-12 w-12 items-center rounded-xl ${area.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-slate-900">{area.title}</h3>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">{area.tag}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      <div>
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Where to start</h2>
          <p className="mt-2 text-slate-600">Existing tools and pages on this site — not unpublished reports.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {STARTING_POINTS.map((item) => (
            <Link key={item.title} href={item.href} className="group">
              <div className="h-full rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                <span className="rounded-full bg-blue-100 px-3 py-0.5 text-xs font-medium text-blue-700">
                  {item.tag}
                </span>
                <h3 className="mt-3 text-base font-semibold leading-snug text-slate-900 group-hover:text-blue-700">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                <p className="mt-4 flex items-center gap-1 text-sm font-medium text-blue-600 group-hover:underline">
                  Open <ArrowRight className="h-3 w-3" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border bg-blue-50 p-8 text-center md:p-12">
        <HelpCircle className="mx-auto h-8 w-8 text-blue-600" />
        <h2 className="mt-4 text-2xl font-bold text-slate-900">Need a specific answer?</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">
          If a guide is too general, send the actual question, including location and scope. Research help does not
          replace licensed trades, certifiers, or council advice.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="/research/new"
            className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            Ask a research question
          </Link>
          <Link
            href="/resources"
            className="rounded-xl border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-sm hover:bg-blue-50"
          >
            Browse resources
          </Link>
        </div>
      </div>
    </div>
  )
}
