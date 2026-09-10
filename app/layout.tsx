import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import Analytics from "./components/Analytics"
import Link from "next/link"
import { Menu, X, Hammer } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Reno101 – Renovation Guides & Tools",
  description: "Practical renovation guides, cost estimates, and tools for homeowners.",
}

const NAV_LINKS = [
  { href: "/blogs", label: "Guides" },
  { href: "/tools", label: "Tools" },
  { href: "/resources", label: "Resources" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Analytics />
          <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
            <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 font-bold text-slate-900 text-lg">
                <Hammer className="h-5 w-5 text-amber-500" />
                <span>Reno<span className="text-amber-500">101</span></span>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-slate-600 transition-colors hover:text-amber-600"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Desktop CTA */}
              <div className="hidden md:flex items-center gap-3">
                <Link
                  href="/sign-in"
                  className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-colors"
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <label
                htmlFor="mobile-menu-toggle"
                className="flex md:hidden cursor-pointer items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle mobile menu"
              >
                <Menu className="h-6 w-6 block peer-checked:hidden" />
              </label>
              <input type="checkbox" id="mobile-menu-toggle" className="peer sr-only" />

              {/* Mobile Drawer */}
              <div
                className="fixed inset-0 z-40 hidden peer-checked:flex flex-col bg-white md:hidden"
                style={{ top: "64px" }}
              >
                <nav
                  className="flex flex-col divide-y divide-slate-100 px-4 pt-2 pb-6"
                  aria-label="Mobile navigation"
                >
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center py-4 text-base font-medium text-slate-800 hover:text-amber-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col gap-3 px-4 pt-2">
                  <Link
                    href="/sign-in"
                    className="w-full rounded-full border border-slate-300 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/sign-up"
                    className="w-full rounded-full bg-amber-500 py-3 text-center text-sm font-semibold text-white hover:bg-amber-600 transition-colors"
                  >
                    Get Started Free
                  </Link>
                </div>
              </div>
            </div>
          </header>

          <main>{children}</main>

          <footer className="border-t border-slate-200 bg-slate-50 py-10">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <Link href="/" className="flex items-center gap-2 font-bold text-slate-800">
                  <Hammer className="h-4 w-4 text-amber-500" />
                  <span>Reno<span className="text-amber-500">101</span></span>
                </Link>
                <nav className="flex flex-wrap justify-center gap-4 text-sm text-slate-500" aria-label="Footer navigation">
                  <Link href="/blogs" className="hover:text-amber-600 transition-colors">Guides</Link>
                  <Link href="/tools" className="hover:text-amber-600 transition-colors">Tools</Link>
                  <Link href="/resources" className="hover:text-amber-600 transition-colors">Resources</Link>
                  <Link href="/pricing" className="hover:text-amber-600 transition-colors">Pricing</Link>
                  <Link href="/about" className="hover:text-amber-600 transition-colors">About</Link>
                  <Link href="/privacy" className="hover:text-amber-600 transition-colors">Privacy</Link>
                  <Link href="/terms" className="hover:text-amber-600 transition-colors">Terms</Link>
                </nav>
                <p className="text-xs text-slate-400">&copy; {new Date().getFullYear()} Reno101. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  )
}
