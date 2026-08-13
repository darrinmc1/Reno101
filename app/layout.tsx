import type React from "react"
import type { Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import { AuthNav } from "@/components/auth-nav"
import Footer from "@/components/footer"
import { FeedbackWidget } from "@/components/feedback-widget"
import { TooltipProvider } from "@/components/ui/tooltip"
import { WaitlistPopup } from "@/components/waitlist-popup"


export const metadata: Metadata = {
  metadataBase: new URL("https://renos101.com"),
  title: {
    default: "Renos101",
    template: "%s | Renos101",
  },
  description: "Plans, prices, fewer regrets — guides, tools, and templates for every stage of your renovation.",
  generator: "Renos101",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Renos101",
    description: "From first idea to finished — 16 stages of renovation, mapped.",
    url: "https://renos101.com",
    siteName: "Renos101",
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
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <TooltipProvider delayDuration={150}>
              <div className="flex min-h-screen flex-col">
                {/* Auth utility bar */}
                <div className="flex justify-end border-b border-white/20 bg-background/50 px-4 py-1">
                  <AuthNav />
                </div>
                <Navbar />
                <div className="flex-1">{children}</div>
                <Footer />
                <FeedbackWidget />
              </div>
              <WaitlistPopup />
            </TooltipProvider>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
