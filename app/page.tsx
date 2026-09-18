import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Star, CheckCircle2 } from "lucide-react"

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "Austin, TX",
    project: "Full Kitchen Renovation",
    quote: "I was quoted $42,000 by three contractors. After using Renos101's kitchen planning guides and cost breakdown tools, I managed the project myself and came in at $26,500. The guides were incredibly detailed — nothing was left to guesswork.",
    result: "Saved $15,500",
    resultDetail: "vs. contractor quotes",
    beforeBg: "bg-slate-200",
    afterBg: "bg-amber-100",
    stars: 5,
  },
  {
    name: "James & Priya T.",
    location: "Denver, CO",
    project: "Basement Finishing",
    quote: "We budgeted 10 weeks and finished in 8. The stage-by-stage checklists kept us on track and we never had to backtrack because we missed a step. Our contractor actually complimented how prepared we were.",
    result: "Finished 2 weeks early",
    resultDetail: "on a 10-week timeline",
    beforeBg: "bg-slate-200",
    afterBg: "bg-green-100",
    stars: 5,
  },
  {
    name: "Derek O.",
    location: "Portland, OR",
    project: "Master Bathroom Remodel",
    quote: "The material tracker alone saved me from over-ordering tile — I would have bought 30% too much based on my own math. The guides also helped me have smarter conversations with my contractor so I wasn't getting upsold on things I didn't need.",
    result: "Saved $3,200",
    resultDetail: "in materials & avoided upsells",
    beforeBg: "bg-slate-200",
    afterBg: "bg-blue-100",
    stars: 5,
  },
  {
    name: "Linda C.",
    location: "Nashville, TN",
    project: "Open-Concept Living Room",
    quote: "First-time renovator here. I was terrified of making expensive mistakes. Renos101 walked me through every decision — from load-bearing wall checks to flooring selection. I felt confident the entire time, which I never expected.",
    result: "Zero costly mistakes",
    resultDetail: "first-time renovator",
    beforeBg: "bg-slate-200",
    afterBg: "bg-purple-100",
    stars: 5,
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="container mx-auto max-w-5xl px-4 py-20 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Home Renovation Guides</p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
          Renovate smarter.<br />Spend less. Stress less.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-600">
          Step-by-step guides, real cost breakdowns, and practical tools for homeowners who want to take control of their renovation — without getting taken advantage of.
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
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Real Results</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Homeowners who used Renos101
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-slate-600">
              Not influencers. Not contractors. Just people who renovated their homes and came out ahead.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <Card key={t.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <CardContent className="p-0">
                  {/* Before / After visual strip */}
                  <div className="flex h-24 w-full overflow-hidden rounded-t-2xl">
                    <div className={`flex flex-1 flex-col items-center justify-center gap-1 ${t.beforeBg}`}>
                      <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">Before</span>
                      <span className="text-sm font-medium text-slate-700">Planning stage</span>
                    </div>
                    <div className="flex w-8 items-center justify-center bg-white z-10 shadow-sm">
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                    </div>
                    <div className={`flex flex-1 flex-col items-center justify-center gap-1 ${t.afterBg}`}>
                      <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">After</span>
                      <span className="text-sm font-bold text-slate-800">{t.result}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Stars */}
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.stars }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="mt-3 text-sm leading-relaxed text-slate-700">&ldquo;{t.quote}&rdquo;</p>

                    {/* Result badge */}
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-semibold text-green-700">{t.result}</span>
                      <span className="text-xs text-green-600">{t.resultDetail}</span>
                    </div>

                    {/* Attribution */}
                    <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                        <p className="text-xs text-slate-500">{t.location}</p>
                      </div>
                      <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                        {t.project}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/blogs">
              <Button size="lg" className="rounded-full bg-amber-500 px-8 text-white hover:bg-amber-600">
                Start Your Renovation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
