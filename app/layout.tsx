import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { FeedbackWidget } from "@/components/feedback-widget"
import { TooltipProvider } from "@/components/ui/tooltip"
import { WaitlistPopup } from "@/components/waitlist-popup"


export const metadata: Metadata = {
  metadataBase: new URL("https://renos101.com"),
  title: {
    default: "Reno101",
    template: "%s | Reno101",
  },
  description: "Plans, prices, fewer regrets — guides, tools, and templates for every stage of your renovation.",
  generator: "Reno101",
  openGraph: {
    title: "Reno101",
    description: "From first idea to finished — 16 stages of renovation, mapped.",
    url: "https://renos101.com",
    siteName: "Reno101",
    type: "website",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
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
          <TooltipProvider delayDuration={150}>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <div className="flex-1">{children}</div>
              <Footer />
              <FeedbackWidget />
            </div>
            <WaitlistPopup />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
