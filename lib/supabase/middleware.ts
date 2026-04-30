import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"
import { supabaseUrl, supabaseAnonKey, isSupabaseConfigured } from "./env"
import { hasMemberAccess, type Profile } from "./types"

const PROTECTED_PREFIXES = [
  "/dashboard",
  "/research",
  "/tools",
  "/design-tools",
  "/subscription",
  "/updates",
]

const AUTH_PAGES = ["/login", "/signup"]

function isProtected(pathname: string) {
  return PROTECTED_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`))
}

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  if (!isSupabaseConfigured) return supabaseResponse

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll()
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
        supabaseResponse = NextResponse.next({ request })
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options),
        )
      },
    },
  })

  const { data: { user } } = await supabase.auth.getUser()
  const { pathname, search } = request.nextUrl

  if (AUTH_PAGES.includes(pathname) && user) {
    const url = request.nextUrl.clone()
    url.pathname = "/dashboard"
    url.search = ""
    return NextResponse.redirect(url)
  }

  if (isProtected(pathname)) {
    if (!user) {
      const url = request.nextUrl.clone()
      url.pathname = "/login"
      url.search = `?next=${encodeURIComponent(pathname + search)}`
      return NextResponse.redirect(url)
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("role,subscription_status")
      .eq("id", user.id)
      .single<Pick<Profile, "role" | "subscription_status">>()

    if (!hasMemberAccess(profile as Profile | null)) {
      const url = request.nextUrl.clone()
      url.pathname = "/pricing"
      url.search = "?subscribe=required"
      return NextResponse.redirect(url)
    }
  }

  return supabaseResponse
}
