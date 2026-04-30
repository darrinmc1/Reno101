import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/40 bg-[linear-gradient(180deg,rgba(248,238,224,0.72),rgba(226,238,230,0.58))] text-foreground">
      <div className="container px-4 py-14 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Reno101</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Warm advice, better tools, and fewer renovation decisions made while standing in fluorescent lighting.
              </p>
            </div>
            <div className="flex gap-3">
              {[
                { href: "#", label: "Facebook", icon: Facebook },
                { href: "#", label: "Twitter", icon: Twitter },
                { href: "#", label: "Instagram", icon: Instagram },
                { href: "#", label: "YouTube", icon: Youtube },
              ].map(({ href, label, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/60 bg-white/75 text-muted-foreground shadow-sm transition hover:border-primary/25 hover:bg-white hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <FooterList
            title="Quick Links"
            links={[
              { href: "/blogs", label: "Renovation Guides" },
              { href: "/design-tools", label: "Design Tools" },
              { href: "/research", label: "Research Service" },
              { href: "/pricing", label: "Pricing" },
              { href: "/about", label: "About Us" },
            ]}
          />

          <FooterList
            title="Popular Reads"
            links={[
              { href: "/blogs", label: "Kitchen Renovations" },
              { href: "/blogs", label: "Bathroom Remodeling" },
              { href: "/blogs", label: "DIY Reality Checks" },
              { href: "/blogs", label: "Budget-Friendly Tips" },
              { href: "/blogs", label: "Sustainability Without Sadness" },
            ]}
          />

          <div className="rounded-[1.75rem] border border-white/60 bg-white/70 p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Useful renovation tips, tasteful opinions, and occasional protection from expensive impulses.
            </p>
            <form className="mt-4 space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                className="rounded-2xl border-white/70 bg-white/85"
              />
              <Button className="w-full rounded-full">Join The List</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            (c) {new Date().getFullYear()} Reno101. Built for ambitious plans and cautious measurements.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground transition hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground transition hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground transition hover:text-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterList({
  title,
  links,
}: {
  title: string
  links: Array<{ href: string; label: string }>
}) {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-sm text-muted-foreground transition hover:text-primary">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
