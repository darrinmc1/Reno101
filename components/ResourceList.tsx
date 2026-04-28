"use client"

import { useMemo, useState } from "react"
import { Inbox, LayoutGrid, List } from "lucide-react"
import { ResourceCard, ResourceRow } from "@/components/ResourceCard"
import {
  ResourceFilter,
  type AccessFilter,
} from "@/components/ResourceFilter"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { ResourceWithStage } from "@/lib/stages"

type View = "grid" | "list"

export function ResourceList({ resources }: { resources: ResourceWithStage[] }) {
  const [query, setQuery] = useState("")
  const [stage, setStage] = useState<string | "all">("all")
  const [access, setAccess] = useState<AccessFilter>("all")
  const [view, setView] = useState<View>("grid")

  const stageOptions = useMemo(() => {
    const seen = new Map<string, { slug: string; name: string; order: number }>()
    for (const r of resources) {
      if (!seen.has(r.stageSlug)) {
        seen.set(r.stageSlug, { slug: r.stageSlug, name: r.stageName, order: r.stageOrder })
      }
    }
    return Array.from(seen.values()).sort((a, b) => a.order - b.order)
  }, [resources])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return resources.filter((r) => {
      if (stage !== "all" && r.stageSlug !== stage) return false
      if (access === "free" && !r.free) return false
      if (access === "bundle" && !r.bundle) return false
      if (access === "paid" && (r.free || typeof r.priceAUD !== "number")) return false
      if (q && !r.title.toLowerCase().includes(q)) return false
      return true
    })
  }, [resources, query, stage, access])

  const reset = () => {
    setQuery("")
    setStage("all")
    setAccess("all")
  }

  return (
    <div className="space-y-6">
      <ResourceFilter
        query={query}
        onQueryChange={setQuery}
        stages={stageOptions}
        selectedStage={stage}
        onStageChange={setStage}
        access={access}
        onAccessChange={setAccess}
        resultCount={filtered.length}
        totalCount={resources.length}
        onReset={reset}
      />

      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          {filtered.length === 0 ? "No matches" : filtered.length === 1 ? "1 resource" : `${filtered.length} resources`}
        </h2>
        <Tabs value={view} onValueChange={(v) => setView(v as View)}>
          <TabsList className="h-9">
            <TabsTrigger value="grid" className="gap-1.5 px-3 text-xs font-semibold">
              <LayoutGrid className="h-3.5 w-3.5" />
              Grid
            </TabsTrigger>
            <TabsTrigger value="list" className="gap-1.5 px-3 text-xs font-semibold">
              <List className="h-3.5 w-3.5" />
              List
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border-2 border-dashed border-border bg-secondary/20 p-10 text-center">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-background">
            <Inbox className="h-5 w-5 text-muted-foreground" />
          </div>
          <h3 className="mt-4 text-lg font-bold">Nothing matches those filters</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Try clearing a filter or broadening the search.
          </p>
        </div>
      ) : view === "grid" ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <ResourceCard key={`${r.stageSlug}-${r.title}`} r={r} />
          ))}
        </div>
      ) : (
        <div className="grid gap-2">
          {filtered.map((r) => (
            <ResourceRow key={`${r.stageSlug}-${r.title}`} r={r} />
          ))}
        </div>
      )}
    </div>
  )
}
