"use client"

import { useState, useCallback, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileText,
  Loader2,
  Lock,
  Sparkles,
  Star,
} from "lucide-react"

/* ------------------------------------------------------------------ */
/*  Types                                                             */
/* ------------------------------------------------------------------ */

export interface ToolConfig {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  questions: Question[]
}

export interface Question {
  id: string
  label: string
  placeholder: string
  type: "text" | "textarea"
  required?: boolean
}

/* ------------------------------------------------------------------ */
/*  Free-trial helpers                                                */
/* ------------------------------------------------------------------ */

const STORAGE_KEY = "renos101_free_uses"
const MAX_FREE = 1

function getFreeUsesLeft(): number {
  if (typeof window === "undefined") return 0
  const raw = localStorage.getItem(STORAGE_KEY)
  const used = raw ? Number.parseInt(raw, 10) : 0
  return Math.max(0, MAX_FREE - used)
}

function markFreeUse(): void {
  if (typeof window === "undefined") return
  const raw = localStorage.getItem(STORAGE_KEY)
  const used = raw ? Number.parseInt(raw, 10) : 0
  localStorage.setItem(STORAGE_KEY, String(used + 1))
}

/* ------------------------------------------------------------------ */
/*  SubscribeWall                                                     */
/* ------------------------------------------------------------------ */

function SubscribeWall({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex min-h-[400px] items-center justify-center p-6">
      <Card className="mx-auto max-w-lg border-primary/20 shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Lock className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl tabular-nums">enable unlimited AI renovation tools</CardTitle>
          <CardDescription className="mt-2 text-base">
            Get AI-powered renovation briefs, material estimates, and design briefs -
            generated in seconds.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-xl border border-primary/10 bg-primary/[0.03] p-4">
            <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
              <Star className="h-4 w-4 text-amber-500" />
              Free tier
            </h4>
            <p className="text-sm text-muted-foreground">
              One free generation with Gemini Flash - try it out before you commit.
            </p>
          </div>
          <div className="rounded-xl border border-primary/10 bg-primary/[0.03] p-4">
            <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
              <Sparkles className="h-4 w-4 text-primary" />
              Pro subscription
            </h4>
            <p className="text-sm text-muted-foreground">
              Unlocks advanced AI models for detailed material estimates and design briefs
              - unlimited generations.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-3">
          <Button asChild className="w-full" size="lg">
            <Link href="/pricing">
              View Pro Plans
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to tools
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Result display (basic markdown render)                            */
/* ------------------------------------------------------------------ */

function MarkdownContent({ content }: { content: string }) {
  // Simple markdown-like rendering: split by double newlines for paragraphs,
  // handle headings, bold, lists.
  const lines = content.split("\n")
  const elements: React.ReactNode[] = []
  let inList = false
  let listItems: React.ReactNode[] = []

  function flushList() {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="my-3 list-disc space-y-1 pl-6">
          {listItems}
        </ul>,
      )
      listItems = []
      inList = false
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const trimmed = line.trim()

    if (!trimmed) {
      flushList()
      continue
    }

    // Heading
    if (trimmed.startsWith("### ")) {
      flushList()
      elements.push(
        <h3 key={`h3-${i}`} className="mb-2 mt-5 text-lg font-semibold tabular-nums">
          {trimmed.slice(4)}
        </h3>,
      )
    } else if (trimmed.startsWith("## ")) {
      flushList()
      elements.push(
        <h2 key={`h2-${i}`} className="mb-2 mt-6 text-xl font-bold tabular-nums">
          {trimmed.slice(3)}
        </h2>,
      )
    } else if (trimmed.startsWith("# ")) {
      flushList()
      elements.push(
        <h1 key={`h1-${i}`} className="mb-3 mt-6 text-2xl font-bold tabular-nums">
          {trimmed.slice(2)}
        </h1>,
      )
    }
    // List item
    else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      inList = true
      const text = trimmed.slice(2)
      listItems.push(
        <li key={`li-${i}`} className="text-sm leading-relaxed">
          {renderInline(text)}
        </li>,
      )
    }
    // Numbered list
    else if (/^\d+\.\s/.test(trimmed)) {
      inList = true
      const text = trimmed.replace(/^\d+\.\s/, "")
      listItems.push(
        <li key={`li-${i}`} className="text-sm leading-relaxed">
          {renderInline(text)}
        </li>,
      )
    }
    // Table row
    else if (trimmed.startsWith("|")) {
      flushList()
      // Simple table rendering
      const cells = trimmed
        .split("|")
        .filter(Boolean)
        .map((c) => c.trim())
      // Skip separator rows
      if (cells.some((c) => c.includes("---"))) continue
      if (cells.length > 0) {
        const isHeader =
          i > 0 && i < lines.length - 1 && lines[i + 1]?.includes("---")
        elements.push(
          <div
            key={`table-${i}`}
            className={`flex gap-2 border-b px-2 py-1.5 text-sm ${isHeader ? "font-semibold" : ""}`}
          >
            {cells.map((cell, ci) => (
              <span key={ci} className="flex-1">
                {cell}
              </span>
            ))}
          </div>,
        )
      }
    }
    // Regular paragraph
    else {
      flushList()
      elements.push(
        <p key={`p-${i}`} className="mb-2 text-sm leading-relaxed">
          {renderInline(trimmed)}
        </p>,
      )
    }
  }
  flushList()

  return <div className="prose prose-sm max-w-none">{elements}</div>
}

