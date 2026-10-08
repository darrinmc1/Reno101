import { NextResponse } from "next/server"
import { Resend } from "resend"
import { saveToHq } from "@/lib/hq-subscribe"

const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

if (!resendApiKey) {
  console.warn("[subscribe] RESEND_API_KEY is not set. Subscriptions will not send confirmation emails.")
}

const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID

export async function POST(request: Request) {
  try {
    const { email, firstName, lastName, source } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 },
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      )
    }

    // Always copy the signup to the shared HQ subscribers list.
    const hqSaved = await saveToHq("renos101", email, typeof source === "string" ? source : "website")

    // If Resend is configured, also add to the Resend audience
    let audienceSaved = false
    if (resend && AUDIENCE_ID) {
      const { error } = await resend.contacts.create({
        email,
        firstName: firstName || "",
        lastName: lastName || "",
        audienceId: AUDIENCE_ID,
      })

      if (error) {
        console.error("[subscribe] Resend contact error:", error)
      } else {
        audienceSaved = true
      }
    }

    // Never tell the visitor they're subscribed if the email wasn't stored anywhere.
    if (!hqSaved && !audienceSaved) {
      return NextResponse.json(
        { error: "We couldn't save your email just now. Please try again." },
        { status: 502 },
      )
    }

    // Send confirmation email if Resend is configured
    if (resend) {
      const { error: emailError } = await resend.emails.send({
        from: "Reno101 <noreply@renos101.com>",
        to: email,
        subject: "Welcome to Reno101!",
        html: `
          <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto;">
            <h1 style="color: #1a1a2e;">Welcome to Reno101</h1>
            <p>Thanks for subscribing${firstName ? `, ${firstName}` : ""}!</p>
            <p>You'll receive renovation tips, guides, and tools straight to your inbox.</p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
            <p style="color: #64748b; font-size: 12px;">
              Reno101 &middot; renos101.com<br/>
              <a href="*|UNSUB|*" style="color: #64748b;">Unsubscribe</a>
            </p>
          </div>
        `,
      })

      if (emailError) {
        console.error("[subscribe] Confirmation email error:", emailError)
        // Don't fail the request — the contact was saved
      }
    }

    return NextResponse.json({ success: true, message: "Successfully subscribed!" })
  } catch (err) {
    console.error("[subscribe] Unexpected error:", err)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    )
  }
}
