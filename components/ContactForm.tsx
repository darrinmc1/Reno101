"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

/** Public contact webhook. Override with NEXT_PUBLIC_SITE_CONTACT_WEBHOOK if the URL changes. */
export const SITE_CONTACT_WEBHOOK =
  process.env.NEXT_PUBLIC_SITE_CONTACT_WEBHOOK ||
  "https://n8n.peelboss.com/webhook/site-contact"

const SITE = "renos101"

type Status = "idle" | "sending" | "sent" | "error"

const fieldClass =
  "mt-1 block w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"

export function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [website, setWebsite] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError("")

    const trimmedMessage = message.trim()
    const trimmedEmail = email.trim()
    if (!trimmedMessage) {
      setStatus("error")
      setError("Message is required.")
      return
    }
    if (trimmedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setStatus("error")
      setError("That email doesn't look right.")
      return
    }

    setStatus("sending")
    try {
      const res = await fetch(SITE_CONTACT_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: SITE,
          name: name.trim(),
          email: trimmedEmail,
          message: trimmedMessage,
          website,
        }),
      })
      const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null
      if (res.ok && data?.ok === true) {
        setStatus("sent")
        setName("")
        setEmail("")
        setMessage("")
        setWebsite("")
        return
      }
      if (data && data.ok === false && typeof data.error === "string" && data.error.trim()) {
        setStatus("error")
        setError(data.error)
        return
      }
      setStatus("error")
      setError("That didn't send. Try again in a minute.")
    } catch {
      setStatus("error")
      setError("That didn't send. Try again in a minute.")
    }
  }

  return (
    <form className="relative mt-8 space-y-6" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldClass}
            placeholder="Your name"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={fieldClass}
            placeholder="Your email"
            autoComplete="email"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={fieldClass}
          placeholder="Tell us about the renovation, the quote, or the wall you are not sure about."
        />
      </div>
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}
      >
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
      {status === "sent" && (
        <p role="status" className="text-sm font-medium text-green-700">
          Thanks. We have your message.
        </p>
      )}
      {status === "error" && error && (
        <p role="alert" className="text-sm font-medium text-red-600">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-amber-700 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send message"}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  )
}
