import { createClient } from "@supabase/supabase-js"
import { supabaseUrl, supabaseServiceRoleKey } from "./env"

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.warn(
    "[supabase/admin] NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY not set — admin writes disabled.",
  )
}

export const supabaseAdmin =
  supabaseUrl && supabaseServiceRoleKey
    ? createClient(supabaseUrl, supabaseServiceRoleKey, {
        auth: { persistSession: false, autoRefreshToken: false },
      })
    : null

export const hasSupabase = () => supabaseAdmin !== null
