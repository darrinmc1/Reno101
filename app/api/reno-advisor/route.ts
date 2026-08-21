import { NextRequest, NextResponse } from "next/server"
import { ADVISOR_MAX_QUESTION, adviseFromGuides } from "@/lib/reno-advisor"

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}))
  const question = typeof body.question === "string" ? body.question : ""

  if (!question.trim()) {
    return NextResponse.json({ error: "Paste a renovation question first." }, { status: 400 })
  }

  if (question.length > ADVISOR_MAX_QUESTION) {
    return NextResponse.json(
      { error: `Keep it to ${ADVISOR_MAX_QUESTION} characters — one question, not a novel.` },
      { status: 400 },
    )
  }

  return NextResponse.json(adviseFromGuides(question))
}
