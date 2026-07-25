// app/api/generate/route.ts — Gemini-powered AI document generation
// Uses Google Gemini Flash model via REST API. Requires GOOGLE_API_KEY env var.

import { NextRequest, NextResponse } from "next/server"

const GEMINI_API_KEY = process.env.GOOGLE_API_KEY
const N8N_WEBHOOK = process.env.N8N_AI_WEBHOOK_URL
const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"

export async function POST(req: NextRequest) {
  if (!GEMINI_API_KEY) {
    return NextResponse.json(
      { error: "Server not configured: missing GOOGLE_API_KEY" },
      { status: 500 },
    )
  }

  const body = await req.json().catch(() => ({}))
  const { tool, answers } = body as {
    tool?: string
    answers?: Record<string, string>
  }

  if (!tool || !answers) {
    return NextResponse.json(
      { error: "Missing required fields: tool and answers" },
      { status: 400 },
    )
  }

  const systemPrompt = buildSystemPrompt(tool)
  const userPrompt = buildUserPrompt(tool, answers)

  try {
    // Route through n8n AI gateway if configured
    if (N8N_WEBHOOK) {
      const res = await fetch(N8N_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: 'free',
          docName: doc?.name,
          prompt,
          questions,
          answers,
        }),
      })

      if (!res.ok) {
        const err = await res.text()
        console.error("n8n gateway error:", res.status, err)
        return NextResponse.json(
          { error: `AI generation failed (${res.status}). Please try again.` },
          { status: 502 },
        )
      }

      const data = await res.json()
      const text = data?.draft

      if (!text) {
        return NextResponse.json(
          { error: "AI returned an empty response. Try rephrasing your answers." },
          { status: 502 },
        )
      }

      return NextResponse.json({ draft: text })
    }

    // Fallback: call Gemini directly
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: `${systemPrompt}\n\n${userPrompt}` }],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          topP: 0.9,
          topK: 40,
          maxOutputTokens: 4096,
        },
      }),
    })

    if (!response.ok) {
      const errBody = await response.text()
      console.error("[generate] Gemini API error", response.status, errBody)
      return NextResponse.json(
        { error: `Gemini API error: ${response.status}` },
        { status: 502 },
      )
    }

    const data = await response.json()
    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      "No content generated."

    return NextResponse.json({ content: text })
  } catch (err) {
    console.error("[generate] fetch error", err)
    return NextResponse.json(
      { error: "Failed to connect to Gemini API" },
      { status: 502 },
    )
  }
}

function buildSystemPrompt(tool: string): string {
  const prompts: Record<string, string> = {
    "renovation-brief":
      "You are an experienced renovation project consultant. Create a professional, detailed renovation project brief suitable for sharing with contractors. Use Australian spelling and measurements (metric). Format with clear sections, bullet points, and practical details. Output as clean markdown.",
    "material-estimator":
      "You are a renovation materials estimator with 20 years of experience. Based on the user's inputs, provide a detailed materials estimate with approximate quantities, unit prices, and total cost ranges. Use Australian dollars (AUD) and metric measurements. Include a short disclaimer that prices vary by location and supplier. Output as clean markdown with a summary table.",
    "design-brief":
      "You are an interior design consultant helping homeowners articulate their renovation design requirements. Create a comprehensive design brief that captures the user's style preferences, functional needs, and design requirements. This brief will guide architects, designers, and contractors. Use Australian spelling. Output as clean markdown with clear sections.",
  }
  return prompts[tool] ?? "You are a helpful renovation assistant. Output as clean markdown."
}

function buildUserPrompt(
  tool: string,
  answers: Record<string, string>,
): string {
  const preamble: Record<string, string> = {
    "renovation-brief":
      "Create a professional renovation project brief based on these details:\n\n",
    "material-estimator":
      "Provide a material estimate based on these details:\n\n",
    "design-brief":
      "Create a comprehensive design brief based on these details:\n\n",
  }

  const intro = preamble[tool] ?? "Details:\n\n"
  const fields = Object.entries(answers)
    .map(([key, value]) => `**${formatKey(key)}:** ${value}`)
    .join("\n")

  return `${intro}${fields}`
}

function formatKey(key: string): string {
  return key
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
}
