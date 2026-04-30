"use server"

import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { isSupabaseConfigured } from "@/lib/supabase/env"

export type ActionResult = { error?: string; info?: string } | undefined

export async function signupAction(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  if (!isSupabaseConfigured) {
    return { error: "Auth is not configured yet. Add Supabase keys to .env.local." }
  }

  const email = String(formData.get("email") ?? "").trim().toLowerCase()
  const password = String(formData.get("password") ?? "")
  const fullName = String(formData.get("full_name") ?? "").trim()

  if (!email || !password) return { error: "Email and password are required." }
  if (password.length < 8) return { error: "Password must be at least 8 characters." }

  const supabase = await createClient()
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { full_name: fullName || null } },
  })
  if (error) return { error: error.message }

  if (!data.session) {
    return { info: "Check your inbox to confirm your email, then log in." }
  }

  redirect("/pricing?subscribe=required")
}
