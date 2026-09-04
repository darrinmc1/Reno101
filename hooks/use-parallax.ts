"use client"

import { useEffect, useRef } from "react"

/** Subtle scroll-linked translate. Disabled when the user prefers reduced motion. */
export function useParallax<T extends HTMLElement>(factor: number) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let frame = 0
    const update = () => {
      const y = window.scrollY * factor
      el.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`
    }
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
    }
  }, [factor])

  return ref
}
