import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Shield, TrendingUp } from "lucide-react"

const STAGES = [
  { num: 1, label: "Vision & Goals" },
  { num: 2, label: "Budget Planning" },
  { num: 3, label: "Permits & Approvals" },
  { num: 4, label: "Contractor Selection" },
  { num: 5, label: "Design & Layout" },
  { num: 6, label: "Demolition" },
  { num: 7, label: "Structural Work" },
  { num: 8, label: "Rough Plumbing" },
  { num: 9, label: "Electrical Rough-In" },
  { num: 10, label: "Insulation & Drywall" },
  { num: 11, label: "Flooring" },
  { num: 12, label: "Cabinetry & Millwork" },
  { num: 13, label: "Finish Plumbing" },
  { num: 14, label: "Painting & Trim" },
  { num: 15, label: "Final Inspections" },
  { num: 16, label: "Project Closeout" },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 rounded-full px-4 py-1.5 text-amber-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Avoid $10,000+ in Costly Renovation Mistakes
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Your Complete{" "}
              <span className="text-amber-400">Renovation Roadmap</span>
              <br />From Dream to Done
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Renos101 guides you through all 16 stages of your home renovation — so you know exactly what to do, when to do it, and how to avoid the mistakes that cost homeowners thousands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 text-lg w-full sm:w-auto">
                  Start Your Free Roadmap
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button size="lg" variant="outline" className="border-slate-500 text-white hover:bg-slate-700 px-8 py-4 text-lg w-full sm:w-auto">
                  See How It Works
                </Button>
              </Link>
            </div>
            <p className="text-slate-400 text-sm mt-4">Free to start — no credit card required</p>
          </div>

          {/* 16-Stage Roadmap Visual */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-slate-200">The 16-Stage Renovation Journey</h2>
              <span className="text-xs text-slate-400 bg-slate-700 px-3 py-1 rounded-full">Your progress tracked here</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
              {STAGES.map((stage, index) => (
                <div
                  key={stage.num}
                  className={`relative flex flex-col items-center text-center p-2 rounded-lg border transition-all ${
                    index < 3
                      ? "bg-amber-500/20 border-amber-500/50 text-amber-300"
                      : "bg-slate-700/40 border-slate-600/50 text-slate-400"
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mb-1.5 ${
                      index < 3
                        ? "bg-amber-500 text-slate-900"
                        : "bg-slate-600 text-slate-300"
                    }`}
                  >
                    {index < 3 ? <CheckCircle className="w-4 h-4" /> : stage.num}
                  </div>
                  <span className="text-xs leading-tight font-medium">{stage.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                Completed stages
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-slate-600 inline-block"></span>
                Upcoming stages
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Step-by-Step Guidance</h3>
                <p className="text-sm text-slate-600">Know exactly what to do at every stage — from first idea to final walkthrough.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Avoid Costly Mistakes</h3>
                <p className="text-sm text-slate-600">Our checklists and warnings help you sidestep the errors that cost homeowners $10K+.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Track Your Progress</h3>
                <p className="text-sm text-slate-600">Stay organized with a personal dashboard that tracks every task, document, and decision.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-amber-500">
        <div className="max-w-4xl mx-auto px-4 py-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Ready to renovate with confidence?
          </h2>
          <p className="text-slate-800 mb-6 text-lg">
            Join thousands of homeowners who used Renos101 to complete their renovations on time and on budget.
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-10 py-4 text-lg">
              Get Your Free Roadmap
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
