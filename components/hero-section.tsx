"use client"

import Link from "next/link"
import { AlertTriangle, ArrowRight, Clock, Ruler } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TOTAL_STAGES } from "@/lib/stages"
import { useParallax } from "@/hooks/use-parallax"

export default function HeroSection() {
  const washRef = useParallax<HTMLDivElement>(0.16)
  const gridRef = useParallax<HTMLDivElement>(0.09)
  const artefactRef = useParallax<HTMLDivElement>(0.06)
  const stillRef = useParallax<HTMLDivElement>(0.03)

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-slate-900 to-stone-950 py-16 text-white md:py-24"
      aria-labelledby="home-hero-heading"
    >
      <div
        ref={washRef}
        className="pointer-events-none absolute -inset-x-10 -top-24 h-[140%] bg-[url('/images/hero-renos101.jpg')] bg-cover bg-center opacity-20 will-change-transform"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-amber-500/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-10 h-80 w-80 rounded-full bg-orange-600/20 blur-[100px]"
        aria-hidden="true"
      />
      <div
        ref={gridRef}
        className="pointer-events-none absolute inset-0 opacity-20 will-change-transform"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />
      <div
        ref={artefactRef}
        className="pointer-events-none absolute right-[3%] top-20 hidden w-[22rem] opacity-[0.16] will-change-transform lg:block"
        aria-hidden="true"
      >
        <QuoteArtefact />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">
              Renovation training
            </p>
            <h1
              id="home-hero-heading"
              className="max-w-2xl text-left text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              The quote came in 40% over.{" "}
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">
                Here is how you read it before you sign.
              </span>
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl">
              Costing, sequencing, and the lines that do the damage. Not a pep talk. Not a live AI tool in the hallway.
              Sixteen stages on the site — start with a free lesson and learn which bits of the paper are real.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-7 py-6 text-base font-bold text-slate-950 shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-orange-500"
              >
                <Link href="/stages/planning">
                  Start free lesson
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl border-slate-700 bg-slate-800/80 px-6 py-6 text-base text-slate-200 hover:bg-slate-700 hover:text-white"
              >
                <Link href="#stages">Browse topics</Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-xl px-4 py-6 text-base text-amber-300 hover:bg-slate-800 hover:text-amber-200">
                <Link href="#subscribe">Join the waitlist</Link>
              </Button>
            </div>

            <p className="text-xs font-medium text-slate-400">
              Free written lesson: Planning. {TOTAL_STAGES} stages on the site. That is the lot.
            </p>
          </div>

          <div ref={stillRef} className="lg:col-span-5">
            <InspectorStillFrame />
          </div>
        </div>
      </div>
    </section>
  )
}

function QuoteArtefact() {
  return (
    <svg viewBox="0 0 280 360" className="h-auto w-full text-amber-300">
      <rect x="8" y="8" width="264" height="344" rx="8" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text x="28" y="44" fill="currentColor" fontSize="11" fontFamily="ui-sans-serif, system-ui">
        SCOPE OF WORKS
      </text>
      <line x1="28" y1="58" x2="196" y2="58" stroke="currentColor" strokeWidth="1" />
      <rect x="28" y="78" width="160" height="8" rx="2" fill="currentColor" opacity="0.45" />
      <rect x="28" y="96" width="220" height="6" rx="2" fill="currentColor" opacity="0.28" />
      <rect x="28" y="112" width="200" height="6" rx="2" fill="currentColor" opacity="0.28" />
      <rect x="28" y="148" width="90" height="6" rx="2" fill="currentColor" opacity="0.4" />
      <rect x="28" y="168" width="220" height="6" rx="2" fill="currentColor" opacity="0.22" />
      <rect x="28" y="184" width="190" height="6" rx="2" fill="currentColor" opacity="0.22" />
      <rect x="28" y="220" width="70" height="6" rx="2" fill="currentColor" opacity="0.4" />
      <rect x="28" y="240" width="140" height="48" rx="4" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

function InspectorStillFrame() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -right-5 top-10 hidden h-[82%] w-full rotate-3 rounded-3xl border border-amber-500/20 bg-slate-900/50 shadow-2xl lg:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-amber-500/15 blur-[90px]"
        aria-hidden="true"
      />
      <figure className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-slate-900/90 shadow-2xl">
        <figcaption className="border-b border-slate-800 px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-slate-400">
          Still · Kitchen inspector
        </figcaption>
        <div className="relative h-[26rem] overflow-hidden sm:h-[30rem]">
          <div className="hero-inspector-still pointer-events-none absolute -left-[8%] -top-[6%] w-[124%] origin-top-left" aria-hidden="true">
            <InspectorStill />
          </div>
        </div>
      </figure>
    </div>
  )
}

/** Frozen still of the existing home room inspector — same chrome, no prices, no interaction. */
function InspectorStill() {
  return (
    <div className="rounded-3xl border border-amber-500/30 bg-slate-900/90 p-6 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <Ruler className="h-5 w-5 text-amber-400" />
          <span className="text-sm font-bold uppercase tracking-wider text-slate-200">
            Interactive Reno Inspector
          </span>
        </div>
        <span className="rounded border border-amber-500/20 bg-amber-400/10 px-2 py-0.5 font-mono text-xs text-amber-400">
          Select Room:
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2 py-4">
        {[
          { emoji: "🍳", label: "Kitchen", on: true },
          { emoji: "🛁", label: "Bathroom", on: false },
          { emoji: "🏡", label: "Whole House", on: false },
          { emoji: "🪴", label: "Deck & Yard", on: false },
        ].map((room) => (
          <div
            key={room.label}
            className={`flex flex-col items-center justify-center rounded-xl p-2.5 text-xs font-medium ${
              room.on ? "bg-amber-500 font-bold text-slate-950" : "bg-slate-800/80 text-slate-300"
            }`}
          >
            <span className="text-lg">{room.emoji}</span>
            <span className="mt-1">{room.label}</span>
          </div>
        ))}
      </div>

      <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-lg font-extrabold text-white">
              <span>🍳</span>
              <span>Kitchen Renovation</span>
            </h2>
            <span className="text-xs font-semibold text-amber-400">Stage 03 &amp; 13</span>
          </div>
          <p className="mt-0.5 text-xs text-slate-400">The highest value &amp; highest stress room</p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
            <div className="mb-1 flex items-center gap-1.5 text-slate-400">
              <Clock className="h-3.5 w-3.5 text-amber-400" />
              <span>Typical Time</span>
            </div>
            <span className="text-sm font-bold text-slate-100">3 – 6 weeks</span>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
            <div className="mb-1 text-slate-400">Key stage</div>
            <span className="text-sm font-bold text-slate-100">Quotes &amp; Cabinetry</span>
          </div>
        </div>

        <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3.5 text-xs text-amber-200">
          <div className="flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 shrink-0 text-amber-400" />
            <div>
              <span className="mb-0.5 block font-bold text-amber-300">Top Pitfall to Avoid:</span>
              <span>Buying appliances last after cabinets are ordered</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-slate-800 pt-1 text-xs">
          <span className="text-slate-400">
            DIY Suitability: <strong className="text-slate-200">Medium (Cabinets OK, Gas/Plumbing NO)</strong>
          </span>
          <span className="font-semibold text-amber-400">See Guide →</span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between px-1 text-xs text-slate-400">
        <span>⚡ {TOTAL_STAGES} Stages Covered</span>
        <span>📋 Free Checklists Included</span>
      </div>
    </div>
  )
}
