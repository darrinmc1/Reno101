import type { ReactNode } from "react"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Ask a research question",
  description: "Send a specific renovation question, including the location and the scope.",
  path: "/research/new",
})

export default function NewResearchLayout({ children }: { children: ReactNode }) {
  return children
}
