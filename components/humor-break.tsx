"use client"

// Humor is permanently OFF (cost/research hard rule). Helpers always return false.

export function humorEnabled(): boolean {
  return false
}

export function setHumorEnabled(_enabled: boolean) {
  // no-op — humor cannot be turned on
}

export function useHumorEnabled(): boolean {
  return false
}

export default function HumorBreak(_props: { tag?: string }) {
  return null
}
