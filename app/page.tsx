import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Hammer, Lightbulb, Sparkles, Star, Users } from "lucide-react"
import Link from "next/link"

const FEATURES = [
  { icon: Hammer, title: "Step-by-step project guides", desc: "From demo day to final coat — every stage covered with realistic timelines and costs." },
  { icon: Lightbulb, title: "Smart planning tools", desc: "Budget calculators, material trackers, and checklists built for real renovations." },
  { icon: Users, title: "Contractor-ready resources", desc: "Know what to ask, what to pay, and what to watch out for before signing anything." },
  { icon: Sparkles, title: "Honest cost breakdowns", desc: "No fantasy budgets. Real numbers, including the stuff everyone forgets to include." },
]

const TESTIMONIALS = [
  { quote: "Finally, renovation advice that doesn't assume I have a contractor on speed dial.", author: "Sarah M.", role: "First-time homeowner" },
  { quote: "The budget breakdown alone saved me from a $12,000 mistake. Worth every penny.", author: "James T.", role: "DIY renovator" },
  { quote: "I used the contractor checklist and actually felt confident in the meeting. Game changer.", author: "Priya K.", role: "Kitchen remodel survivor" },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="container mx-auto max-w-5xl px-4 py-20 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Renovation made simple</p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
          Stop guessing.<br />Start renovating.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-600">
          Reno101 gives homeowners the guides, tools, and honest cost breakdowns they need to renovate with confidence — no contractor degree required.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/sign-up">
            <Button size="lg" className="rounded-full bg-amber-500 px-8 text-white hover:bg-amber-600">
              Get started free <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/pricing">
            <Button size="lg" variant="outline" className="rounded-full px-8">
              View pricing
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Everything you need to renovate smarter</h2>
            <p className="mt-3 text-lg text-slate-600">Tools and guides built for the person actually doing the work — or managing the people doing it.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {FEATURES.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="rounded-2xl border bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Homeowners who survived their renovations</h2>
            <p className="mt-3 text-lg text-slate-600">And came out the other side with kitchens they actually like.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.author} className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-700">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-slate-900">{t.author}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-amber-50 py-20">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Ready to stop Googling at 11pm?</h2>
          <p className="mt-4 text-lg text-slate-600">
            Join thousands of homeowners who plan smarter, spend less, and actually finish their renovations.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/sign-up">
              <Button size="lg" className="rounded-full bg-amber-500 px-8 text-white hover:bg-amber-600">
                Create free account <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/blogs">
              <Button size="lg" variant="ghost" className="rounded-full px-8 text-slate-700">
                Browse free guides
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-500">No credit card required. Free plan available.</p>
        </div>
      </section>
    </div>
  )
}
