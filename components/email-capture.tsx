"use client"

import { useState } from "react"

type ThemeColors = {
  primary: string
  primaryHover: string
  bg: string
  bgGradient: string
  border: string
  accent: string
  text: string
  textMuted: string
}

const themes: Record<string, ThemeColors> = {
  orange: {
    primary: "bg-orange-500",
    primaryHover: "hover:bg-orange-600",
    bg: "bg-gradient-to-br from-orange-50 to-amber-50",
    bgGradient: "bg-gradient-to-br from-orange-100 to-amber-100",
    border: "border-orange-200/60",
    accent: "text-orange-600",
    text: "text-orange-950",
    textMuted: "text-orange-900/70",
  },
  emerald: {
    primary: "bg-emerald-600",
    primaryHover: "hover:bg-emerald-700",
    bg: "bg-gradient-to-br from-emerald-50 to-teal-50",
    bgGradient: "bg-gradient-to-br from-emerald-100 to-teal-100",
    border: "border-emerald-200/60",
    accent: "text-emerald-600",
    text: "text-emerald-950",
    textMuted: "text-emerald-900/70",
  },
  blue: {
    primary: "bg-blue-600",
    primaryHover: "hover:bg-blue-700",
    bg: "bg-gradient-to-br from-blue-50 to-indigo-50",
    bgGradient: "bg-gradient-to-br from-blue-100 to-indigo-100",
    border: "border-blue-200/60",
    accent: "text-blue-600",
    text: "text-blue-950",
    textMuted: "text-blue-900/70",
  },
}

interface EmailCaptureProps {
  variant?: "inline" | "hero" | "modal"
  siteName?: string
  theme?: string
  heading?: string
  subheading?: string
  source?: string
  showName?: boolean
}

export function EmailCapture({
  variant = "inline",
  siteName = "Renovation Helper",
  theme = "orange",
  heading,
  subheading,
  source = "website",
  showName = false,
}: EmailCaptureProps) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const colors = themes[theme] || themes.orange

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name: name || undefined, source }),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus("success")
        setMessage(data.message)
        setEmail("")
        setName("")
      } else {
        setStatus("error")
        setMessage(data.error || "Something went wrong.")
      }
    } catch {
      setStatus("error")
      setMessage("Network error. Please try again.")
    }
  }

  // Success state
  if (status === "success") {
    return (
      <div
        className={`${
          variant === "hero" ? "py-12 px-8" : "py-8 px-6"
        } ${colors.bg} rounded-2xl ${colors.border} border-2 text-center`}
      >
        <div className="animate-bounce text-5xl mb-4">🔨</div>
        <h3 className={`text-2xl font-extrabold ${colors.text} mb-2`}>
          You're On the List!
        </h3>
        <p className={`${colors.textMuted} text-lg`}>{message}</p>
        <div className="mt-4 inline-flex items-center gap-2 bg-white/70 rounded-full px-4 py-2 border border-orange-300/50">
          <span className="text-sm font-semibold text-orange-900">
            Blueprint Club Member: Confirmed
          </span>
          <span>✨</span>
        </div>
      </div>
    )
  }

  // Hero variant - large, prominent
  if (variant === "hero") {
    return (
      <div className={`${colors.bg} rounded-2xl ${colors.border} border-2 p-8 md:p-12`}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm border border-orange-600/30 rounded-full px-4 py-2 mb-6">
            <span className="text-lg">🏠</span>
            <span className="text-sm font-semibold text-orange-900 tracking-wide uppercase">
              Blueprint Club
            </span>
          </div>

          <h2 className={`text-3xl md:text-4xl font-extrabold ${colors.text} mb-4`}>
            {heading || `Get Renovation Tips & Tricks`}
          </h2>
          <p className={`text-lg ${colors.textMuted} mb-8 max-w-xl mx-auto`}>
            {subheading ||
              "Join the Blueprint Club for expert guides, tool recommendations, and the kind of renovation advice that saves you money and headaches."}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            {showName && (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name (optional)"
                className="w-full px-5 py-3.5 rounded-xl border-2 border-orange-200 bg-white/80 backdrop-blur-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all text-base"
              />
            )}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                required
                className="flex-1 px-5 py-3.5 rounded-xl border-2 border-orange-200 bg-white/80 backdrop-blur-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all text-base"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className={`${colors.primary} ${colors.primaryHover} text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap`}
              >
                {status === "loading" ? (
                  <span className="inline-flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Joining...
                  </span>
                ) : (
                  "Join the Club"
                )}
              </button>
            </div>
            {status === "error" && (
              <p className="text-red-600 text-sm font-medium">{message}</p>
            )}
          </form>

          <p className="text-xs text-orange-800/50 mt-4">
            No spam, ever. Unsubscribe anytime. We respect your inbox like we respect load-bearing walls.
          </p>
        </div>
      </div>
    )
  }

  // Modal variant
  if (variant === "modal") {
    return (
      <div className={`${colors.bg} rounded-2xl ${colors.border} border-2 p-6 shadow-2xl max-w-md w-full`}>
        <div className="text-center mb-6">
          <span className="text-4xl block mb-3">🔨</span>
          <h3 className={`text-xl font-extrabold ${colors.text} mb-1`}>
            {heading || "Join the Blueprint Club"}
          </h3>
          <p className={`text-sm ${colors.textMuted}`}>
            {subheading || "Get renovation tips and early access to new tools."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {showName && (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name (optional)"
              className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 bg-white/80 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all text-sm"
            />
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 bg-white/80 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all text-sm"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className={`w-full ${colors.primary} ${colors.primaryHover} text-white font-bold py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed`}
          >
            {status === "loading" ? "Joining..." : "Claim Your Spot"}
          </button>
          {status === "error" && (
            <p className="text-red-600 text-xs font-medium text-center">{message}</p>
          )}
        </form>

        <p className="text-xs text-orange-800/50 mt-3 text-center">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    )
  }

  // Inline variant (default)
  return (
    <div className={`${colors.bg} rounded-2xl ${colors.border} border-2 p-6 md:p-8`}>
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🏠</span>
            <span className="text-xs font-bold text-orange-900 bg-orange-200/60 rounded-full px-3 py-1 uppercase tracking-wide">
              Blueprint Club
            </span>
          </div>
          <h3 className={`text-xl md:text-2xl font-extrabold ${colors.text} mb-1`}>
            {heading || "Get Renovation Tips & Tricks"}
          </h3>
          <p className={`${colors.textMuted} text-sm md:text-base`}>
            {subheading || "Join the Blueprint Club for expert guides, money-saving tips, and renovation advice delivered to your inbox."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 min-w-0 md:min-w-[360px]">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            required
            className="flex-1 min-w-0 px-4 py-3 rounded-xl border-2 border-orange-200 bg-white/80 backdrop-blur-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all text-sm"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className={`${colors.primary} ${colors.primaryHover} text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap text-sm`}
          >
            {status === "loading" ? "Joining..." : "Join Free"}
          </button>
        </form>
      </div>
      {status === "error" && (
        <p className="text-red-600 text-sm font-medium mt-3">{message}</p>
      )}
    </div>
  )
}
