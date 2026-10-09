import type { ReactNode } from "react"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Contact",
  description: "Ask about your renovation using the form on this page. We reply from that form.",
  path: "/contact",
})

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children
}
