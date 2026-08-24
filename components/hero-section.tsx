"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Sparkles,
  Hammer,
  Lightbulb,
  CheckCircle2,
  AlertTriangle,
  Ruler,
  Calculator,
  ShieldAlert,
  Wrench,
  Layers,
  Home as HomeIcon,
  DollarSign,
  Clock,
  Compass,
  FileText,
  CheckSquare,
  PartyPopper,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Interactive presets for room cost & risk navigator
const ROOM_PRESETS = [
  {
    id: "kitchen",
    label: "Kitchen",
    emoji: "🍳",
    tagline: "The highest value & highest stress room",
    costAud: "$12,000 – $28,000",
    time: "3 – 6 weeks",
    diyFriendly: "Medium (Cabinets OK, Gas/Plumbing NO)",
    topMistake: "Buying appliances last after cabinets are ordered",
    keyStage: "Stage 03 & 13",
    stageName: "Quotes & Cabinetry",
    accent: "from-amber-500/10 to-orange-500/10 border-amber-300",
    highlightColor: "text-amber-600 bg-amber-100",
  },
  {
    id: "bathroom",
    label: "Bathroom",
    emoji: "🛁",
    tagline: "Small room, huge trade density & splash risk",
    costAud: "$10,000 – $22,000",
    time: "2 – 4 weeks",
    diyFriendly: "Low (Waterproofing is 100% Licensed)",
    topMistake: "Moving soil pipes & drains without checking subfloor access",
    keyStage: "Stage 09 & 12",
    stageName: "Plumbing & Tiling",
    accent: "from-sky-500/10 to-blue-500/10 border-sky-300",
    highlightColor: "text-sky-600 bg-sky-100",
  },
  {
    id: "whole-house",
    label: "Whole House",
    emoji: "🏡",
    tagline: "Full scope, sequencing is everything",
    costAud: "$45,000 – $120,000+",
    time: "8 – 16 weeks",
    diyFriendly: "Phased (Project Management is DIY)",
    topMistake: "Living inside the build without a dust & coffee strategy",
    keyStage: "Stage 02 & 07",
    stageName: "Budgeting & Framing",
    accent: "from-emerald-500/10 to-teal-500/10 border-emerald-300",
    highlightColor: "text-emerald-600 bg-emerald-100",
  },
  {
    id: "outdoor",
    label: "Deck & Yard",
    emoji: "🪴",
    tagline: "High impact, high DIY satisfaction",
    costAud: "$6,000 – $18,000",
    time: "1 – 3 weeks",
    diyFriendly: "High 🟢 (Ideal weekend DIY candidate)",
    topMistake: "Forgetting council boundary setbacks and footing depths",
    keyStage: "Stage 05 & 07",
    stageName: "Permits & Structure",
    accent: "from-stone-500/10 to-amber-500/10 border-stone-300",
    highlightColor: "text-stone-700 bg-stone-100",
  },
]

