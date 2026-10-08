// Contact-form relay. Messages are forwarded to the HQ contact endpoint
// (hq.peelboss.com/api/send-email), which emails them to the owner's inbox
// with Reply-To set to the visitor. The recipient is fixed on the HQ side,
// so this cannot be used to send mail anywhere else.
const HQ_CONTACT_URL =
  process.env.HQ_CONTACT_URL || "https://hq.peelboss.com/api/send-email"

export async function relayContact(input: {
  site: string
  name: string
  email: string
  message: string
}): Promise<boolean> {
  const name = `${input.name.trim().slice(0, 60)} (${input.site})`
  const message = `[${input.site} contact form]\n\n${input.message.trim()}`.slice(0, 5000)
  try {
    const res = await fetch(HQ_CONTACT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email: input.email.trim(), message }),
      signal: AbortSignal.timeout(10000),
      cache: "no-store",
    })
    if (!res.ok) console.error("[hq-contact] relay failed", res.status)
    return res.ok
  } catch (err) {
    console.error("[hq-contact] relay error", err)
    return false
  }
}
