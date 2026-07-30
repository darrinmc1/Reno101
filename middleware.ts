import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Known AI crawlers and scrapers that ignore robots.txt
const BLOCKED_BOTS = [
  "GPTBot", "ChatGPT-User", "CCBot", "anthropic-ai", "Claude-Web",
  "Diffbot", "Bytespider", "cohere-ai", "PerplexityBot", "Imagesift",
  "FacebookBot", "meta-externalagent", "DataForSeoBot", "DotBot",
  "Meltwater", "Applebot-Extended", "Google-Extended", "PetalBot",
  "Scrapy", "python-requests", "aiohttp", "httpx", "curl", "wget",
  "Go-http-client", "Java/", "okhttp",
]

// Paths that are safe from rate limiting (static assets)
const SAFE_PATHS = ["/_next/", "/favicon", "/og-image", "/opengraph", "/icon"]

// Routes that require authentication
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/api/protected(.*)",
])

// Simple in-memory rate limiter
const rateLimit = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW = 60_000 // 1 minute
const RATE_LIMIT_MAX = 60 // 60 requests per minute per IP

export default clerkMiddleware(async (auth, request: NextRequest) => {
  const url = request.nextUrl.pathname
  const userAgent = request.headers.get("user-agent") || ""
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")
    || "unknown"
  const response = NextResponse.next()

  // === Clerk Auth Protection ===
  // Graceful fallback: if Clerk keys aren't set, skip protection
  const hasClerkKeys =
    typeof process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY === "string"
    && process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.length > 0
    && typeof process.env.CLERK_SECRET_KEY === "string"
    && process.env.CLERK_SECRET_KEY.length > 0

  if (hasClerkKeys && isProtectedRoute(request)) {
    await auth.protect()
  }

  // === 1. Security Headers ===
  response.headers.set("X-Robots-Tag", "noai, noimageai")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")

  // === 2. Block known AI crawlers / scrapers ===
  const uaLower = userAgent.toLowerCase()
  for (const bot of BLOCKED_BOTS) {
    if (uaLower.includes(bot.toLowerCase())) {
      if (url.startsWith("/api/") || url.startsWith("/admin/")) {
        return new NextResponse("Forbidden", { status: 403 })
      }
      response.headers.set("X-Robots-Tag", "noindex, nofollow, noai, noimageai")
    }
  }

  // === 3. Rate limiting (skip static assets) ===
  if (!SAFE_PATHS.some((p) => url.startsWith(p))) {
    const now = Date.now()
    const entry = rateLimit.get(ip)

    if (!entry || now > entry.resetAt) {
      rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    } else {
      entry.count++
      if (entry.count > RATE_LIMIT_MAX) {
        return new NextResponse("Too Many Requests", {
          status: 429,
          headers: { "Retry-After": "60" },
        })
      }
    }

    // Cleanup old entries every 100 requests to prevent memory leaks
    if (rateLimit.size > 10000) {
      const cutoff = now - RATE_LIMIT_WINDOW
      for (const [key, val] of rateLimit) {
        if (val.resetAt < cutoff) rateLimit.delete(key)
      }
    }
  }

  // === 4. Honeypot protection ===
  if (request.method === "POST") {
    const contentType = request.headers.get("content-type") || ""
    if (contentType.includes("application/json")) {
      response.headers.set("X-Content-Type-Options", "nosniff")
    }
  }

  return response
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
}