function renderInline(text: string): React.ReactNode {
  // Bold: **text**
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return part
  })
}

/* ------------------------------------------------------------------ */
/*  Main RenoWizard                                                   */
/* ------------------------------------------------------------------ */

interface RenoWizardProps {
  tool: ToolConfig
}

export function RenoWizard({ tool }: RenoWizardProps) {
  const [step, setStep] = useState<"intro" | "questions" | "generating" | "result" | "wall">(
    "intro",
  )
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [result, setResult] = useState<string>("")
  const [error, setError] = useState<string>("")
  const [freeLeft, setFreeLeft] = useState(0)

  useEffect(() => {
    setFreeLeft(getFreeUsesLeft())
  }, [])

  const setAnswer = useCallback((id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }))
  }, [])

  const handleStart = useCallback(() => {
    const remaining = getFreeUsesLeft()
    setFreeLeft(remaining)
    if (remaining <= 0) {
      setStep("wall")
    } else {
      setStep("questions")
    }
  }, [])

  const handleBack = useCallback(() => {
    setStep("intro")
    setAnswers({})
    setResult("")
    setError("")
  }, [])

  const handleBackFromWall = useCallback(() => {
    setStep("intro")
  }, [])

  const handleGenerate = useCallback(async () => {
    const remaining = getFreeUsesLeft()
    setFreeLeft(remaining)
    if (remaining <= 0) {
      setStep("wall")
      return
    }

    setStep("generating")
    setError("")

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tool: tool.id, answers }),
      })

      if (!res.ok) {
        const errData = await res.json().catch(() => ({ error: "Request failed" }))
        throw new Error(errData.error || `HTTP ${res.status}`)
      }

      const data = await res.json()
      markFreeUse()
      setFreeLeft(getFreeUsesLeft())
      setResult(data.content)
      setStep("result")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
      setStep("questions")
    }
  }, [tool.id, answers])

  const allAnswered =
    tool.questions.length === 0 ||
    tool.questions.every(
      (q) => !q.required || (answers[q.id] && answers[q.id].trim().length > 0),
    )

  // --- Subscribe wall ---
  if (step === "wall") {
    return <SubscribeWall onBack={handleBackFromWall} />
  }

  // --- Intro ---
  if (step === "intro") {
    return (
      <Card className="mx-auto max-w-2xl border-primary/15 shadow-sm">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            {tool.icon}
          </div>
          <CardTitle className="text-2xl tabular-nums">{tool.title}</CardTitle>
          <CardDescription className="mt-2 text-base">{tool.description}</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          {freeLeft > 0 ? (
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
              <Sparkles className="h-4 w-4" />
              {freeLeft} free generation{freeLeft !== 1 ? "s" : ""} remaining
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">
              <Lock className="h-4 w-4" />
              Free trial used - upgrade for unlimited access
            </div>
          )}
        </CardContent>
        <CardFooter className="justify-center gap-3">
          <Button asChild variant="outline">
            <Link href="/tools">
              <ArrowLeft className="mr-2 h-4 w-4" />
              All Tools
            </Link>
          </Button>
          <Button onClick={handleStart} size="lg">
            {freeLeft > 0 ? "Get Started" : "Upgrade to Continue"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    )
  }

  // --- Questions ---
  if (step === "questions") {
    return (
      <Card className="mx-auto max-w-2xl border-primary/15 shadow-sm">
        <CardHeader>
          <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
            <FileText className="h-4 w-4" />
            Answer a few questions to generate your {tool.title.toLowerCase()}
          </div>
          <CardTitle>Tell us about your project</CardTitle>
          <CardDescription>
            Fill in the details below. The AI will generate a tailored document based on your
            responses.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          {tool.questions.map((q) => (
            <div key={q.id} className="space-y-2">
              <Label htmlFor={q.id}>
                {q.label}
                {q.required && <span className="ml-1 text-destructive">*</span>}
              </Label>
              {q.type === "textarea" ? (
                <Textarea
                  id={q.id}
                  placeholder={q.placeholder}
                  value={answers[q.id] ?? ""}
                  onChange={(e) => setAnswer(q.id, e.target.value)}
                  className="min-h-[80px] resize-y"
                />
              ) : (
                <Input
                  id={q.id}
                  type="text"
                  placeholder={q.placeholder}
                  value={answers[q.id] ?? ""}
                  onChange={(e) => setAnswer(q.id, e.target.value)}
                />
              )}
            </div>
          ))}

          {error && (
            <div className="rounded-lg border border-destructive/20 bg-destructive/10 p-3 text-sm text-destructive">
              {error}
            </div>
          )}
        </CardContent>
        <CardFooter className="justify-between gap-3">
          <Button variant="ghost" onClick={handleBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Cancel
          </Button>
          <div className="flex items-center gap-3">
            {freeLeft > 0 && (
              <span className="text-xs text-muted-foreground">
                {freeLeft} free use{freeLeft !== 1 ? "s" : ""} left
              </span>
            )}
            <Button onClick={handleGenerate} disabled={!allAnswered}>
              Generate
              <Sparkles className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    )
  }

  // --- Generating ---
  if (step === "generating") {
    return (
      <Card className="mx-auto max-w-2xl border-primary/15 shadow-sm">
        <CardContent className="flex flex-col items-center justify-center py-16">
          <Loader2 className="mb-4 h-10 w-10 animate-spin text-primary" />
          <p className="text-lg font-medium tabular-nums">Generating your document…</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Using Gemini Flash AI - this should only take a moment.
          </p>
        </CardContent>
      </Card>
    )
  }

  // --- Result ---
  return (
    <Card className="mx-auto max-w-3xl border-primary/15 shadow-sm">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="mb-1 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Generated
            </div>
            <CardTitle className="mt-2 text-2xl tabular-nums">Your {tool.title}</CardTitle>
            <CardDescription>
              Generated with Gemini Flash AI. Review and share with your team or contractor.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <MarkdownContent content={result} />
        </div>

        {freeLeft <= 0 && (
          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <div className="flex items-start gap-3">
              <Lock className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
              <div>
                <p className="font-medium text-amber-900">Free trial used up</p>
                <p className="mt-1 text-sm text-amber-700">
                  Upgrade to Pro for unlimited AI-powered renovation documents with advanced
                  models.
                </p>
                <Button asChild variant="outline" size="sm" className="mt-3 rounded-full">
                  <Link href="/pricing">
                    View Plans
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="justify-between gap-3">
        <Button variant="ghost" onClick={handleBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Start Over
        </Button>
        <Button onClick={handleStart}>
          Generate Another
          <Sparkles className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
