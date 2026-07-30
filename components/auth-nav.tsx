"use client"

import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"

/**
 * AuthNav — lightweight auth controls for use outside the main navbar.
 * Designed for minimal navbars, mobile menus, or as an add-on to existing layouts.
 */
export function AuthNav() {
  return (
    <div className="flex items-center gap-2">
      <Show when="signed-out">
        <SignInButton mode="modal">
          <Button variant="ghost" size="sm" className="rounded-full">
            Log in
          </Button>
        </SignInButton>
        <SignUpButton mode="modal">
          <Button size="sm" className="rounded-full bg-primary px-4 text-primary-foreground shadow-sm hover:bg-primary/90">
            Sign Up
          </Button>
        </SignUpButton>
      </Show>
      <Show when="signed-in">
        <UserButton
          appearance={{
            elements: {
              avatarBox: "h-8 w-8",
            },
          }}
        />
      </Show>
    </div>
  )
}
