import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { FeedbackWidget } from "@/components/feedback-widget"

export const metadata: Metadata = {
  title: {
    default: "Renovation Helper",
    template: "%s | Renovation Helper",
  },
  description: "Expert guides, tools, and personalized advice for your home renovation projects",
  generator: "Renovation Helper",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
            <FeedbackWidget />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
