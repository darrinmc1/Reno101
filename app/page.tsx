import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Star } from "lucide-react"

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "Denver, CO",
    project: "Kitchen Renovation",
    quote: "I used Reno101 to plan our kitchen gut-renovation. The cost guides were spot-on — we came in $4,200 under our original contractor quote because we knew exactly what to ask for. Before: a 1990s nightmare. After: the kitchen I've wanted for 15 years.",
    savings: "Saved $4,200",
    rating: 5,
  },
  {
    name: "James & Priya T.",
    location: "Austin, TX",
    project: "Bathroom Remodel",
    quote: "We were quoted $28,000 for a master bath remodel. Reno101's guides helped us understand which line items were inflated. We negotiated down to $19,500 and the result is stunning. The stage-by-stage checklists kept us sane throughout.",
    savings: "Saved $8,500",
    rating: 5,
  },
  {
    name: "Derek L.",
    location: "Portland, OR",
    project: "Basement Finishing",
    quote: "First-time renovator here. I was completely lost until I found Reno101. The material tracker alone saved me from over-ordering $1,800 in drywall. Finished basement went from a concrete cave to a proper living space — on budget, on time.",
    savings: "Saved $1,800",
    rating: 5,
  },
  {
    name: "Monica R.",
    location: "Chicago, IL",
    project: "Full Home Refresh",
    quote: "I was paralyzed by decision fatigue before Reno101. The guides broke everything into manageable steps. We tackled flooring, paint, and fixtures across 6 rooms. Total project came in 18% under budget. I actually enjoyed the process.",
    savings: "18% under budget",
    rating: 5,
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="container mx-auto max-w-5xl px-4 py-20 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Renovation Planning Made Simple</p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
          Plan smarter.<br />Renovate better.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-600">
          Reno101 gives homeowners the guides, tools, and cost breakdowns they need to take on any renovation — without getting taken advantage of.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/signup">
            <Button size="lg" className="rounded-full bg-amber-500 px-8 text-white hover:bg-amber-600">
              Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/blogs">
            <Button size="lg" variant="outline" className="rounded-full px-8">
              Browse Guides
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-amber-50 py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Real Homeowners. Real Results.</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              What our members saved
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-slate-600">
              Thousands of homeowners have used Reno101 to plan smarter and spend less. Here&rsquo;s what a few of them had to say.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <Card key={t.name} className="rounded-2xl border border-amber-100 bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-700">&ldquo;{t.quote}&rdquo;</p>
                    </div>
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.location} &middot; {t.project}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                      <CheckCircle className="h-3.5 w-3.5" />
                      {t.savings}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/signup">
              <Button size="lg" className="rounded-full bg-amber-500 px-8 text-white hover:bg-amber-600">
                Start Planning Your Renovation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
