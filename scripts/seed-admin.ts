/**
 * Seed an admin user.
 *
 * Usage:
 *   1. Fill .env.local with NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY,
 *      ADMIN_EMAIL, ADMIN_PASSWORD.
 *   2. Run the SQL migration in Supabase first (supabase/migrations/0001_init.sql).
 *   3. Run: npm run seed:admin
 */

import { createClient } from "@supabase/supabase-js"
import { readFileSync } from "node:fs"
import { resolve } from "node:path"

function loadEnvLocal() {
  try {
    const raw = readFileSync(resolve(process.cwd(), ".env.local"), "utf8")
    for (const line of raw.split(/\r?\n/)) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith("#")) continue
      const eq = trimmed.indexOf("=")
      if (eq === -1) continue
      const key = trimmed.slice(0, eq).trim()
      let val = trimmed.slice(eq + 1).trim()
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1)
      }
      if (!(key in process.env)) process.env[key] = val
    }
  } catch {
    // no .env.local — fall through, env may already be set
  }
}

async function main() {
  loadEnvLocal()

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  const email = process.env.ADMIN_EMAIL
  const password = process.env.ADMIN_PASSWORD
  const fullName = process.env.ADMIN_FULL_NAME ?? "Reno101 Admin"

  if (!url || !serviceKey) {
    console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local")
    process.exit(1)
  }
  if (!email || !password) {
    console.error("Missing ADMIN_EMAIL or ADMIN_PASSWORD in .env.local")
    process.exit(1)
  }

  const admin = createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })

  // Try to create. If already exists, look it up and continue.
  let userId: string | undefined
  const { data: created, error: createErr } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { full_name: fullName },
  })

  if (createErr && !/already/i.test(createErr.message)) {
    console.error("Failed to create user:", createErr.message)
    process.exit(1)
  }

  if (created?.user) {
    userId = created.user.id
    console.log(`Created auth user ${email} (${userId})`)
  } else {
    const { data: list, error: listErr } = await admin.auth.admin.listUsers({ page: 1, perPage: 200 })
    if (listErr) {
      console.error("Failed to look up existing user:", listErr.message)
      process.exit(1)
    }
    const existing = list.users.find((u) => u.email?.toLowerCase() === email.toLowerCase())
    if (!existing) {
      console.error(`User exists per createUser, but could not find ${email} via listUsers`)
      process.exit(1)
    }
    userId = existing.id
    console.log(`Found existing auth user ${email} (${userId})`)

    const { error: pwErr } = await admin.auth.admin.updateUserById(userId, { password })
    if (pwErr) console.warn("Could not reset password:", pwErr.message)
    else console.log("Password updated.")
  }

  // Promote to admin and mark subscription active.
  const { error: upsertErr } = await admin
    .from("profiles")
    .upsert(
      {
        id: userId,
        email,
        full_name: fullName,
        role: "admin",
        subscription_status: "active",
      },
      { onConflict: "id" },
    )
  if (upsertErr) {
    console.error("Failed to upsert profile:", upsertErr.message)
    console.error("Did you run supabase/migrations/0001_init.sql first?")
    process.exit(1)
  }

  console.log(`Admin ready. Sign in at /login as ${email}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
