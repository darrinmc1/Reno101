import Link from "next/link"
import { LoginForm } from "./login-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Log in",
  description: "Sign in to your Reno101 account.",
}

export default function LoginPage() {
  return (
    <div className="container flex min-h-[70vh] items-center justify-center px-4 py-12 md:px-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>
            Subscribers only — sign in to access your dashboard, tools, and saved projects.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Need a subscription first?{" "}
            <Link href="/pricing" className="font-medium text-primary hover:underline">
              See plans
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
