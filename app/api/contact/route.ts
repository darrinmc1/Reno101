import { NextRequest, NextResponse } from "next/server"
import { relayContact } from "@/lib/hq-contact"

const SITE = "Renos101"
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => ({}))) as Record<string, unknown>
  const { name, email, message, subject, website } = body

  // Honeypot: bots fill the hidden field, humans never see it.
  if (typeof website === "string" && website) {
    return NextResponse.json({ ok: true })
  }

  if (
    typeof email !== "string" ||
    !emailRe.test(email) ||
    typeof message !== "string" ||
    message.trim().length < 3
  ) {
    return NextResponse.json(
      { error: "Please add your email and a short message." },
      { status: 400 },
    )
  }

  const topic = typeof subject === "string" && subject.trim() ? `Topic: ${subject.trim()}\n\n` : ""
  const sent = await relayContact({
    site: SITE,
    name: typeof name === "string" && name.trim() ? name : "Website visitor",
    email,
    message: topic + message,
  })

  if (!sent) {
    return NextResponse.json(
      { error: "We couldn't send your message just now. Please try again." },
      { status: 502 },
    )
  }
  return NextResponse.json({ ok: true })
}
