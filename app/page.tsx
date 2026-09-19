import { ArrowRight, Star, CheckCircle, TrendingDown } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "Denver, CO",
    project: "Kitchen Renovation",
    quote: "I used Reno101 to plan our kitchen gut-job. The cost estimator flagged $4,200 in expenses I hadn't budgeted for — permits, demo disposal, and appliance delivery fees. We came in $1,800 under our revised budget.",
    result: "Saved $1,800 vs. revised budget",
    stars: 5,
  },
  {
    name: "James & Priya T.",
    location: "Austin, TX",
    project: "Bathroom Remodel",
    quote: "We almost hired the first contractor who quoted us. Reno101's contractor checklist helped us ask the right questions — turns out they weren't licensed for plumbing. The second contractor we found was $3,100 cheaper and fully certified.",
    result: "Avoided $3,100+ mistake",
    stars: 5,
  },
  {
    name: "Derek L.",
    location: "Portland, OR",
    project: "Basement Finishing",
    quote: "The stage-by-stage guides kept me from making a $6,000 error — I was about to frame walls before the waterproofing inspection. That sequence mistake would have meant tearing everything out. Reno101 caught it before I started.",
    result: "Avoided $6,000 rework",
    stars: 5,
  },
  {
    name: "Monica R.",
    location: "Chicago, IL",
    project: "Open-Concept Living Room",
    quote: "I'm not handy at all. Reno101 explained load-bearing walls in plain English, helped me understand what needed a structural engineer, and gave me a realistic 8-week timeline. My contractor said I was the most prepared client they'd ever had.",
    result: "Project finished on time & on budget",
    stars: 5,
  },
]

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 to-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Renovation Planning Made Simple</p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Plan smarter.<br />Renovate better.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-600">
            Reno101 gives homeowners the guides, cost tools, and checklists to avoid expensive mistakes — before they happen.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/research/new">
              <Button size="lg" className="rounded-full bg-amber-500 px-8 text-white hover:bg-amber-600">
                Start Planning <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/blogs">
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Browse Guides
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Real Homeowners. Real Results.</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              What homeowners saved with Reno101
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-slate-500">
              Planning ahead isn't glamorous — but it is the difference between a renovation that goes smoothly and one that doesn't.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.stars }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="mt-1 text-xs font-medium text-slate-400 uppercase tracking-wide">{t.project}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700 whitespace-nowrap">
                    <TrendingDown className="h-3 w-3" />
                    {t.result}
                  </span>
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-slate-600">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-amber-100 bg-amber-50 p-6 text-center">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-amber-500" />
                Free to use — no credit card required
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-amber-500" />
                Realistic cost estimates, not lowball guesses
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-amber-500" />
                Stage-by-stage guides for every project type
              </span>
            </div>
            <div className="mt-6">
              <Link href="/research/new">
                <Button size="lg" className="rounded-full bg-amber-500 px-8 text-white hover:bg-amber-600">
                  Plan Your Renovation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
