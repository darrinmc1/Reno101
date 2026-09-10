import { ArrowRight, CheckCircle, Star, Zap, Shield, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 px-4 py-20 md:py-32">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Free Renovation Guides</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Renovate smarter,<br />
            <span className="text-amber-600">not harder</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Step-by-step guides, real budgets, and honest advice for homeowners tackling renovations without losing their minds — or their savings.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/stages/planning">
              <Button size="lg" className="rounded-full bg-amber-500 px-8 py-4 text-base font-semibold text-white shadow-md hover:bg-amber-600">
                Start Free Guide
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="rounded-full border-slate-300 px-8 py-4 text-base font-semibold text-slate-700 hover:bg-slate-50">
                View Plans
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-500">No credit card required &bull; Free guides available instantly</p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-slate-100 bg-white px-4 py-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Trusted by 10,000+ homeowners</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-amber-500" />
              <span>4.9/5 average rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-blue-500" />
              <span>Honest, unbiased advice</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-purple-500" />
              <span>Updated monthly</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white px-4 py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">What You Get</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Everything you need to renovate with confidence
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card className="rounded-2xl border-slate-100 shadow-sm">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                  <Zap className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4 text-lg text-slate-900">Stage-by-stage guides</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-slate-600">
                  From planning through finishing, every phase broken down into clear, actionable steps — no experience required.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-slate-100 shadow-sm">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <Shield className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4 text-lg text-slate-900">Real cost breakdowns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-slate-600">
                  Honest budgets with line-item detail. We include the costs people forget — permits, disposal, and the inevitable surprises.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-slate-100 shadow-sm">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4 text-lg text-slate-900">Contractor checklists</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-slate-600">
                  Know what to ask, what to watch for, and how to avoid the most common (and costly) renovation mistakes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Guides Section */}
      <section className="bg-slate-50 px-4 py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Most Popular</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Start with these guides</h2>
            </div>
            <Link href="/blogs">
              <Button variant="ghost" className="hidden text-slate-600 hover:text-slate-900 sm:flex">
                Browse all guides
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { title: "Kitchen Renovation 101", desc: "The complete guide to planning, budgeting, and executing a kitchen remodel.", href: "/blogs/kitchen-renovation-guide", tag: "Most Read" },
              { title: "Bathroom Remodel Checklist", desc: "Everything you need before demo day — permits, fixtures, and timeline.", href: "/blogs/bathroom-remodel-checklist", tag: "Popular" },
              { title: "Hiring a Contractor", desc: "How to find, vet, and manage contractors without getting burned.", href: "/blogs/hiring-contractors", tag: "Essential" },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href}>
                <Card className="h-full rounded-2xl border-white/60 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                  <CardHeader>
                    <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">{guide.tag}</span>
                    <CardTitle className="mt-3 text-base text-slate-900">{guide.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">{guide.desc}</p>
                    <div className="mt-4 flex items-center text-sm font-medium text-amber-600">
                      Read guide <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center sm:hidden">
            <Link href="/blogs">
              <Button variant="outline" className="rounded-full border-slate-300 text-slate-700">
                Browse all guides <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="bg-white px-4 py-20">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Upgrade Anytime</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Free guides to get started.<br />Pro tools when you&apos;re ready.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
            Access AI-powered planning tools, material trackers, and personalized renovation timelines with a Pro account.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/sign-up">
              <Button size="lg" className="rounded-full bg-amber-500 px-8 py-4 text-base font-semibold text-white shadow-md hover:bg-amber-600">
                Create Free Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="rounded-full border-slate-300 px-8 py-4 text-base font-semibold text-slate-700 hover:bg-slate-50">
                Compare Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final Newsletter CTA */}
      <section className="bg-amber-500 px-4 py-16">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">Get renovation tips in your inbox</h2>
          <p className="mt-3 text-amber-100">Weekly guides, cost breakdowns, and the occasional renovation horror story. No spam.</p>
          <div className="mt-6">
            <Link href="/signup">
              <Button size="lg" className="rounded-full bg-white px-8 py-4 text-base font-semibold text-amber-600 shadow-md hover:bg-amber-50">
                Subscribe Free
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
