"use server"

import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { isSupabaseConfigured } from "@/lib/supabase/env"
import { hasMemberAccess, type Profile } from "@/lib/supabase/types"

export type ActionResult = { error: string } | undefined

export async function loginAction(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  if (!isSupabaseConfigured) {
    return { error: "Auth is not configured yet. Add Supabase keys to .env.local." }
  }

  const email = String(formData.get("email") ?? "").trim().toLowerCase()
  const password = String(formData.get("password") ?? "")
  const next = String(formData.get("next") ?? "/dashboard")

  if (!email || !password) return { error: "Email and password are required." }

  const supabase = await createClient()
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error || !data.user) return { error: error?.message ?? "Invalid email or password." }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role,subscription_status")
    .eq("id", data.user.id)
    .single<Pick<Profile, "role" | "subscription_status">>()

  if (!hasMemberAccess(profile as Profile | null)) {
    redirect("/pricing?subscribe=required")
  }

  redirect(next.startsWith("/") ? next : "/dashboard")
}

export async function logoutAction() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect("/")
}
