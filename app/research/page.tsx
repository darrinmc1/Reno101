import Link from "next/link"
import { BarChart2, TrendingUp, MapPin, Calendar, ArrowRight, Database, FileSearch, Users } from "lucide-react"

const RESEARCH_AREAS = [
  {
    icon: BarChart2,
    title: "Cost Benchmarking",
    description:
      "Aggregated data from real renovation projects across Canada and the US. We track material costs, labour rates, and total project spend by region, project type, and home age — so you know if a quote is reasonable before you sign anything.",
    tag: "Data",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: TrendingUp,
    title: "ROI by Project Type",
    description:
      "Not all renovations pay off equally. Our ROI research tracks resale value uplift for kitchens, bathrooms, basements, curb appeal projects, and more — segmented by market type and home price tier. Know what adds value before you spend.",
    tag: "ROI",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: MapPin,
    title: "Regional Market Data",
    description:
      "Labour costs in Vancouver are not the same as labour costs in Winnipeg. Our regional breakdowns cover major Canadian metros and US cities, giving you a realistic baseline for your specific market rather than a national average that fits nobody.",
    tag: "Regional",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: FileSearch,
    title: "Contractor Industry Analysis",
    description:
      "How do homeowners find contractors? What percentage of projects go over budget? What are the most common dispute triggers? We survey homeowners and contractors to surface the patterns that help you avoid the most common mistakes.",
    tag: "Industry",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Users,
    title: "Homeowner Sentiment Surveys",
    description:
      "Quarterly surveys of homeowners who recently completed renovations. We ask what they'd do differently, what surprised them about costs, and which contractors they'd rehire. Real feedback, not curated testimonials.",
    tag: "Surveys",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Database,
    title: "Material Price Tracking",
    description:
      "Lumber, drywall, tile, fixtures — material prices fluctuate significantly. We track pricing trends over time so you can understand whether now is a good time to buy, or whether waiting a quarter might save you real money.",
    tag: "Pricing",
    color: "bg-orange-100 text-orange-600",
  },
]

const KEY_FINDINGS = [
  {
    stat: "67%",
    finding: "of renovation projects exceed their initial budget",
    detail:
      "The most common causes: scope creep (38%), hidden structural issues (29%), and material cost increases mid-project (21%). Our planning guides are built around these failure modes.",
  },
  {
    stat: "2.3x",
    finding: "average ROI difference between best and worst renovation types",
    detail:
      "Minor kitchen updates and bathroom refreshes consistently outperform full gut renovations on a dollar-for-dollar resale basis. Bigger isn't always better when it comes to return.",
  },
  {
    stat: "43%",
    finding: "of homeowners didn't get more than one contractor quote",
    detail:
      "Single-quote projects paid an average of 18% more than those who collected three or more bids. Getting multiple quotes is the single highest-ROI action a homeowner can take.",
  },
  {
    stat: "$8,400",
    finding: "average cost of permit-related project delays",
    detail:
      "Permit delays extend contractor schedules, increase carrying costs, and often require re-booking trades. Understanding permit requirements upfront is not optional — it's financial protection.",
  },
]

const RECENT_REPORTS = [
  {
    title: "2024 Canadian Renovation Cost Report",
    description:
      "Comprehensive cost data for 14 common renovation project types across 8 major Canadian markets. Includes material and labour breakdowns, regional variance analysis, and year-over-year price change data.",
    date: "Q3 2024",
    tag: "Annual Report",
    href: "/research/new",
  },
  {
    title: "Contractor Trust & Dispute Survey — 2024 Edition",
    description:
      "Survey of 1,200 homeowners who completed renovations in the past 18 months. Covers contractor selection methods, dispute frequency, resolution outcomes, and what homeowners wish they'd done differently.",
    date: "Q2 2024",
    tag: "Survey",
    href: "/research/new",
  },
  {
    title: "Kitchen Renovation ROI: A 5-Year Resale Study",
    description:
      "Tracked resale outcomes for 340 homes that underwent kitchen renovations before listing. Breaks down ROI by renovation scope, material tier, and time between renovation and sale.",
    date: "Q1 2024",
    tag: "Case Study",
    href: "/research/new",
  },
]

export default function ResearchPage() {
  return (
    <div className="container mx-auto max-w-6xl space-y-16 px-4 py-16">
      {/* Hero */}
      <div className="rounded-[2rem] border border-white/50 bg-[linear-gradient(135deg,rgba(224,240,255,0.95),rgba(224,240,230,0.9))] p-8 shadow-sm md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">Research & Data</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Renovation Research You Can Actually Use
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            We collect, analyze, and publish data on renovation costs, contractor practices, ROI by project type, and
            regional market conditions — so your decisions are based on evidence, not optimism.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/60 bg-white/70 p-5 text-center shadow-sm">
            <p className="text-3xl font-bold text-slate-900">1,200+</p>
            <p className="mt-1 text-sm text-slate-500">Homeowners surveyed annually</p>
          </div>
          <div className="rounded-2xl border border-white/60 bg-white/70 p-5 text-center shadow-sm">
            <p className="text-3xl font-bold text-slate-900">8 markets</p>
            <p className="mt-1 text-sm text-slate-500">Regional cost data tracked</p>
          </div>
          <div className="rounded-2xl border border-white/60 bg-white/70 p-5 text-center shadow-sm">
            <p className="text-3xl font-bold text-slate-900">Quarterly</p>
            <p className="mt-1 text-sm text-slate-500">Data refresh cadence</p>
          </div>
        </div>
      </div>

      {/* Key Findings */}
      <div>
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Key Research Findings</h2>
          <p className="mt-2 text-slate-600">The numbers that should change how you plan your next project.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {KEY_FINDINGS.map((item) => (
            <div key={item.stat} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-xl bg-blue-50 px-4 py-3 text-center">
                  <p className="text-2xl font-bold text-blue-700">{item.stat}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{item.finding}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Research Areas */}
      <div>
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Research Areas</h2>
          <p className="mt-2 text-slate-600">What we study, why it matters, and how we collect the data.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {RESEARCH_AREAS.map((area) => {
            const Icon = area.icon
            return (
              <div key={area.title} className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${area.color}`}>
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

      {/* Recent Reports */}
      <div>
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Recent Reports</h2>
          <p className="mt-2 text-slate-600">Our latest published research — free to access.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {RECENT_REPORTS.map((report) => (
            <Link key={report.title} href={report.href} className="group">
              <div className="h-full rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-blue-100 px-3 py-0.5 text-xs font-medium text-blue-700">
                    {report.tag}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <Calendar className="h-3 w-3" />
                    {report.date}
                  </span>
                </div>
                <h3 className="text-base font-semibold leading-snug text-slate-900 group-hover:text-blue-700">
                  {report.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{report.description}</p>
                <p className="mt-4 flex items-center gap-1 text-sm font-medium text-blue-600 group-hover:underline">
                  Read Report <ArrowRight className="h-3 w-3" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl border bg-blue-50 p-8 text-center md:p-12">
        <h2 className="text-2xl font-bold text-slate-900">Want to contribute data?</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">
          If you&rsquo;ve recently completed a renovation, your project data helps us build more accurate benchmarks for
          everyone. Share your costs anonymously and get early access to our next report.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="/research/new"
            className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            Submit Project Data
          </Link>
          <Link
            href="/resources"
            className="rounded-xl border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-sm hover:bg-blue-50"
          >
            Browse Resources
          </Link>
        </div>
      </div>
    </div>
  )
}
