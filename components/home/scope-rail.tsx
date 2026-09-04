"use client"

import Link from "next/link"
import { Reveal } from "@/components/home/reveal"

const CHIPS = [
  { label: "Ideas", href: "/stages/ideas" },
  { label: "Planning", href: "/stages/planning" },
  { label: "Punch list", href: "/stages/punch-list" },
] as const

const SCOPE_LINES = [
  {
    code: "01",
    line: "Provisional sums",
    note: "TBA is not a figure. It is a shrug in a company shirt.",
    href: "/stages/planning",
  },
  {
    code: "02",
    line: "Exclusions",
    note: "The dear part is usually what they left off the page.",
    href: "/stages/planning",
  },
  {
    code: "03",
    line: "Prime cost items",
    note: "They priced a tap you will never pick. The swap is on you.",
    href: "/stages/cabinets-fixtures",
  },
  {
    code: "04",
    line: "Variations",
    note: "Who writes them, who signs, and when they are supposed to stop.",
    href: "/stages/planning",
  },
  {
    code: "05",
    line: "Sequence",
    note: "Waterproofing after tiling is how bathrooms get built twice.",
    href: "/stages/planning",
  },
  {
    code: "06",
    line: "Allow for existing",
    note: "They have not opened a wall. The wall will have opinions.",
    href: "/stages/demolition",
  },
] as const

export function ScopeRail() {
  return (
    <section className="border-y border-slate-800 bg-stone-950 py-16 text-white md:py-20">
      <div className="container px-4 md:px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">
            The lines that do the damage
          </p>
          <h2 className="mt-2 max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            The quote is a scope list. Treat it like one.
          </h2>
          <p className="mt-3 max-w-xl text-slate-400">
            Provisional sums, exclusions, PC items, variations. Not a pep talk.
            Open a written stage and learn which bits of the paper are real.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {CHIPS.map((chip, i) => (
            <Reveal key={chip.label} className={`stagger-${i + 1}`}>
              <Link
                href={chip.href}
                className="inline-flex rounded-full border border-slate-700 bg-slate-900/80 px-4 py-1.5 text-sm text-slate-200 transition-colors hover:border-amber-500/50 hover:bg-slate-800 hover:text-white"
              >
                {chip.label}
              </Link>
            </Reveal>
          ))}
        </div>

        <ol className="mt-8 grid gap-3 sm:grid-cols-2">
          {SCOPE_LINES.map((item, i) => (
            <li key={item.code}>
              <Reveal className={`stagger-${Math.min(i + 1, 5)}`}>
                <Link
                  href={item.href}
                  className="block rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition-colors hover:border-amber-500/40 hover:bg-slate-900"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                    {item.code} · {item.line}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.note}</p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
