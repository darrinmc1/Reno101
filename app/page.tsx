import { ArrowRight, CheckCircle, Lock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 px-4 py-20 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Renovation Made Simple</p>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Stop Guessing. Start Renovating.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Reno101 gives you the guides, tools, and templates to plan your renovation with confidence — no contractor
          jargon, no surprise costs.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/blogs">
            <Button size="lg" className="rounded-full bg-amber-500 px-8 text-white hover:bg-amber-600">
              Browse Free Guides <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/pricing">
            <Button size="lg" variant="outline" className="rounded-full px-8">
              See Pricing
            </Button>
          </Link>
        </div>
      </section>

      {/* Free vs Paid Clarity */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">What You Get</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Free to start. More when you&apos;re ready.</h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-600">
              We believe good advice shouldn&apos;t be locked behind a paywall. Start free — upgrade when you need the
              full toolkit.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Free */}
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                <CheckCircle className="h-4 w-4" /> Always Free
              </div>
              <h3 className="text-xl font-bold text-slate-900">Get started at no cost</h3>
              <p className="mt-2 text-sm text-slate-600">No credit card. No trial period. Just useful content.</p>
              <ul className="mt-6 space-y-3">
                {[
                  "All renovation blog guides",
                  "Room-by-room planning articles",
                  "Glossary of renovation terms",
                  "Basic cost estimator tool",
                  "FAQ & community tips",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/blogs" className="mt-8 block">
                <Button className="w-full rounded-full bg-green-600 text-white hover:bg-green-700">
                  Start Reading Free
                </Button>
              </Link>
            </div>

            {/* Paid */}
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
                <Lock className="h-4 w-4" /> Pro Plan
              </div>
              <h3 className="text-xl font-bold text-slate-900">Everything in Free, plus:</h3>
              <p className="mt-2 text-sm text-slate-600">For homeowners who want the full renovation toolkit.</p>
              <ul className="mt-6 space-y-3">
                {[
                  "Downloadable project templates & checklists",
                  "Advanced material tracker tool",
                  "Contractor comparison worksheets",
                  "Stage-by-stage renovation roadmaps",
                  "Priority email support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/pricing" className="mt-8 block">
                <Button className="w-full rounded-full bg-amber-500 text-white hover:bg-amber-600">
                  View Pro Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof / CTA */}
      <section className="bg-slate-900 px-4 py-16 text-center text-white">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400">Join Thousands of Homeowners</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold">
          Your renovation doesn&apos;t have to be a guessing game.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          Start with free guides today. Upgrade to Pro when you&apos;re ready for the full toolkit.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/sign-up">
            <Button size="lg" className="rounded-full bg-amber-500 px-8 text-white hover:bg-amber-600">
              Create Free Account
            </Button>
          </Link>
          <Link href="/pricing">
            <Button size="lg" variant="outline" className="rounded-full border-white/30 px-8 text-white hover:bg-white/10">
              Compare Plans
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
