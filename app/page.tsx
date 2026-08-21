import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Star } from "lucide-react"

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "Denver, CO",
    project: "Kitchen Renovation",
    quote: "Reno101 helped me avoid a $4,200 mistake. I was about to hire the first contractor I found, but the vetting checklist made me get three quotes. Ended up saving $4,200 and the work was done in half the time.",
    result: "Saved $4,200",
    stars: 5,
  },
  {
    name: "James & Priya T.",
    location: "Austin, TX",
    project: "Bathroom Remodel",
    quote: "We budgeted $8,000 for our master bath. Reno101's cost guides warned us about hidden plumbing costs we'd completely overlooked. We adjusted our budget upfront and finished on time with zero surprises.",
    result: "Zero budget overruns",
    stars: 5,
  },
  {
    name: "Marcus L.",
    location: "Chicago, IL",
    project: "Basement Finishing",
    quote: "I used the stage-by-stage planning tool and it completely changed how I approached the project. What felt overwhelming became manageable. My basement went from unfinished to a proper home office in 6 weeks.",
    result: "Finished in 6 weeks",
    stars: 5,
  },
  {
    name: "Diane K.",
    location: "Portland, OR",
    project: "Whole-Home Refresh",
    quote: "The material tracker alone is worth signing up for. I was buying duplicate supplies constantly. Once I started using it, I cut my materials spend by about 18% just by being organized.",
    result: "18% materials savings",
    stars: 5,
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
          Reno101 gives homeowners the guides, tools, and honest cost breakdowns they need to tackle renovations with confidence — and without the expensive surprises.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/sign-up">
            <Button size="lg" className="rounded-full bg-amber-500 px-8 text-white hover:bg-amber-600">
              Start Planning Free <ArrowRight className="ml-2 h-4 w-4" />
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
              What homeowners are saying
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-slate-600">
              From avoided budget blowouts to finished basements — here's how Reno101 helped real people get their renovations done right.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <Card key={t.name} className="rounded-2xl border bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: t.stars }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-700">&ldquo;{t.quote}&rdquo;</p>
                    </div>
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.location} &middot; {t.project}</p>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1">
                      <CheckCircle className="h-3.5 w-3.5 text-amber-600" />
                      <span className="text-xs font-semibold text-amber-700">{t.result}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/sign-up">
              <Button size="lg" className="rounded-full bg-amber-500 px-8 text-white hover:bg-amber-600">
                Join thousands of homeowners <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
