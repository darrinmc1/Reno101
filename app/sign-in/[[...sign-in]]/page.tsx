import { SignIn } from "@clerk/nextjs"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Sign in",
  description: "Sign in to Reno101.",
  path: "/sign-in",
  index: false,
})

export default function SignInPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <SignIn
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "rounded-2xl shadow-lg border border-border/50",
            },
          }}
        />
      </div>
    </div>
  )
}
