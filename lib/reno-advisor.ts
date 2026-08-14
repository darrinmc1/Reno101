import { renovationGuides } from "@/lib/guides"
import { STAGES } from "@/lib/stages"

export const ADVISOR_MAX_QUESTION = 400
export const ADVISOR_MAX_CITATIONS = 4

export type AdvisorSource = "stage" | "guide"

export type AdvisorCitation = {
  source: AdvisorSource
  title: string
  location: string
  excerpt: string
  href?: string
}

export type AdvisorResult = {
  question: string
  summary: string
  citations: AdvisorCitation[]
}

type Passage = {
  source: AdvisorSource
  title: string
  location: string
  excerpt: string
  href?: string
  haystack: string
}

const STOPWORDS = new Set([
  "a",
  "about",
  "after",
  "all",
  "also",
  "an",
  "and",
  "any",
  "are",
  "as",
  "at",
  "be",
  "been",
  "before",
  "but",
  "can",
  "could",
  "do",
  "does",
  "each",
  "for",
  "from",
  "get",
  "got",
  "has",
  "have",
  "how",
  "i",
  "if",
  "in",
  "into",
  "is",
  "it",
  "its",
  "just",
  "like",
  "many",
  "more",
  "my",
  "need",
  "not",
  "of",
  "on",
  "or",
  "our",
  "over",
  "pick",
  "should",
  "some",
  "than",
  "that",
  "the",
  "them",
  "then",
  "they",
  "this",
  "to",
  "under",
  "was",
  "we",
  "were",
  "what",
  "when",
  "where",
  "which",
  "who",
  "will",
  "with",
  "would",
  "you",
  "your",
])

/** Extra tokens so a kitchen question can still hit cabinets / fit-off, etc. */
const SYNONYMS: Record<string, string[]> = {
  asbestos: ["demolition", "safe", "licence"],
  bathroom: ["waterproof", "plumbing", "vanity", "tile", "shower", "fit-off"],
  budget: ["planning", "cost", "contingency", "quote"],
  cabinets: ["kitchen", "joinery", "vanity"],
  council: ["permit", "planning", "da"],
  deck: ["landscaping", "external", "outdoor"],
  electrical: ["rough-in", "fit-off", "licence", "licensed"],
  flooring: ["tile", "timber", "carpet", "waterproof"],
  gas: ["rough-in", "licence", "licensed"],
  grout: ["tile", "flooring", "painting"],
  colour: ["color", "paint", "palette"],
  color: ["colour", "paint", "palette"],
  kitchen: ["cabinets", "appliances", "joinery", "fit-off"],
  laundry: ["plumbing", "cabinets", "fit-off"],
  outdoor: ["landscaping", "external", "deck"],
  paint: ["painting", "prep", "primer"],
  permit: ["planning", "council", "da", "approval"],
  plumbing: ["rough-in", "fit-off", "licence", "waterproof"],
  quote: ["planning", "contractor", "scope"],
  roof: ["external", "gutter", "drainage"],
  structural: ["construction", "framing", "permit"],
  tile: ["flooring", "waterproof", "grout"],
  waterproof: ["bathroom", "flooring", "wet"],
}

function tokenize(text: string): string[] {
  const raw = text
    .toLowerCase()
    .replace(/[^a-z0-9$/-]+/g, " ")
    .split(/\s+/)
    .map((token) => token.trim())
    .filter((token) => token.length >= 3 && !STOPWORDS.has(token))
  const withStems: string[] = []
  for (const token of raw) {
    withStems.push(token)
    if (token.endsWith("s") && token.length > 4) withStems.push(token.slice(0, -1))
  }
  return withStems
}

function expandTokens(tokens: string[]): string[] {
  const extra: string[] = []
  for (const token of tokens) {
    const synonyms = SYNONYMS[token]
    if (synonyms) extra.push(...synonyms)
  }
  return [...tokens, ...extra]
}

function clipExcerpt(text: string, limit = 280): string {
  const cleaned = text.replace(/\s+/g, " ").trim()
  if (cleaned.length <= limit) return cleaned
  return `${cleaned.slice(0, limit - 1).trimEnd()}…`
}