export default function HeroSection() {
  const [activeRoom, setActiveRoom] = useState(ROOM_PRESETS[0])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-slate-900 to-stone-950 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/images/hero-renos101.jpg')] bg-cover bg-center opacity-25" aria-hidden="true" />
      {/* Background Architectural Blueprint Grid Lines */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Warm Ambient Glow Effects */}
      <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-amber-500/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-orange-600/15 blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          
          {/* Left Column: Hero Content & Value Prop */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300 shadow-inner">
              <Hammer className="h-3.5 w-3.5 text-amber-400" />
              <span>Home Renovation Guides &amp; Cost Tools</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]">
              Don&apos;t wing your <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">
                renovation.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl text-base text-slate-300 sm:text-lg md:text-xl leading-relaxed">
              Step-by-step checklists, trade-inspected budget templates, and real AUD cost guides for every phase — so you never cut a load-bearing wall or panic over grout colors at 11 PM.
            </p>

            {/* Action Buttons — email capture first for cold traffic; stages secondary */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button asChild size="lg" className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-bold hover:from-amber-400 hover:to-orange-500 shadow-lg shadow-amber-500/20 px-7 py-6 text-base">
                <Link href="#subscribe">
                  Get the free Starter Pack
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="rounded-xl border-slate-700 bg-slate-800/80 text-slate-200 hover:bg-slate-700 hover:text-white px-6 py-6 text-base">
                <Link href="#stages">
                  Explore 16 Stages
                </Link>
              </Button>
            </div>

            {/* Micro Trust Signals */}
            <div className="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-4 text-xs font-medium text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                <span>100% Free Guides</span>
              </div>
              <div className="flex items-center gap-2">
                <Calculator className="h-4 w-4 text-amber-400 shrink-0" />
                <span>AUD Cost Estimates</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldAlert className="h-4 w-4 text-amber-400 shrink-0" />
                <span>DIY Risk Ratings</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-amber-400 shrink-0" />
                <span>Printable Checklists</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Renovation Cost & Risk Navigator */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-amber-500/30 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-md">
              
              {/* Header inside card */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <Ruler className="h-5 w-5 text-amber-400" />
                  <span className="font-bold text-sm text-slate-200 uppercase tracking-wider">
                    Interactive Reno Inspector
                  </span>
                </div>
                <span className="text-xs font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-500/20">
                  Select Room:
                </span>
              </div>

              {/* Room Selector Pills */}
              <div className="grid grid-cols-4 gap-2 py-4">
                {ROOM_PRESETS.map((room) => {
                  const isSelected = activeRoom.id === room.id
                  return (
                    <button
                      key={room.id}
                      onClick={() => setActiveRoom(room)}
                      className={`flex flex-col items-center justify-center rounded-xl p-2.5 text-xs font-medium transition-all ${
                        isSelected
                          ? "bg-amber-500 text-slate-950 font-bold shadow-md scale-[1.02]"
                          : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white"
                      }`}
                    >
                      <span className="text-lg">{room.emoji}</span>
                      <span className="mt-1">{room.label}</span>
                    </button>
                  )
                })}
              </div>

              {/* Active Room Detail Panel */}
              <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-extrabold text-lg text-white flex items-center gap-2">
                      <span>{activeRoom.emoji}</span>
                      <span>{activeRoom.label} Renovation</span>
                    </h3>
                    <span className="text-xs text-amber-400 font-semibold">{activeRoom.keyStage}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">{activeRoom.tagline}</p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-xl bg-slate-900/80 p-3 border border-slate-800">
                    <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                      <DollarSign className="h-3.5 w-3.5 text-amber-400" />
                      <span>Estimated Cost</span>
                    </div>
                    <span className="font-bold text-sm text-slate-100">{activeRoom.costAud}</span>
                  </div>

                  <div className="rounded-xl bg-slate-900/80 p-3 border border-slate-800">
                    <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                      <Clock className="h-3.5 w-3.5 text-amber-400" />
                      <span>Typical Time</span>
                    </div>
                    <span className="font-bold text-sm text-slate-100">{activeRoom.time}</span>
                  </div>
                </div>

                {/* Risk Warning Box */}
                <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3.5 text-xs text-amber-200">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-amber-300 block mb-0.5">Top Pitfall to Avoid:</span>
                      <span>{activeRoom.topMistake}</span>
                    </div>
                  </div>
                </div>

                {/* Action Link inside Card */}
                <div className="pt-1 flex items-center justify-between text-xs border-t border-slate-800">
                  <span className="text-slate-400">DIY Suitability: <strong className="text-slate-200">{activeRoom.diyFriendly}</strong></span>
                  <Link href="#stages" className="font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1">
                    See Guide →
                  </Link>
                </div>

              </div>

              {/* Bottom Card Footer */}
              <div className="mt-4 flex items-center justify-between text-xs text-slate-400 px-1">
                <span>⚡ 16 Stages Covered</span>
                <span>📋 Free Checklists Included</span>
              </div>

            </div>
          </div>

        </div>

        {/* Quick Stage Bar below Hero */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs">
            <span className="font-semibold text-slate-300 flex items-center gap-2">
              <Compass className="h-4 w-4 text-amber-400" />
              <span>Or jump directly to a build stage:</span>
            </span>
            <div className="flex flex-wrap gap-2">
              <Link href="/stages/ideas" className="rounded-lg bg-slate-800 px-3 py-1.5 text-slate-300 hover:bg-amber-500 hover:text-slate-950 transition-colors">
                💡 01. Ideas
              </Link>
              <Link href="/stages/planning" className="rounded-lg bg-slate-800 px-3 py-1.5 text-slate-300 hover:bg-amber-500 hover:text-slate-950 transition-colors">
                📐 02. Planning
              </Link>
              <Link href="/stages/demolition" className="rounded-lg bg-slate-800 px-3 py-1.5 text-slate-300 hover:bg-amber-500 hover:text-slate-950 transition-colors">
                🔨 03. Demo
              </Link>
              <Link href="/stages/rough-in" className="rounded-lg bg-slate-800 px-3 py-1.5 text-slate-300 hover:bg-amber-500 hover:text-slate-950 transition-colors">
                🔌 07. Rough-In
              </Link>
              <Link href="/stages/cabinets-fixtures" className="rounded-lg bg-slate-800 px-3 py-1.5 text-slate-300 hover:bg-amber-500 hover:text-slate-950 transition-colors">
                🗄️ 12. Cabinets
              </Link>
              <Link href="#stages" className="rounded-lg bg-amber-500/20 text-amber-300 px-3 py-1.5 font-bold hover:bg-amber-500 hover:text-slate-950 transition-colors">
                All 16 →
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
