"use client"

import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"

export type AccessFilter = "all" | "free" | "bundle" | "paid"

export interface ResourceFilterProps {
  query: string
  onQueryChange: (q: string) => void

  stages: { slug: string; name: string }[]
  selectedStage: string | "all"
  onStageChange: (slug: string | "all") => void

  access: AccessFilter
  onAccessChange: (a: AccessFilter) => void

  resultCount: number
  totalCount: number
  onReset: () => void
}

const ACCESS_OPTIONS: { value: AccessFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "free", label: "Free" },
  { value: "bundle", label: "In a bundle" },
  { value: "paid", label: "Paid only" },
]

export function ResourceFilter({
  query,
  onQueryChange,
  stages,
  selectedStage,
  onStageChange,
  access,
  onAccessChange,
  resultCount,
  totalCount,
  onReset,
}: ResourceFilterProps) {
  const isFiltered = query.trim() !== "" || selectedStage !== "all" || access !== "all"

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm md:p-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search by title…"
            className="pl-9"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {ACCESS_OPTIONS.map((opt) => {
            const active = access === opt.value
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => onAccessChange(opt.value)}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                  active
                    ? "border-primary bg-primary text-primary-foreground shadow-sm"
                    : "border-border bg-background hover:border-foreground/20 hover:bg-secondary"
                }`}
              >
                {opt.label}
              </button>
            )
          })}
        </div>
      </div>

      {stages.length > 1 && (
        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Stage:
          </span>
          <button
            type="button"
            onClick={() => onStageChange("all")}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
              selectedStage === "all"
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-background hover:border-foreground/30"
            }`}
          >
            All stages
          </button>
          {stages.map((s) => {
            const active = selectedStage === s.slug
            return (
              <button
                key={s.slug}
                type="button"
                onClick={() => onStageChange(s.slug)}
                className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                  active
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-background hover:border-foreground/30"
                }`}
              >
                {s.name}
              </button>
            )
          })}
        </div>
      )}

      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
        <span>
          Showing <span className="font-semibold text-foreground">{resultCount}</span> of {totalCount}
        </span>
        {isFiltered && (
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-2.5 py-1 font-semibold hover:bg-secondary"
          >
            <X className="h-3 w-3" />
            Clear filters
          </button>
        )}
      </div>
    </div>
  )
}
