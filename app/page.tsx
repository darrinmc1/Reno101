import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Star } from "lucide-react"

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "Toronto, ON",
    project: "Kitchen Renovation",
    quote: "We used Reno101 to plan our full kitchen gut-job. The cost guides were spot-on — we came in $3,200 under our original contractor quote because we knew exactly what to push back on. Took 6 weeks instead of the 10 we feared.",
    result: "Saved $3,200 · Finished 4 weeks early",
    stars: 5,
  },
  {
    name: "James & Priya K.",
    location: "Vancouver, BC",
    project: "Basement Finishing",
    quote: "Before Reno101 we had zero idea what a finished basement actually involved. The stage-by-stage guides helped us sequence the work correctly — we avoided a $1,800 mistake by doing the rough-in inspection before drywall.",
    result: "Avoided $1,800 rework · Passed inspection first try",
    stars: 5,
  },
  {
    name: "Derek T.",
    location: "Calgary, AB",
    project: "Master Bathroom Remodel",
    quote: "The material tracker alone was worth it. I stopped over-ordering tile and actually returned $640 worth of surplus. The guides told me things my contractor assumed I already knew — I didn't, and it would have cost me.",
    result: "Saved $640 in materials · No costly surprises",
    stars: 5,
  },
  {
    name: "Linda C.",
    location: "Ottawa, ON",
    project: "Open-Concept Main Floor",
    quote: "I was terrified about load-bearing walls. Reno101 explained exactly what questions to ask a structural engineer and what red flags to watch for in quotes. We got three bids and chose confidently. Project came in on budget.",
    result: "On budget · Zero structural surprises",
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
          Reno101 gives homeowners the guides, tools, and honest cost breakdowns they need to take on any renovation — without the expensive surprises.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/blogs">
            <Button size="lg" className="rounded-full bg-amber-500 px-8 text-white hover:bg-amber-600">
              Browse Guides <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/pricing">
            <Button size="lg" variant="outline" className="rounded-full px-8">
              See Pricing
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Real Renovations, Real Results</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Homeowners who planned with Reno101
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-slate-600">
              From kitchens to basements — here&rsquo;s what happened when people stopped guessing and started planning.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <Card key={t.name} className="rounded-2xl border bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-4 flex items-center gap-2 rounded-xl bg-amber-50 px-4 py-2">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-amber-600" />
                    <span className="text-sm font-medium text-amber-800">{t.result}</span>
                  </div>
                  <div className="mt-4 border-t pt-4">
                    <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.project} &middot; {t.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/blogs">
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
