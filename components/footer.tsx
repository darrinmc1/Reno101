import Link from "next/link"
import { FooterNewsletterForm } from "@/components/footer-newsletter-form"

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/40 bg-[linear-gradient(180deg,rgba(248,238,224,0.72),rgba(226,238,230,0.58))] text-foreground">
      <div className="container px-4 py-14 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Renos101</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Warm advice, better tools, and fewer renovation decisions made while standing in fluorescent lighting.
              </p>
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
              { href: "/blogs?category=Kitchen", label: "Kitchen Renovations" },
              { href: "/blogs?category=Bathroom", label: "Bathroom Remodeling" },
              { href: "/blogs?category=DIY", label: "DIY Reality Checks" },
              { href: "/blogs/eco-friendly-renovations-save-money", label: "Budget-Friendly Tips" },
              { href: "/blogs?category=Sustainability", label: "Sustainability Without Sadness" },
            ]}
          />

          <div className="rounded-[1.75rem] border border-white/60 bg-white/70 p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Useful renovation tips, tasteful opinions, and occasional protection from expensive impulses.
            </p>
            <FooterNewsletterForm />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            (c) {new Date().getFullYear()} Renos101. Built for ambitious plans and cautious measurements.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground transition hover:text-primary">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground transition hover:text-primary">
              Privacy
            </Link>
            <Link href="/cookies" className="text-sm text-muted-foreground transition hover:text-primary">
              Cookies
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground transition hover:text-primary">
              Contact
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
