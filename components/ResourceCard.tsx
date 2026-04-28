import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  CheckSquare,
  Download,
  FileText,
  Lightbulb,
  Lock,
  Package,
  Sparkles,
  Wrench,
} from "lucide-react"
import {
  DIFFICULTY_META,
  formatPrice,
  type ResourceKind,
  type ResourceWithStage,
} from "@/lib/stages"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type KindStyle = {
  icon: React.ReactNode
  iconBg: string
  hoverBorder: string
  hoverShadow: string
  cta: string
  label: string
  /** Tailwind gradient classes for the top stripe — without "bg-gradient-to-r ". */
  stripe: string
  /** Soft gradient applied to the card surface on hover. */
  surfaceHover: string
}

const KIND_STYLE: Record<ResourceKind, KindStyle> = {
  ebook: {
    icon: <BookOpen className="h-5 w-5" />,
    iconBg: "bg-orange-500 text-white shadow-orange-500/30",
    hoverBorder: "hover:border-orange-300/80",
    hoverShadow: "hover:shadow-orange-200/40",
    cta: "text-orange-700",
    label: "Ebook",
    stripe: "from-orange-400 via-orange-500 to-amber-500",
    surfaceHover: "group-hover:bg-gradient-to-br group-hover:from-orange-50/60 group-hover:to-transparent",
  },
  template: {
    icon: <FileText className="h-5 w-5" />,
    iconBg: "bg-sky-600 text-white shadow-sky-600/30",
    hoverBorder: "hover:border-sky-300/80",
    hoverShadow: "hover:shadow-sky-200/40",
    cta: "text-sky-700",
    label: "Template",
    stripe: "from-sky-400 via-sky-500 to-blue-500",
    surfaceHover: "group-hover:bg-gradient-to-br group-hover:from-sky-50/60 group-hover:to-transparent",
  },
  checklist: {
    icon: <CheckSquare className="h-5 w-5" />,
    iconBg: "bg-stone-700 text-white shadow-stone-700/30",
    hoverBorder: "hover:border-stone-400/80",
    hoverShadow: "hover:shadow-stone-200/50",
    cta: "text-stone-800",
    label: "Checklist",
    stripe: "from-stone-400 via-stone-500 to-zinc-600",
    surfaceHover: "group-hover:bg-gradient-to-br group-hover:from-stone-50/70 group-hover:to-transparent",
  },
  tool: {
    icon: <Wrench className="h-5 w-5" />,
    iconBg: "bg-violet-600 text-white shadow-violet-600/30",
    hoverBorder: "hover:border-violet-300/80",
    hoverShadow: "hover:shadow-violet-200/40",
    cta: "text-violet-700",
    label: "Tool",
    stripe: "from-violet-400 via-violet-500 to-purple-600",
    surfaceHover: "group-hover:bg-gradient-to-br group-hover:from-violet-50/60 group-hover:to-transparent",
  },
  tip: {
    icon: <Lightbulb className="h-5 w-5" />,
    iconBg: "bg-teal-600 text-white shadow-teal-600/30",
    hoverBorder: "hover:border-teal-300/80",
    hoverShadow: "hover:shadow-teal-200/40",
    cta: "text-teal-700",
    label: "Tip",
    stripe: "from-teal-400 via-teal-500 to-emerald-500",
    surfaceHover: "group-hover:bg-gradient-to-br group-hover:from-teal-50/60 group-hover:to-transparent",
  },
}

