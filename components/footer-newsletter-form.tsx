"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function FooterNewsletterForm({ source = "footer" }: { source?: string }) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      })
      setStatus(res.ok ? "success" : "error")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return <p className="mt-4 text-sm font-medium text-green-700">You&apos;re on the list. Thanks!</p>
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-3">
      <Input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        aria-label="Your email"
        className="rounded-2xl border-white/70 bg-white/85"
      />
      <Button type="submit" disabled={status === "loading"} className="w-full rounded-full">
        {status === "loading" ? "Joining..." : "Join The List"}
      </Button>
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}
