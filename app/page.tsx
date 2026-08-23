import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Star, TrendingDown, Home, Wrench } from "lucide-react"

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "Toronto, ON",
    project: "Kitchen Renovation",
    icon: Home,
    quote: "We used Reno101 to plan our kitchen gut-job and saved nearly $8,000 by knowing exactly which questions to ask contractors. The cost breakdown guides are brutally honest — no fluff. We came in $4,200 under our original budget.",
    result: "Saved $8,200 vs. first contractor quote",
    stars: 5,
  },
  {
    name: "James & Priya T.",
    location: "Vancouver, BC",
    project: "Basement Finishing",
    icon: TrendingDown,
    quote: "Before Reno101 we had no idea what a finished basement should actually cost. The guides helped us spot two contractors who were padding their quotes by 30%. We ended up with a beautiful space for $34k instead of the $48k we were originally quoted.",
    result: "$14,000 under initial quotes",
    stars: 5,
  },
  {
    name: "Derek L.",
    location: "Calgary, AB",
    project: "Bathroom Remodel",
    icon: Wrench,
    quote: "I'm not handy at all. Reno101 walked me through every stage — permits, tile selection, what to DIY vs. hire out. My bathroom went from a 1990s nightmare to something I'm actually proud of. The material tracker tool alone saved me three trips to the hardware store.",
    result: "Project completed on time, on budget",
    stars: 5,
  },
  {
    name: "Linda K.",
    location: "Ottawa, ON",
    project: "Full Home Refresh",
    icon: Star,
    quote: "I was quoted wildly different prices and had no idea who to trust. Reno101's guides gave me the vocabulary and benchmarks to evaluate every bid properly. I finally felt like I was in control of my own renovation instead of just hoping for the best.",
    result: "Chose the right contractor with confidence",
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
          Stop guessing.<br />Start renovating smarter.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-600">
          Reno101 gives homeowners the guides, tools, and cost benchmarks to plan renovations with confidence — and avoid the expensive mistakes most people make.
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
      <section className="bg-amber-50 py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Real Homeowners. Real Results.</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              What our members saved
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-slate-600">
              Homeowners across Canada use Reno101 to plan smarter, negotiate better, and avoid costly surprises.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t) => {
              const Icon = t.icon
              return (
                <Card key={t.name} className="rounded-2xl border border-amber-100 bg-white shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: t.stars }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-slate-700">&ldquo;{t.quote}&rdquo;</p>
                        <div className="mt-4 rounded-lg bg-amber-50 px-3 py-2">
                          <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">Outcome</p>
                          <p className="mt-0.5 text-sm font-medium text-slate-800">{t.result}</p>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <div>
                            <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                            <p className="text-xs text-slate-500">{t.location} &middot; {t.project}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-10 text-center">
            <Link href="/pricing">
              <Button size="lg" className="rounded-full bg-amber-500 px-8 text-white hover:bg-amber-600">
                Start Planning Smarter <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
