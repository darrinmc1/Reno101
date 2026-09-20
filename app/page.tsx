import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Star } from "lucide-react"

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "Denver, CO",
    project: "Full Kitchen Renovation",
    quote: "Reno101 helped me catch a contractor quote that was $15,000 over market rate. The cost breakdown guides gave me the confidence to negotiate — and I got the kitchen I wanted without blowing my budget.",
    result: "Saved $15,000 on budget overruns",
    initials: "SM",
    color: "bg-amber-100 text-amber-700",
  },
  {
    name: "James & Priya T.",
    location: "Austin, TX",
    project: "Basement Finishing",
    quote: "We were completely lost on where to start. The stage-by-stage planning tool kept us on track and we finished 3 weeks ahead of schedule. Our contractor actually commented on how prepared we were.",
    result: "Finished 3 weeks ahead of schedule",
    initials: "JP",
    color: "bg-green-100 text-green-700",
  },
  {
    name: "Marcus L.",
    location: "Portland, OR",
    project: "Master Bathroom Remodel",
    quote: "I used the material tracker to compare tile options and avoided a costly mistake — the cheaper tiles I almost bought would have needed replacing in 5 years. The ROI calculator alone is worth it.",
    result: "Avoided $8,000 in premature replacements",
    initials: "ML",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Linda K.",
    location: "Chicago, IL",
    project: "Open-Concept Living Room",
    quote: "As a first-time renovator, I was terrified of making expensive mistakes. Reno101's guides walked me through every decision. My project came in under budget and I actually enjoyed the process.",
    result: "Came in $4,200 under budget",
    initials: "LK",
    color: "bg-purple-100 text-purple-700",
  },
]

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="container mx-auto max-w-5xl px-4 py-20 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Renovation Planning Made Simple</p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
          Plan smarter.<br />Renovate better.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-600">
          Stop guessing and start planning. Reno101 gives you the tools, guides, and cost breakdowns to tackle any renovation with confidence — and without the budget horror stories.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/research/new">
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
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Real Homeowners. Real Results.</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Renovators who planned smarter
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-slate-600">
              See how homeowners used Reno101 to save money, avoid costly mistakes, and finish on time.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <Card key={t.name} className="rounded-2xl border bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold ${t.color}`}>
                      {t.initials}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-700">&ldquo;{t.quote}&rdquo;</p>
                      <div className="mt-4 flex items-center gap-2 rounded-xl bg-green-50 px-3 py-2">
                        <CheckCircle className="h-4 w-4 shrink-0 text-green-600" />
                        <span className="text-sm font-medium text-green-700">{t.result}</span>
                      </div>
                      <div className="mt-3">
                        <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                        <p className="text-xs text-slate-500">{t.project} &bull; {t.location}</p>
                      </div>
                    </div>
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
    </main>
  )
}