export function ResourceCard({ r }: { r: ResourceWithStage }) {
  const style = KIND_STYLE[r.kind]
  const priceLabel = formatPrice(r)
  const diff = DIFFICULTY_META[r.stageDifficulty]
  const ctaIcon = r.locked ? (
    <Lock className="h-4 w-4" />
  ) : r.free ? (
    <Download className="h-4 w-4" />
  ) : (
    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
  )
  const ctaLabel = r.locked ? "Locked" : r.free ? "Download" : "View"

  return (
    <Link
      href={r.href ?? `/stages/${r.stageSlug}#resources`}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${style.hoverBorder} ${style.hoverShadow}`}
    >
      {/* tinted top stripe */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${style.stripe}`} aria-hidden />

      {/* hover surface tint */}
      <div className={`absolute inset-0 -z-0 transition-colors duration-300 ${style.surfaceHover}`} aria-hidden />

      <div className="relative flex flex-1 flex-col p-5">
        <div className="flex items-start gap-4">
          <div className={`grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl shadow ${style.iconBg}`}>
            {style.icon}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              <span>{style.label}</span>
              <span aria-hidden>·</span>
              <Link
                href={`/stages/${r.stageSlug}`}
                className="hover:text-foreground"
                onClick={(e) => e.stopPropagation()}
              >
                {r.stageName}
              </Link>
            </div>
            <div className="mt-1 line-clamp-2 text-sm font-bold leading-snug text-foreground">
              {r.title}
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-1.5 text-[11px] font-semibold">
          {r.free && (
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-100 px-2 py-0.5 text-emerald-800">
                  <Sparkles className="h-3 w-3" />
                  Free
                </span>
              </TooltipTrigger>
              <TooltipContent>In the Starter Pack — drop your email and it's yours.</TooltipContent>
            </Tooltip>
          )}
          {!r.free && priceLabel && (
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="rounded-full bg-secondary px-2 py-0.5 text-foreground">
                  {priceLabel}
                </span>
              </TooltipTrigger>
              <TooltipContent>One-off price for this single download.</TooltipContent>
            </Tooltip>
          )}
          {r.bundle && (
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-100 px-2 py-0.5 text-amber-800">
                  <Package className="h-3 w-3" />
                  {r.bundle}
                </span>
              </TooltipTrigger>
              <TooltipContent>Included free when you buy the {r.bundle}.</TooltipContent>
            </Tooltip>
          )}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className={`inline-flex items-center gap-1 rounded-full border border-border bg-background/70 px-2 py-0.5 ${diff.text}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${diff.dot}`} aria-hidden />
                {diff.label}
              </span>
            </TooltipTrigger>
            <TooltipContent>Difficulty of the stage this resource sits in.</TooltipContent>
          </Tooltip>
        </div>

        <div className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${style.cta}`}>
          {ctaLabel}
          {ctaIcon}
        </div>
      </div>
    </Link>
  )
}

/** Compact, single-line variant of ResourceCard used in the List view. */
export function ResourceRow({ r }: { r: ResourceWithStage }) {
  const style = KIND_STYLE[r.kind]
  const priceLabel = formatPrice(r)
  const diff = DIFFICULTY_META[r.stageDifficulty]

  return (
    <Link
      href={r.href ?? `/stages/${r.stageSlug}#resources`}
      className={`group relative flex items-center gap-4 overflow-hidden rounded-xl border border-border bg-card p-3 pl-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${style.hoverBorder}`}
    >
      <span className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${style.stripe}`} aria-hidden />
      <div className={`grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg shadow ${style.iconBg}`}>
        {style.icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-bold text-foreground">{r.title}</div>
        <div className="mt-0.5 flex items-center gap-2 text-[11px] text-muted-foreground">
          <span className="font-semibold uppercase tracking-wider">{style.label}</span>
          <span aria-hidden>·</span>
          <span className="truncate">{r.stageName}</span>
        </div>
      </div>
      <div className="hidden items-center gap-1.5 text-[11px] font-semibold sm:flex">
        {r.free ? (
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-100 px-2 py-0.5 text-emerald-800">
            <Sparkles className="h-3 w-3" />
            Free
          </span>
        ) : priceLabel ? (
          <span className="rounded-full bg-secondary px-2 py-0.5 text-foreground">{priceLabel}</span>
        ) : null}
        {r.bundle && (
          <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-100 px-2 py-0.5 text-amber-800">
            <Package className="h-3 w-3" />
            Bundle
          </span>
        )}
        <span className={`inline-flex items-center gap-1 rounded-full border border-border bg-background/70 px-2 py-0.5 ${diff.text}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${diff.dot}`} aria-hidden />
          {diff.label}
        </span>
      </div>
      <ArrowRight className={`h-4 w-4 flex-shrink-0 ${style.cta} transition-transform group-hover:translate-x-1`} />
    </Link>
  )
}
