"use client"

import type { ReactNode } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"

export function Reveal({
  children,
  className,
  variant = "reveal-up",
}: {
  children: ReactNode
  className?: string
  variant?: "reveal-up" | "reveal-left" | "reveal-right" | "reveal-scale"
}) {
  const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.16 })
  return (
    <div ref={ref} className={cn(variant, className)}>
      {children}
    </div>
  )
}
