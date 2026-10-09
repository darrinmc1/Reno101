import { SignUp } from "@clerk/nextjs"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Sign up",
  description: "Create a Reno101 account.",
  path: "/sign-up",
  index: false,
})

export default function SignUpPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <SignUp
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