function buildPassages(): Passage[] {
  const passages: Passage[] = []

  for (const stage of STAGES) {
    const href = `/stages/${stage.slug}`
    const location = `Stage ${String(stage.order).padStart(2, "0")} · ${stage.name}`

    passages.push({
      source: "stage",
      title: stage.name,
      location,
      excerpt: clipExcerpt(stage.summary),
      href,
      haystack: [stage.name, stage.tagline, stage.summary, stage.phaseLabel].join(" "),
    })

    for (const step of stage.steps ?? []) {
      for (const component of step.components) {
        const hint = component.hint ?? ""
        if (!hint) continue
        passages.push({
          source: "stage",
          title: `${stage.name}: ${component.label}`,
          location: `${location} · ${step.title}`,
          excerpt: clipExcerpt(hint),
          href,
          haystack: [stage.name, step.title, component.label, hint, component.materials ?? ""].join(" "),
        })
      }
    }
  }

  for (const guide of renovationGuides) {
    const location = `Guide · ${guide.category}`
    passages.push({
      source: "guide",
      title: guide.title,
      location,
      excerpt: clipExcerpt(guide.excerpt),
      haystack: [guide.title, guide.excerpt, guide.category].join(" "),
    })

    for (const step of guide.steps) {
      const bits = [step.description, ...step.tips, ...step.warnings]
      for (const bit of bits) {
        passages.push({
          source: "guide",
          title: `${guide.title}: ${step.title}`,
          location,
          excerpt: clipExcerpt(bit),
          haystack: [guide.title, guide.category, step.title, bit].join(" "),
        })
      }
    }
  }

  return passages
}

const PASSAGES = buildPassages()

const TOKEN_DF = (() => {
  const df = new Map<string, number>()
  for (const passage of PASSAGES) {
    const hay = passage.haystack.toLowerCase()
    const seen = new Set<string>()
    for (const token of tokenize(hay)) {
      if (seen.has(token)) continue
      seen.add(token)
      df.set(token, (df.get(token) ?? 0) + 1)
    }
  }
  return df
})()

function tokenWeight(token: string): number {
  const df = TOKEN_DF.get(token) ?? 1
  return 8 / Math.log2(2 + df)
}

function haystackTokens(haystack: string): Set<string> {
  return new Set(tokenize(haystack))
}

const PRIORITY_TOKENS = new Set([
  "asbestos",
  "council",
  "grout",
  "licence",
  "license",
  "permit",
  "quote",
  "tradie",
  "waterproof",
  "waterproofing",
])

function scoreHaystack(haystack: string, original: string[], expanded: string[]): number {
  const hay = haystackTokens(haystack)
  let score = 0
  for (const token of original) {
    if (!hay.has(token)) continue
    score += tokenWeight(token)
    if (PRIORITY_TOKENS.has(token)) score += 10
  }
  for (const token of expanded) {
    if (original.includes(token)) continue
    if (hay.has(token)) score += tokenWeight(token) * 0.25
  }
  return score
}

export function adviseFromGuides(rawQuestion: string): AdvisorResult {
  const question = rawQuestion.replace(/\s+/g, " ").trim()
  const original = tokenize(question)
  const tokens = expandTokens(original)

  if (question.length < 8 || original.length === 0) {
    return {
      question,
      summary:
        "Ask a specific reno question — a room, a trade, or a stage. The advisor only quotes the 16-stage guides and written how-tos. It is not a chatbot.",
      citations: [],
    }
  }

  const ranked = PASSAGES.map((passage) => {
    const titleHay = haystackTokens(`${passage.title} ${passage.location}`)
    const titleBonus = original
      .filter((token) => titleHay.has(token))
      .reduce((sum, token) => sum + tokenWeight(token), 0)
    const combined = haystackTokens(`${passage.haystack} ${passage.title} ${passage.location}`)
    const matchedOriginal = original.filter((token) => combined.has(token))
    return {
      passage,
      score: scoreHaystack(passage.haystack, original, tokens) + titleBonus,
      matchedOriginal,
    }
  })
    .filter((row) => row.score >= 2 && row.matchedOriginal.length > 0)
    .sort((a, b) => b.score - a.score)

  const citations: AdvisorCitation[] = []
  const seenLocation = new Set<string>()
  const perStage = new Map<string, number>()
  for (const row of ranked) {
    if (seenLocation.has(row.passage.location)) continue
    const stageKey = row.passage.href ?? row.passage.location
    const used = perStage.get(stageKey) ?? 0
    if (used >= 1) continue
    seenLocation.add(row.passage.location)
    perStage.set(stageKey, used + 1)
    citations.push({
      source: row.passage.source,
      title: row.passage.title,
      location: row.passage.location,
      excerpt: row.passage.excerpt,
      href: row.passage.href,
    })
    if (citations.length >= ADVISOR_MAX_CITATIONS) break
  }

  if (citations.length === 0) {
    return {
      question,
      summary:
        "Nothing in the 16-stage guides matched closely enough. Try naming the room or the stage (planning, rough-in, painting, fit-off). No invented advice — only cited passages.",
      citations: [],
    }
  }

  const lead = citations[0]
  const summary = `${lead.excerpt} See ${lead.location} for the full note. This is a one-job lookup of existing Renos101 guides — not generated chat, and not a substitute for a licensed tradie.`

  return { question, summary, citations }
}
