import { SignUp } from "@clerk/nextjs"
import Link from "next/link"
import { Hammer, ArrowLeft, CheckCircle2 } from "lucide-react"

export default function SignupPage() {
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
          Create your Reno101 account
        </h1>
        
        <p className="text-sm text-slate-300 max-w-sm mx-auto">
          Start planning your renovation with saved progress, budget templates, and downloadable checklists.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-2 pt-2 text-xs font-medium text-amber-300/90">
          <span className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
            <CheckCircle2 className="h-3.5 w-3.5 text-amber-400" /> Free Starter Pack
          </span>
          <span className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
            <CheckCircle2 className="h-3.5 w-3.5 text-amber-400" /> 16 Stage Roadmap
          </span>
        </div>
      </div>

      {/* Clerk Sign Up Widget Container */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md flex justify-center">
        <SignUp
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
          path="/signup"
          signInUrl="/login"
        />
      </div>

      {/* Note for unauthenticated users */}
      <div className="mt-8 text-center text-xs text-slate-500">
        <p>16 Stage Guides &amp; Blog Posts are 100% free and don&apos;t require a login.</p>
      </div>

    </div>
  )
}
