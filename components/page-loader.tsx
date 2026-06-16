import { Hammer } from "lucide-react"

export function PageLoader({ message }: { message: string }) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-4 py-12">
      <div className="relative">
        <span className="absolute inset-0 animate-ping rounded-full bg-primary/20" aria-hidden />
        <div className="relative grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
          <Hammer className="h-5 w-5" />
        </div>
      </div>
      <p className="text-sm font-medium text-muted-foreground">{message}</p>
    </div>
  )
}
