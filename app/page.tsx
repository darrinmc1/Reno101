import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Star } from "lucide-react"

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "Toronto, ON",
    project: "Kitchen Renovation",
    quote: "We used Reno101 to plan our full kitchen gut job. The cost guides were spot-on — we came in $2,400 under budget and finished 3 days ahead of schedule. I finally understood what our contractor was talking about.",
    outcome: "Saved $2,400 vs. initial quote",
    stars: 5,
  },
  {
    name: "James & Priya T.",
    location: "Vancouver, BC",
    project: "Basement Finishing",
    quote: "Before Reno101, we had no idea what permits we needed or what order to hire trades. The stage-by-stage guides saved us from a $6,000 mistake — we almost drywalled before the rough-in inspection.",
    outcome: "Avoided a $6,000 redo",
    stars: 5,
  },
  {
    name: "Derek L.",
    location: "Calgary, AB",
    project: "Main Bathroom Remodel",
    quote: "I'm not handy at all. Reno101 helped me ask the right questions, compare three contractor bids properly, and cut 6 weeks off the project timeline by knowing what to prep in advance.",
    outcome: "Cut project timeline by 6 weeks",
    stars: 5,
  },
  {
    name: "Natalie R.",
    location: "Ottawa, ON",
    project: "Open-Concept Living Room",
    quote: "The load-bearing wall guide alone was worth it. Our contractor confirmed we asked exactly the right questions. We saved $1,800 by understanding the scope before getting quotes.",
    outcome: "Saved $1,800 on contractor quotes",
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
          Reno101 gives homeowners the guides, tools, and honest cost breakdowns they need to take on any renovation — without getting burned.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Real Renovations. Real Results.</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              What homeowners accomplished with Reno101
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-600">
              From kitchens to basements, here&rsquo;s how real homeowners used our guides to save money, avoid costly mistakes, and finish on time.
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
                  <div className="mt-4 flex items-center justify-between border-t pt-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.location} &middot; {t.project}</p>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5">
                      <CheckCircle className="h-3.5 w-3.5 text-green-600" />
                      <span className="text-xs font-medium text-green-700">{t.outcome}</span>
                    </div>
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
