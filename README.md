# Renovation Helper

A starter Next.js app for building a renovation guidance platform with blog content, design tools, pricing, and research request flows.

## Current Foundation

- Marketing homepage and pricing page
- Starter blog listing and dynamic blog detail routes
- Design tools and material tracker landing pages
- Research request flow and dashboard placeholder
- Reusable placeholder pages for auth and legal routes

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Data:** Local starter content in `lib/content.ts`
- **Deployment:** Vercel or any Next.js-compatible host

## Getting Started

```bash
npm install
npm run dev
npm run typecheck
```

Open `http://localhost:3000`.

## Project Structure

```text
RenovationHelper/
|- app/                 # App Router pages
|- components/          # UI and shared components
|- lib/                 # Starter content and utilities
|- public/              # Static assets
|- styles/              # Global styles
```

## Notes

- The project currently uses local mock content.
- Authentication, billing, CMS, and form submission APIs are not wired up yet.
- Placeholder routes exist so navigation stays stable while those features are built.
