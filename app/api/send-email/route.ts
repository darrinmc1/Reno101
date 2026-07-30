import { NextResponse } from "next/server"
import { Resend } from "resend"

// Graceful: if RESEND_API_KEY is not set, the route still works but logs a warning
const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

if (!resendApiKey) {
  console.warn("[send-email] RESEND_API_KEY is not set. Emails will not be sent.")
}

export async function POST(request: Request) {
  try {
    const { to, subject, html, from } = await request.json()

    if (!to || !subject || !html) {
      return NextResponse.json(
        { error: "Missing required fields: to, subject, html" },
        { status: 400 },
      )
    }

    if (!resend) {
      return NextResponse.json(
        { error: "Email service is not configured (RESEND_API_KEY missing)" },
        { status: 503 },
      )
    }

    const { data, error } = await resend.emails.send({
      from: from || "Reno101 <noreply@renos101.com>",
      to,
      subject,
      html,
    })

    if (error) {
      console.error("[send-email] Resend error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error("[send-email] Unexpected error:", err)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    )
  }
}
