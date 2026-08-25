"use client"

import { useState } from "react"
import { HardHat, RefreshCw } from "lucide-react"

const RENO_WISDOM_QUIPS = [
  "A '2-week timeline' is just a 6-week timeline that hasn't met the plumber yet.",
  "Budget rule #1: If you don't budget for surprises behind the drywall, the drywall will budget them for you.",
  "The phrase 'we'll just move this wall six inches' has caused more arguments than fantasy sports.",
  "Paint chips in Bunnings: 47 shades of 'warm oatmeal'. Paint on your wall at 4 PM: a cave with opinions.",
  "A 'quick weekend project' takes 3 weekends, 4 hardware store trips, and an emergency sausage roll.",
  "Waterproofing is not an artistic expression. Please do not wing it.",
  "Buying the fridge last is how people discover their dream appliance has the dimensions of a hatchback.",
  "The quote said 'subject to site inspection'. That phrase is doing an incredible amount of heavy lifting.",
  "You will buy a digital angle finder. You will use it twice. You will then use a piece of cardboard.",
  "Removing the kitchen sink turns civilized adults into Victorian ghosts by day three of instant coffee.",
  "A load-bearing wall does not care about your open-plan Pinterest board.",
  "There are two types of tile cuts: straight cuts, and 'we'll cover that edge with silicone and pretend it never happened'.",
  "If the previous owner did DIY electrical, consider every light switch a game of Russian roulette.",
  "Grout color selection is the ultimate test of human resilience. Choose wisely.",
]

export function RenoWisdom({ className = "" }: { className?: string }) {
  const [quip, setQuip] = useState(
    RENO_WISDOM_QUIPS[Math.floor(Math.random() * RENO_WISDOM_QUIPS.length)]
  )

  const refresh = () => {
    const remaining = RENO_WISDOM_QUIPS.filter((q) => q !== quip)
    setQuip(remaining[Math.floor(Math.random() * remaining.length)])
  }

  return (
    <div className={`rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 shadow-sm backdrop-blur ${className}`}>
      <div className="flex items-start gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
          <HardHat className="h-4 w-4" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
            Reno Reality Check
          </p>
          <p className="mt-1 text-xs sm:text-sm text-slate-200 leading-relaxed italic">
            &ldquo;{quip}&rdquo;
          </p>
        </div>
        <button
          onClick={refresh}
          className="shrink-0 rounded-lg p-1.5 text-slate-400 hover:bg-amber-500/20 hover:text-amber-300 transition-colors"
          title="Another quip"
          aria-label="Get another renovation wisdom quote"
        >
          <RefreshCw className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
