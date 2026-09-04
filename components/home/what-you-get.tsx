"use client"

import Link from "next/link"
import { Reveal } from "@/components/home/reveal"
import { TOTAL_STAGES } from "@/lib/stages"

const CARDS = [
  {
    kicker: "01",
    title: "How you read the quote before you sign.",
    body: "Subject to site inspection means they priced a house they have not crawled under. TBA is not a figure. The free Planning lesson is where that translation starts.",
    href: "/stages/planning",
    cta: "Start free lesson",
  },
  {
    kicker: "02",
    title: `${TOTAL_STAGES} written stages. That is the lot.`,
    body: "Ideas through punch list and the party. Each card is a guide with steps, materials, and whether this is a Sunday job or a licensed-tradie job.",
    href: "#stages",
    cta: "Browse topics",
  },
  {
    kicker: "03",
    title: "Free first. Waitlist for the packs.",
    body: "No fake checkout on this page. Start the lesson. Join the list if you want the paid packs when they are actually buyable.",
    href: "#subscribe",
    cta: "Join the waitlist",
  },
] as const

export function WhatYouGet() {
  return (
    <section className="border-b border-slate-800 bg-gradient-to-b from-stone-950 via-slate-950 to-stone-950 text-white">
      <div className="container px-4 py-16 md:px-6 md:py-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">What you get</p>
          <h2 className="mt-2 max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            A renovation course, not a slogan stack.
          </h2>
        </Reveal>
      </div>

      <div className="stack-pin pb-8 md:pb-16">
        {CARDS.map((card, index) => (
          <div key={card.kicker} className="stack-slot">
            <article
              className="stack-card mx-auto w-full max-w-3xl px-4 md:px-6"
              style={{ top: `calc(5.5rem + ${index * 0.75}rem)`, zIndex: index + 1 }}
            >
              <div className="rounded-2xl border border-slate-800 bg-slate-900/95 p-6 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.65)] md:p-8">
                <p className="text-xs font-semibold tabular-nums text-amber-300">{card.kicker}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">{card.title}</h3>
                <p className="mt-3 max-w-prose text-sm leading-relaxed text-slate-400 md:text-base">
                  {card.body}
                </p>
                <Link
                  href={card.href}
                  className="mt-5 inline-flex text-sm font-semibold text-amber-300 hover:text-amber-200"
                >
                  {card.cta}
                </Link>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}
