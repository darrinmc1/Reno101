import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Wrench, FileText, FlaskConical } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,rgba(255,244,226,0.95),rgba(224,240,230,0.9))] px-4 py-24 md:py-32">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Home Renovation Made Simple</p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Renovate smarter,<br />not harder.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-600">
            Practical guides, honest budgets, and the tools you actually need — built for the person standing in a hardware store at 8 PM wondering what to do next.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="rounded-full px-8 text-base">
              <Link href="/sign-up">Get Started Free <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-base">
              <Link href="/blogs">Browse Guides</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Primary Conversion Paths */}
      <section className="container mx-auto max-w-5xl px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Where do you want to start?</h2>
          <p className="mt-3 text-lg text-slate-600">Pick the path that fits where you are right now.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Link href="/blogs" className="group rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">View Guides</h3>
            <p className="mt-2 text-sm text-slate-600">Step-by-step renovation guides with real budgets and no fluff.</p>
            <span className="mt-4 inline-flex items-center text-sm font-medium text-amber-600 group-hover:underline">Explore guides <ArrowRight className="ml-1 h-3 w-3" /></span>
          </Link>

          <Link href="/tools" className="group rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
              <Wrench className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">Explore Tools</h3>
            <p className="mt-2 text-sm text-slate-600">Calculators and planners to keep your project on track and on budget.</p>
            <span className="mt-4 inline-flex items-center text-sm font-medium text-green-600 group-hover:underline">Try tools <ArrowRight className="ml-1 h-3 w-3" /></span>
          </Link>

          <Link href="/resources" className="group rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <FileText className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">Resources</h3>
            <p className="mt-2 text-sm text-slate-600">Templates, checklists, and downloads to plan your renovation properly.</p>
            <span className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 group-hover:underline">Browse resources <ArrowRight className="ml-1 h-3 w-3" /></span>
          </Link>

          <Link href="/research" className="group rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
              <FlaskConical className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">Research</h3>
            <p className="mt-2 text-sm text-slate-600">Data-backed renovation insights to help you make confident decisions.</p>
            <span className="mt-4 inline-flex items-center text-sm font-medium text-purple-600 group-hover:underline">See research <ArrowRight className="ml-1 h-3 w-3" /></span>
          </Link>
        </div>
      </section>

      {/* Single Sign-Up CTA */}
      <section className="bg-slate-900 px-4 py-20">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Ready to take on your renovation?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
            Create a free account to save guides, track your project, and access all our planning tools.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-amber-500 px-10 text-base text-white hover:bg-amber-600">
              <Link href="/sign-up">Sign Up Free</Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-full px-8 text-base text-slate-300 hover:text-white">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
