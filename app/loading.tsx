import { Hammer } from "lucide-react"

export default function RootLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-50 to-stone-100">
      <div className="flex flex-col items-center gap-4 text-center">
        <Hammer className="h-10 w-10 animate-bounce text-amber-500" />
        <div className="h-1.5 w-32 overflow-hidden rounded-full bg-amber-200">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-amber-500" />
        </div>
        <p className="text-sm text-slate-500">Checking the foundation...</p>
      </div>
    </div>
  )
}
