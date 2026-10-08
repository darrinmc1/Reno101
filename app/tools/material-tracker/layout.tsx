import type { ReactNode } from "react"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Material price tracker",
  description: "Look up material prices while you plan a renovation.",
  path: "/tools/material-tracker",
})

export default function MaterialTrackerLayout({ children }: { children: ReactNode }) {
  return children
}
