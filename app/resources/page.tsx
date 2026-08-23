import Link from "next/link"
import { BookOpen, FileText, Calculator, Video, Download, Lightbulb, TrendingUp, Shield, Wrench, DollarSign } from "lucide-react"

const RESOURCE_CATEGORIES = [
  {
    icon: FileText,
    title: "Planning Guides",
    description: "Step-by-step guides covering every phase of your renovation — from initial budgeting to final walkthrough. Includes timelines, contractor checklists, and permit requirement overviews for common projects.",
    count: "12 guides",
    href: "/resources/guides",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: Calculator,
    title: "Cost Estimators",
    description: "Realistic cost breakdowns for kitchens, bathrooms, basements, and more. Based on aggregated contractor quotes and material pricing data — not the optimistic numbers you see on TV renovation shows.",
    count: "8 calculators",
    href: "/resources/calculators",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Download,
    title: "Templates & Checklists",
    description: "Downloadable templates for contractor bids, project timelines, material tracking, and punch lists. Print them, fill them in, and stop losing important details in a chain of text messages.",
    count: "15 templates",
    href: "/resources/templates",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Video,
    title: "How-To Videos",
    description: "Curated video walkthroughs for common DIY tasks — tiling, drywall patching, caulking, painting prep, and more. We link to the best instructional content so you don't have to wade through 47 mediocre YouTube tutorials.",
    count: "20+ videos",
    href: "/resources/videos",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Shield,
    title: "Contractor Vetting",
    description: "Learn exactly what to ask before hiring anyone. Includes red-flag warning signs, sample contract clauses to insist on, and a scoring rubric for comparing multiple bids fairly.",
    count: "6 resources",
    href: "/resources/contractors",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Wrench,
    title: "Material Comparisons",
    description: "Side-by-side breakdowns of competing materials — LVP vs. hardwood, quartz vs. granite, fiberglass vs. tile showers. We cover durability, maintenance, cost, and the situations where each option actually wins.",
    count: "10 comparisons",
    href: "/resources/materials",
    color: "bg-orange-100 text-orange-600",
  },
]

const FEATURED_ARTICLES = [
  {
    title: "The Real Cost of a Kitchen Renovation in 2024",
    description: "We analyzed 200+ contractor quotes to give you honest, regional cost ranges — broken down by scope, material tier, and what homeowners consistently forget to budget for.",
    tag: "Cost Data",
    readTime: "8 min read",
    href: "/resources/guides",
  },
  {
    title: "10 Permit Mistakes That Delay Projects by Weeks",
    description: "Permit issues are the #1 cause of renovation delays. Here's what triggers them, how to avoid them, and what to do if you're already in the middle of one.",
    tag: "Planning",
    readTime: "6 min read",
    href: "/resources/guides",
  },
  {
    title: "How to Read a Contractor Quote (Without Getting Burned)",
    description: "Line-by-line breakdown of what a legitimate quote should include, what vague language is hiding, and the three numbers that matter most when comparing bids.",
    tag: "Contractors",
    readTime: "7 min read",
    href: "/resources/contractors",
  },
]

const QUICK_STATS = [
  { icon: BookOpen, value: "70+", label: "Free Resources" },
  { icon: TrendingUp, value: "200+", label: "Cost Data Points" },
  { icon: DollarSign, value: "$0", label: "Cost to Access" },
  { icon: Lightbulb, value: "Weekly", label: "New Content" },
]

export default function ResourcesPage() {
  return (
    <div className="container mx-auto max-w-6xl space-y-16 px-4 py-16">
      {/* Hero */}
      <div className="rounded-[2rem] border border-white/50 bg-[linear-gradient(135deg,rgba(255,244,226,0.95),rgba(224,240,230,0.9))] p-8 shadow-sm md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Resource Library</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Everything You Need to Renovate Smarter
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Guides, calculators, templates, and data — built for homeowners who want to make informed decisions, not just
            guess and hope the contractor is honest.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {QUICK_STATS.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="rounded-2xl border border-white/60 bg-white/70 p-4 text-center shadow-sm">
                <Icon className="mx-auto mb-2 h-5 w-5 text-amber-600" />
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Resource Categories */}
      <div>
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Browse by Category</h2>
          <p className="mt-2 text-slate-600">Find exactly what you need for your current stage of the project.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {RESOURCE_CATEGORIES.map((cat) => {
            const Icon = cat.icon
            return (
              <Link key={cat.title} href={cat.href} className="group">
                <div className="h-full rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${cat.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mt-4 flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">{cat.title}</h3>
                    <span className="ml-2 shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
                      {cat.count}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{cat.description}</p>
                  <p className="mt-4 text-sm font-medium text-amber-600 group-hover:underline">Browse {cat.title} →</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Featured Articles */}
      <div>
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Featured Articles</h2>
          <p className="mt-2 text-slate-600">Our most-read, most-useful content — picked because it actually helps.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {FEATURED_ARTICLES.map((article) => (
            <Link key={article.title} href={article.href} className="group">
              <div className="h-full rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-amber-100 px-3 py-0.5 text-xs font-medium text-amber-700">
                    {article.tag}
                  </span>
                  <span className="text-xs text-slate-400">{article.readTime}</span>
                </div>
                <h3 className="text-base font-semibold leading-snug text-slate-900 group-hover:text-amber-700">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{article.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl border bg-amber-50 p-8 text-center md:p-12">
        <h2 className="text-2xl font-bold text-slate-900">Can&rsquo;t find what you&rsquo;re looking for?</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">
          We add new resources every week based on what homeowners are actually asking. Browse our full blog for
          project-specific guides, or use the tools section to run your own numbers.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="/blogs"
            className="rounded-xl bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-700"
          >
            Browse All Guides
          </Link>
          <Link
            href="/tools"
            className="rounded-xl border border-amber-200 bg-white px-6 py-3 text-sm font-semibold text-amber-700 shadow-sm hover:bg-amber-50"
          >
            Try Our Tools
          </Link>
        </div>
      </div>
    </div>
  )
}
