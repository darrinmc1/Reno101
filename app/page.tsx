import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Star } from "lucide-react"

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "Denver, CO",
    project: "Kitchen Renovation",
    quote: "I used Reno101 to plan our kitchen remodel and saved nearly $8,000 by knowing exactly what to ask contractors. The cost guides were spot-on — no nasty surprises.",
    result: "Came in $8,200 under initial contractor quote",
    stars: 5,
  },
  {
    name: "James & Priya T.",
    location: "Austin, TX",
    project: "Bathroom Gut & Redo",
    quote: "We had three contractors give us wildly different quotes. Reno101's guides helped us understand why — and negotiate confidently. Our bathroom went from 1970s tile nightmare to something we actually love.",
    result: "Negotiated 22% off final contractor price",
    stars: 5,
  },
  {
    name: "Derek L.",
    location: "Portland, OR",
    project: "Basement Finishing",
    quote: "The stage-by-stage planning tool kept me from making a $4,000 mistake with the wrong insulation type. I wish I'd found this before my first renovation attempt.",
    result: "Avoided $4,000 insulation rework",
    stars: 5,
  },
  {
    name: "Carla W.",
    location: "Charlotte, NC",
    project: "Open-Plan Living Room",
    quote: "As a first-time homeowner I was completely lost. Reno101 broke everything down without talking down to me. My contractor actually complimented how prepared I was at our first meeting.",
    result: "Project completed on time & on budget",
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
          Reno101 gives homeowners the guides, cost breakdowns, and planning tools to tackle any renovation — without getting burned by surprise costs or bad contractors.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
      </section>

      {/* Testimonials */}
      <section className="bg-amber-50 py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Real Homeowners. Real Results.</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              What our users saved — and built
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-slate-600">
              Thousands of homeowners have used Reno101 to plan smarter and negotiate better. Here&apos;s what a few of them had to say.
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
                  <blockquote className="mt-3 text-slate-700 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-4 rounded-xl bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">
                    ✓ {t.result}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">{t.name}</p>
                      <p className="text-sm text-slate-500">{t.location}</p>
                    </div>
                    <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                      {t.project}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/research/new">
              <Button size="lg" className="rounded-full bg-amber-500 px-8 text-white hover:bg-amber-600">
                Start Your Renovation Plan <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
