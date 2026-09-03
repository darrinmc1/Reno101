import Link from "next/link"
import { IBM_Plex_Mono, IBM_Plex_Sans, Newsreader } from "next/font/google"
import { AlertTriangle, Clock, Ruler } from "lucide-react"
import { TOTAL_STAGES } from "@/lib/stages"

const display = Newsreader({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
})

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
})

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
      className={`${sans.className} relative overflow-hidden border-b border-[#c8b89a] bg-[#efe4cf] text-[#1a1612]`}
      aria-labelledby="home-hero-heading"
    >
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-12 md:px-6 md:py-16 lg:grid-cols-12 lg:items-start lg:gap-12 lg:py-20">
        <div className="lg:col-span-7">
          <p className={`${mono.className} text-[11px] font-medium uppercase tracking-[0.22em] text-[#6b4a2a]`}>
            Scope of works · Australian home reno
          </p>

          <h1
            id="home-hero-heading"
            className={`${display.className} mt-4 max-w-xl text-left text-[2.15rem] font-semibold leading-[1.12] tracking-[-0.02em] text-[#1a1612] sm:text-5xl lg:text-[3.35rem]`}
          >
            The quote came in 40% over.{" "}
            <span className="italic text-[#7a3416]">Here is how you read it before you sign.</span>
          </h1>

          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-[#3a332b]">
            Costing, sequencing, and the lines that do the damage. Not a pep talk. Not a live AI tool in the hallway.
            Sixteen stages on the site — start with a free lesson and learn which bits of the paper are real.
          </p>

          <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/stages/planning"
              className={`${mono.className} inline-flex items-center justify-center bg-[#7a3416] px-5 py-3 text-sm font-medium tracking-wide text-[#f6eedd] hover:bg-[#5c2610]`}
            >
              Start free lesson
            </Link>
            <Link
              href="#stages"
              className={`${mono.className} inline-flex items-center justify-center border border-[#1a1612] bg-transparent px-5 py-3 text-sm font-medium tracking-wide text-[#1a1612] hover:bg-[#1a1612] hover:text-[#f6eedd]`}
            >
              Browse topics
            </Link>
            <Link
              href="#subscribe"
              className={`${mono.className} inline-flex items-center justify-center px-2 py-3 text-sm font-medium tracking-wide text-[#7a3416] underline decoration-[#7a3416]/40 underline-offset-4 hover:decoration-[#7a3416]`}
            >
              Join the waitlist
            </Link>
          </div>

          <ol className="mt-10 border-t border-[#1a1612]">
            {SCOPE_LINES.map((item) => (
              <li
                key={item.code}
                className="grid grid-cols-[3.25rem_1fr] gap-3 border-b border-[#1a1612]/20 py-3 sm:grid-cols-[3.5rem_minmax(0,11rem)_1fr] sm:gap-5"
              >
                <span className={`${mono.className} pt-0.5 text-xs font-medium text-[#7a3416]`}>{item.code}</span>
                <span className={`${display.className} text-lg font-semibold leading-snug text-[#1a1612]`}>
                  {item.line}
                </span>
                <span className="col-span-2 text-sm leading-relaxed text-[#3f382f] sm:col-span-1">{item.note}</span>
              </li>
            ))}
          </ol>

          <p className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.16em] text-[#6b4a2a]`}>
            {TOTAL_STAGES} stages on the site. That is the lot.
          </p>
        </div>

        <div className="lg:col-span-5">
          <p className={`${mono.className} mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-[#6b4a2a]`}>
            Product still · room inspector
          </p>
          <div className="relative h-[28rem] overflow-hidden border border-[#1a1612] bg-[#111827] sm:h-[32rem]">
            <div className="hero-inspector-still pointer-events-none absolute -left-[8%] -top-[10%] w-[124%] origin-top-left" aria-hidden="true">
              <InspectorStill />
            </div>
          </div>
          <p className={`${mono.className} mt-2 text-[11px] leading-relaxed text-[#5c5348]`}>
            Still of the Renos inspector already on this site. No clip. Motion is a slow pan; it holds if you prefer less movement.
          </p>
        </div>
      </div>

      <div className="border-t border-[#1a1612] bg-[#e7d8b8]">
        <div className="mx-auto grid max-w-6xl md:grid-cols-2">
          <div className="border-b border-[#1a1612]/20 px-4 py-5 md:border-b-0 md:border-r md:px-6">
            <p className={`${mono.className} text-[11px] font-medium uppercase tracking-[0.2em] text-[#7a3416]`}>
              What the quote says
            </p>
          </div>
          <div className="px-4 py-5 md:px-6">
            <p className={`${mono.className} text-[11px] font-medium uppercase tracking-[0.2em] text-[#1a1612]`}>
              What you check before you sign
            </p>
          </div>
        </div>
        <ul className="mx-auto max-w-6xl border-t border-[#1a1612]/20">
          {BEFORE_AFTER.map((row) => (
            <li
              key={row.before}
              className="grid border-b border-[#1a1612]/15 last:border-b-0 md:grid-cols-2"
            >
              <p className={`${display.className} border-b border-[#1a1612]/10 px-4 py-4 text-lg font-medium italic text-[#3a332b] md:border-b-0 md:border-r md:border-[#1a1612]/15 md:px-6`}>
                {row.before}
              </p>
              <p className="px-4 py-4 text-sm leading-relaxed text-[#1a1612] md:px-6 md:text-base">
                {row.after}
              </p>
            </li>
          ))}
        </ul>
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
