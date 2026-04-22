"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, CheckCircle, HelpCircle, Loader2, Sparkles } from "lucide-react"
import Link from "next/link"

export default function NewResearchRequestPage() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    question: "",
    category: "",
    location: "",
    urgency: "normal",
    additionalInfo: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const nextStep = () => setStep((prev) => prev + 1)
  const prevStep = () => setStep((prev) => prev - 1)

  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 rounded-[2rem] border border-primary/15 bg-[linear-gradient(135deg,rgba(255,239,214,0.95),rgba(232,243,235,0.92))] p-8 shadow-sm">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/75 px-3 py-1 text-sm text-primary">
            <Sparkles className="h-4 w-4" />
            Research Request Wizard
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight">Ask the Question Before the Renovation Gets Weird</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            This flow is for the technical, local, and mildly alarming questions that deserve better than "I read
            somewhere that it should be fine."
          </p>
        </div>

        {isSuccess ? (
          <Card className="border-primary/15 shadow-sm">
            <CardHeader>
              <div className="mb-2 flex items-center gap-2">
                <div className="rounded-full bg-green-100 p-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Request Submitted Successfully</CardTitle>
              </div>
              <CardDescription>
                Your research request is in the queue and already making spreadsheets nervous.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-2xl bg-muted/70 p-4">
                <h3 className="mb-2 font-medium">Your Question</h3>
                <p className="text-muted-foreground">{formData.question}</p>
              </div>
              <div>
                <h3 className="mb-2 font-medium">What Happens Next?</h3>
                <ol className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-white">
                      1
                    </span>
                    <span>We review your question and isolate the real issue, even if the first draft was mostly stress.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-white">
                      2
                    </span>
                    <span>We may ask follow-ups if location, structure, or hidden chaos changes the answer.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-white">
                      3
                    </span>
                    <span>Within 24 hours, you receive a practical response you can actually use.</span>
                  </li>
                </ol>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href="/dashboard">
                <Button variant="outline" className="rounded-full">Go to Dashboard</Button>
              </Link>
              <Link href="/research/new">
                <Button className="rounded-full">Ask Another Question</Button>
              </Link>
            </CardFooter>
          </Card>
        ) : (
          <Card className="border-primary/15 shadow-sm">
            <CardHeader>
              <CardTitle>Research Request Form</CardTitle>
              <CardDescription>
                Give us the details. The better the brief, the fewer dramatic follow-up emails from future-you.
              </CardDescription>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {[1, 2, 3].map((currentStep, index) => (
                  <React.Fragment key={currentStep}>
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium ${
                        step === currentStep
                          ? "bg-primary text-white shadow-sm"
                          : step > currentStep
                            ? "bg-accent text-accent-foreground"
                            : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {currentStep}
                    </div>
                    {index < 2 ? (
                      <div className={`h-1 w-12 rounded-full ${step > currentStep ? "bg-primary/70" : "bg-muted"}`}></div>
                    ) : null}
                  </React.Fragment>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="question">What is the actual renovation question?</Label>
                      <Textarea
                        id="question"
                        name="question"
                        placeholder="Example: What permits do I need for a kitchen renovation in Portland, Oregon, if I am moving plumbing and removing a non-load-bearing wall?"
                        value={formData.question}
                        onChange={handleChange}
                        required
                        className="min-h-[140px] rounded-2xl bg-white/80"
                      />
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <HelpCircle className="mt-0.5 h-4 w-4" />
                        <span>Specific beats vague. The phrase "sort of a bathroom issue" is not illegal, but it is unhelpful.</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
                        <SelectTrigger id="category" className="rounded-2xl bg-white/80">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kitchen">Kitchen</SelectItem>
                          <SelectItem value="bathroom">Bathroom</SelectItem>
                          <SelectItem value="outdoor">Outdoor / Landscaping</SelectItem>
                          <SelectItem value="structural">Structural / Addition</SelectItem>
                          <SelectItem value="electrical">Electrical</SelectItem>
                          <SelectItem value="plumbing">Plumbing</SelectItem>
                          <SelectItem value="flooring">Flooring</SelectItem>
                          <SelectItem value="painting">Painting / Finishing</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        name="location"
                        placeholder="Example: Portland, Oregon"
                        value={formData.location}
                        onChange={handleChange}
                        className="rounded-2xl bg-white/80"
                      />
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <HelpCircle className="mt-0.5 h-4 w-4" />
                        <span>Location matters when permits, climate, and regulations decide to become the main character.</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="urgency">Urgency</Label>
                      <Select value={formData.urgency} onValueChange={(value) => handleSelectChange("urgency", value)}>
                        <SelectTrigger id="urgency" className="rounded-2xl bg-white/80">
                          <SelectValue placeholder="Select urgency level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="normal">Normal (24 hours)</SelectItem>
                          <SelectItem value="urgent">Urgent (12 hours, Premium only)</SelectItem>
                          <SelectItem value="rush">Rush (6 hours, Premium only)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo">Additional Context</Label>
                      <Textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        placeholder="Add dimensions, photos you intend to upload later, contractor feedback, budget constraints, or the suspicious sentence that started the whole problem."
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        className="min-h-[140px] rounded-2xl bg-white/80"
                      />
                    </div>
                    <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                      <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
                      <div>
                        <h4 className="font-medium text-amber-800">Important Note</h4>
                        <p className="text-sm text-amber-700">
                          Our research is thorough, but big renovation decisions still need licensed professionals and
                          local authority checks. Confidence is useful. Proof is better.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              {step > 1 ? (
                <Button variant="outline" onClick={prevStep} className="rounded-full">
                  Back
                </Button>
              ) : (
                <Link href="/research">
                  <Button variant="outline" className="rounded-full">Cancel</Button>
                </Link>
              )}

              {step < 3 ? (
                <Button onClick={nextStep} className="rounded-full">Continue</Button>
              ) : (
                <Button onClick={handleSubmit} disabled={isSubmitting} className="rounded-full">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </Button>
              )}
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}
