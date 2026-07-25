import { SignIn } from "@clerk/nextjs"
import Link from "next/link"
import { Hammer, Lock, ArrowLeft, CheckCircle2 } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-900 via-slate-900 to-stone-950 text-white flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Back to Home Link */}
      <div className="absolute top-6 left-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Reno101
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center space-y-3">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-lg">
          <Hammer className="h-6 w-6" />
        </div>
        
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Sign in to Reno101
        </h1>
        
        <p className="text-sm text-slate-300 max-w-sm mx-auto">
          Access your saved renovation dashboard, material price tracker, and custom project notes.
        </p>

        {/* Feature Pill Highlights */}
        <div className="flex flex-wrap justify-center gap-3 pt-2 text-xs font-medium text-amber-300/90">
          <span className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
            <CheckCircle2 className="h-3.5 w-3.5 text-amber-400" /> Save Stage Progress
          </span>
          <span className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
            <CheckCircle2 className="h-3.5 w-3.5 text-amber-400" /> Material Price Tracker
          </span>
        </div>
      </div>

      {/* Clerk Sign In Widget Container */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md flex justify-center">
        <SignIn
          appearance={{
            elements: {
              rootBox: "w-full shadow-2xl rounded-2xl overflow-hidden",
              card: "bg-slate-900/90 border border-slate-800 text-white shadow-xl backdrop-blur-md",
              headerTitle: "text-white text-xl font-bold",
              headerSubtitle: "text-slate-400 text-sm",
              formButtonPrimary: "bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold",
              footerActionLink: "text-amber-400 hover:text-amber-300",
            },
          }}
          routing="path"
          path="/login"
          signUpUrl="/signup"
        />
      </div>

      {/* Note for unauthenticated users */}
      <div className="mt-8 text-center text-xs text-slate-500">
        <p>16 Stage Guides &amp; Blog Posts are 100% free and don&apos;t require a login.</p>
      </div>

    </div>
  )
}
