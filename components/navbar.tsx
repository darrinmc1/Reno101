"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Hammer, Menu, NotebookPen, PaintBucket, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-18 items-center justify-between py-3">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-2xl bg-primary/10 p-1 shadow-sm">
              <Image 
                src="/logo.png" 
                alt="Renovations Helper Logo" 
                fill
                className="object-contain"
              />
            </div>
            <div className="leading-tight">
              <div className="text-lg font-black tracking-tight text-foreground">RenovationsHelper</div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Plans, prices, fewer regrets</div>
            </div>
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Guides</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[430px] lg:w-[560px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/blogs"
                          className="flex h-full w-full select-none flex-col justify-between rounded-2xl bg-gradient-to-br from-primary/15 via-secondary/80 to-accent/70 p-6 no-underline outline-none transition hover:shadow-md focus:shadow-md"
                        >
                          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 text-primary">
                            <NotebookPen className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="mb-2 mt-6 text-lg font-semibold">Featured Guides</div>
                            <p className="text-sm leading-tight text-foreground/80">
                              Smart renovation advice for kitchens, bathrooms, budgets, and the emotional complexities
                              of choosing grout.
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/blogs" title="Kitchen">
                      Cabinet choices, layout mistakes, and other ways a kitchen can test a relationship.
                    </ListItem>
                    <ListItem href="/blogs" title="Bathroom">
                      Practical planning for the smallest room with the largest power to wreck a budget.
                    </ListItem>
                    <ListItem href="/blogs" title="Sustainability">
                      Better materials, smarter upgrades, and greener choices that do not feel punitive.
                    </ListItem>
                    <ListItem href="/blogs" title="All Guides">
                      Read the full collection without pretending you only came for one article.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[430px] gap-3 p-4 md:w-[560px] md:grid-cols-2 lg:w-[620px]">
                    <ListItem href="/design-tools" title="Design Tools">
                      Mood boards, planning surfaces, and future room tools for people with opinions.
                    </ListItem>
                    <ListItem href="/tools/material-tracker" title="Material Tracker">
                      Price comparisons for anyone tired of discovering fittings are secretly luxury goods.
                    </ListItem>
                    <ListItem href="/research/new" title="Research Request">
                      Ask the oddly specific renovation questions that deserve better than a shrug.
                    </ListItem>
                    <ListItem href="/dashboard" title="Dashboard">
                      Saved ideas, project notes, and your growing empire of renovation tabs.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/resources" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Resources</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/research" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Research</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Pricing</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-white/50 bg-white/55 p-1 shadow-sm md:flex">
            <Link href="/login">
              <Button variant="ghost" className="rounded-full">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="rounded-full bg-primary px-5 text-primary-foreground shadow-sm hover:bg-primary/90">
                Start Free Trial
              </Button>
            </Link>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu" className="rounded-full border border-white/50 bg-white/60">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-l-white/40 bg-[linear-gradient(180deg,rgba(255,250,242,0.98),rgba(246,237,224,0.98))]">
              <div className="flex h-full flex-col">
                <div className="border-b border-border/70 pb-4">
                  <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <PaintBucket className="h-5 w-5" />
                      </span>
                      <div className="leading-tight">
                        <div className="font-black tracking-tight">RenovationsHelper</div>
                        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Tools with taste</div>
                      </div>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="rounded-full">
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <nav className="flex flex-col gap-3 py-6">
                  <NavButton href="/blogs" label="Read The Guides" sublabel="Advice with fewer beige opinions" onClick={() => setIsOpen(false)} />
                  <NavButton href="/design-tools" label="Use The Tools" sublabel="Mood boards and planning surfaces" onClick={() => setIsOpen(false)} />
                  <NavButton href="/resources" label="Resources Library" sublabel="Ebooks, templates, checklists, tools, tips" onClick={() => setIsOpen(false)} />
                  <NavButton href="/research" label="Ask Research" sublabel="For suspicious walls and pricing mysteries" onClick={() => setIsOpen(false)} />
                  <NavButton href="/pricing" label="See Pricing" sublabel="Choose your level of renovation supervision" onClick={() => setIsOpen(false)} />
                </nav>
                <div className="mt-auto rounded-3xl border border-primary/15 bg-white/70 p-4 shadow-sm">
                  <p className="text-sm text-muted-foreground">
                    Start with a guide, a tool, or one carefully worded panic message. All are valid entry points.
                  </p>
                  <div className="mt-4 flex flex-col gap-2">
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full rounded-full">
                        Log in
                      </Button>
                    </Link>
                    <Link href="/signup" onClick={() => setIsOpen(false)}>
                      <Button className="w-full rounded-full">Start Free Trial</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function NavButton({
  href,
  label,
  sublabel,
  onClick,
}: {
  href: string
  label: string
  sublabel: string
  onClick: () => void
}) {
  return (
    <Link href={href} onClick={onClick} className="rounded-2xl border border-border/70 bg-white/70 p-4 transition hover:bg-white">
      <div className="font-medium">{label}</div>
      <div className="mt-1 text-sm text-muted-foreground">{sublabel}</div>
    </Link>
  )
}

const ListItem = React.forwardRef<React.ElementRef<typeof Link>, React.ComponentPropsWithoutRef<typeof Link>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-xl border border-transparent bg-white/70 p-3 leading-none no-underline outline-none transition hover:border-primary/20 hover:bg-white hover:shadow-sm focus:border-primary/20 focus:bg-white focus:shadow-sm",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </Link>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
