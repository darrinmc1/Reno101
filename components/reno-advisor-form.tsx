"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, BookOpen, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ADVISOR_MAX_QUESTION, type AdvisorResult } from "@/lib/reno-advisor"

const EXAMPLES = [
  "Do I need a permit to move a kitchen wall?",
  "Can I DIY bathroom waterproofing?",
  "How many quotes should I get before locking a tradie?",
]

export function RenoAdvisorForm() {
  const [question, setQuestion] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle")
  const [error, setError] = useState("")
  const [result, setResult] = useState<AdvisorResult | null>(null)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setStatus("loading")
    setError("")
    setResult(null)

    try {
      const res = await fetch("/api/reno-advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      })
      const data = await res.json()
      if (!res.ok) {
        setStatus("error")
        setError(typeof data.error === "string" ? data.error : "Lookup failed.")
        return
      }
      setResult(data as AdvisorResult)
      setStatus("idle")
    } catch {
      setStatus("error")
      setError("Could not reach the advisor. Try again.")
    }
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="reno-question" className="block text-sm font-semibold">
          Your renovation question
        </label>
        <Textarea
          id="reno-question"
          name="question"
          required
          maxLength={ADVISOR_MAX_QUESTION}
          rows={5}
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="e.g. Do I need a licensed electrician before I move kitchen lights?"
          className="rounded-xl"
        />
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            One question. Answers are quoted from the 16-stage guides — not a chatbot, not unlimited AI.
          </p>
          <Button type="submit" disabled={status === "loading"} className="rounded-xl">
            {status === "loading" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Looking up guides
              </>
            ) : (
              "Get cited advice"
            )}
          </Button>
        </div>
      </form>

      <div className="flex flex-wrap gap-2">
        {EXAMPLES.map((example) => (
          <button
            key={example}
            type="button"
            className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
            onClick={() => setQuestion(example)}
          >
            {example}
          </button>
        ))}
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      {result && (
        <div className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <p className="text-sm leading-relaxed text-foreground">{result.summary}</p>
          {result.citations.length > 0 && (
            <ul className="space-y-3">
              {result.citations.map((citation) => (
                <li
                  key={`${citation.source}-${citation.title}-${citation.excerpt}`}
                  className="rounded-xl border border-border/70 bg-background/60 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        {citation.location}
                      </div>
                      <div className="mt-1 font-semibold">{citation.title}</div>
                    </div>
                    <BookOpen className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{citation.excerpt}</p>
                  {citation.href && (
                    <Button asChild variant="link" className="mt-1 h-auto px-0 text-primary">
                      <Link href={citation.href}>
                        Open this stage
                        <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
