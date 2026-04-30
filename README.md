# Reno101

Next.js app for `renos101.com` — a renovation guidance platform with stage guides, design tools, pricing, and a research request flow. Subscription-gated for members.

## Tech Stack

- **Framework:** Next.js 15 (App Router) + React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Auth + DB:** Supabase (auth, profiles, subscribers)
- **Email:** Resend, Mailchimp
- **Data:** Local starter content in `lib/content.ts`, Google Sheets for some captures

## Getting Started

```bash
npm install --legacy-peer-deps
npm run dev
```

Open `http://localhost:3000`.

## Auth + Subscription Setup

The site requires a Supabase project for login. Without it, the auth pages render but submission shows "Auth is not configured".

### 1. Create a Supabase project

Go to [supabase.com](https://supabase.com) → **New Project**. From **Project Settings → API**, copy:
- Project URL → `NEXT_PUBLIC_SUPABASE_URL`
- `anon` public key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `service_role` secret key → `SUPABASE_SERVICE_ROLE_KEY`

Paste them into `.env.local`.

### 2. Run the migration

In the Supabase dashboard → **SQL Editor**, paste the contents of `supabase/migrations/0001_init.sql` and run.

### 3. Seed the admin account

Set `ADMIN_EMAIL` and `ADMIN_PASSWORD` in `.env.local`, then:

```bash
npm run seed:admin
```

This creates an auth user, marks them `role='admin'` and `subscription_status='active'`. Admin bypasses the subscription gate.

### 4. Sign in

Run `npm run dev` and visit `http://localhost:3000/login`.

## Route Gating

Configured in `lib/supabase/middleware.ts`. Protected prefixes:

- `/dashboard`, `/research`, `/tools`, `/design-tools`, `/subscription`, `/updates`

Behavior:
- Not signed in → redirect to `/login?next=...`
- Signed in but no active subscription → redirect to `/pricing?subscribe=required`
- Admin role bypasses the subscription check

Public routes: `/`, `/blogs`, `/pricing`, `/about`, `/contact`, `/stages/*`, `/resources/*`, `/login`, `/signup`, `/terms`, `/privacy`.

## Project Structure

```text
Reno101/
|- app/                 # App Router pages, server actions
|- components/          # UI and shared components
|- lib/
|  |- supabase/         # Auth clients (server, browser, middleware), types
|  |- ...               # Content, pricing, stages, email helpers
|- middleware.ts        # Route gate
|- scripts/seed-admin.ts
|- supabase/migrations/ # SQL migrations
|- public/              # Static assets
```
