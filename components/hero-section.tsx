import Link from "next/link"
import { AlertTriangle, ArrowRight, Clock, Ruler } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TOTAL_STAGES } from "@/lib/stages"

const SCOPE_LINES = [
  {
    code: "01",
    line: "Provisional sums",
    note: "TBA is not a figure. It is a shrug in a company shirt.",
  },
  {
    code: "02",
    line: "Exclusions",
    note: "The dear part is usually what they left off the page.",
  },
  {
    code: "03",
    line: "Prime cost items",
    note: "They priced a tap you will never pick. The swap is on you.",
  },
  {
    code: "04",
    line: "Variations",
    note: "Who writes them, who signs, and when they are supposed to stop.",
  },
  {
    code: "05",
    line: "Sequence",
    note: "Waterproofing after tiling is how bathrooms get built twice.",
  },
  {
    code: "06",
    line: "Allow for existing",
    note: "They have not opened a wall. The wall will have opinions.",
  },
] as const

const BEFORE_AFTER = [
  {
    before: "Subject to site inspection",
    after: "They priced a house they have not crawled under.",
  },
  {
    before: "Allow for existing conditions",
    after: "The real number starts when the plaster comes off.",
  },
  {
    before: "Variations as directed",
    after: "Anything after the handshake is a new invoice.",
  },
  {
    before: "PC sum — fixtures to be advised",
    after: "You choose later. That is where the overrun sits.",
  },
] as const

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-slate-900 to-stone-950 py-16 text-white md:py-24"
      aria-labelledby="home-hero-heading"
    >
      <div className="absolute inset-0 bg-[url('/images/hero-renos101.jpg')] bg-cover bg-center opacity-25" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-amber-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-80 w-80 rounded-full bg-orange-600/15 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
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

            <ol className="space-y-2 pt-2">
              {SCOPE_LINES.map((item) => (
                <li
                  key={item.code}
                  className="grid gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur sm:grid-cols-[2.5rem_minmax(0,11rem)_1fr] sm:items-start sm:gap-4"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-amber-500/10 text-sm font-bold text-amber-400">
                    {item.code}
                  </span>
                  <span className="font-semibold text-white">{item.line}</span>
                  <span className="text-sm leading-relaxed text-slate-400">{item.note}</span>
                </li>
              ))}
            </ol>

            <p className="text-xs font-medium text-slate-400">
              {TOTAL_STAGES} stages on the site. That is the lot.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-[28rem] overflow-hidden rounded-3xl border border-amber-500/30 bg-slate-900/90 shadow-2xl sm:h-[32rem]">
              <div className="hero-inspector-still pointer-events-none absolute -left-[8%] -top-[10%] w-[124%] origin-top-left" aria-hidden="true">
                <InspectorStill />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur md:p-6">
          <div className="grid gap-3 md:grid-cols-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">What the quote says</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">What you check before you sign</p>
          </div>
          <ul className="mt-4 space-y-3">
            {BEFORE_AFTER.map((row) => (
              <li key={row.before} className="grid gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-4 md:grid-cols-2 md:items-center">
                <p className="text-sm font-medium text-slate-300">{row.before}</p>
                <p className="text-sm leading-relaxed text-slate-200">{row.after}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
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
