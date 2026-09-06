"use client"

import { useEffect, useRef } from "react"

interface ScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

/**
 * Attaches a data-visible="true" attribute to the element when it enters
 * the viewport. CSS handles the actual transition.
 */
export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {},
) {
  const ref = useRef<T>(null)
  const { threshold = 0.15, rootMargin = "0px 0px -40px 0px", once = true } =
    options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    if (reducedMotion) {
      el.dataset.visible = "true"
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.visible = "true"
          if (once) observer.disconnect()
        } else if (!once) {
          el.dataset.visible = "false"
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return ref
}
