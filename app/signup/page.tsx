import Link from "next/link"
import { SignupForm } from "./signup-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Create account",
  description: "Create your Reno101 account.",
}

export default function SignupPage() {
  return (
    <div className="container flex min-h-[70vh] items-center justify-center px-4 py-12 md:px-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Create your account</CardTitle>
          <CardDescription>
            Sign up to start. You'll need an active subscription to unlock the dashboard and tools.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignupForm />
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Already subscribed?{" "}
            <Link href="/login" className="font-medium text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
