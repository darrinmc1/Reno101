"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSuccess(true)
      setEmail("")
    } catch (err) {
      setError("Failed to subscribe. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Stay Updated Without Becoming a Design Influencer</CardTitle>
        <CardDescription>
          Subscribe for renovation tips, trends, and useful warnings before you buy six sample pots of the same white.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isSuccess ? (
          <div className="py-4 text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <Mail className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="mb-2 text-xl font-medium">You are in.</h3>
            <p className="text-muted-foreground">
              Expect renovation advice, practical ideas, and occasional emotional support for your budget.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Joining The List..." : "Send Me The Good Stuff"}
            </Button>
          </form>
        )}
      </CardContent>
      <CardFooter className="border-t px-6 py-4">
        <p className="text-xs text-muted-foreground">
          By subscribing, you agree to the usual Terms and Privacy details. We will not sell your email to a mysterious
          bathware empire.
        </p>
      </CardFooter>
    </Card>
  )
}
