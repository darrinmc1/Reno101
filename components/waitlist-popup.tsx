"use client"

import { useEffect, useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const MAILCHIMP_ACTION_URL =
    "https://gmail.us19.list-manage.com/subscribe/post?u=b8898b94266e53179fa3bc7ff&id=cc2cbb82cb&f_id=001af7e3f0"
const HONEYPOT_FIELD_NAME = "b_b8898b94266e53179fa3bc7ff_cc2cbb82cb"
const POPUP_STORAGE_KEY = "renos101-waitlist-seen"

const SHOW_AFTER_MS = 5000
const SUPPRESS_DAYS = 30

export function WaitlistPopup() {
    const [isOpen, setIsOpen] = useState(false)
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        const lastSeen = localStorage.getItem(POPUP_STORAGE_KEY)
        if (lastSeen) {
            const daysSince =
                (Date.now() - parseInt(lastSeen, 10)) / (1000 * 60 * 60 * 24)
            if (daysSince < SUPPRESS_DAYS) return
        }
        const timer = setTimeout(() => setIsOpen(true), SHOW_AFTER_MS)
        return () => clearTimeout(timer)
    }, [])

    const markSeen = () => localStorage.setItem(POPUP_STORAGE_KEY, Date.now().toString())
    const handleClose = () => { setIsOpen(false); markSeen() }
    const handleSubmit = () => markSeen()

    return (
        <Dialog open={isOpen} onOpenChange={(open) => { if (!open) handleClose() }}>
            <DialogContent
                className="sm:max-w-md"
                onPointerDownOutside={(e) => e.preventDefault()}
                onEscapeKeyDown={(e) => e.preventDefault()}
            >
                <DialogHeader>
                    <DialogTitle className="text-2xl">
                        🏠 Get 50% off Renos101
                    </DialogTitle>
                    <DialogDescription className="text-base pt-2">
                        Join the waitlist and lock in founder pricing — 50% off when we launch. Everything you need to tackle your home renovation.
                    </DialogDescription>
                </DialogHeader>

                {!submitted ? (
                    <>
                        <iframe
                            name="mailchimp-target"
                            style={{ display: "none" }}
                            title="Mailchimp submission target"
                            onLoad={() => { if (email) setSubmitted(true) }}
                        />
                        <form
                            action={MAILCHIMP_ACTION_URL}
                            method="post"
                            target="mailchimp-target"
                            onSubmit={handleSubmit}
                            className="space-y-4 pt-2"
                        >
                            <Input
                                type="email"
                                name="EMAIL"
                                required
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full"
                            />
                            <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                                <input type="text" name={HONEYPOT_FIELD_NAME} tabIndex={-1} defaultValue="" />
                            </div>
                            <Button type="submit" className="w-full">
                                Join the Waitlist — Get 50% Off
                            </Button>
                            <p className="text-xs text-muted-foreground text-center">
                                Founder pricing locked in for early subscribers. No spam, unsubscribe anytime.
                            </p>
                        </form>
                    </>
                ) : (
                    <div className="py-4 text-center space-y-3">
                        <p className="text-lg font-semibold">You&apos;re on the list! 🎉</p>
                        <p className="text-sm text-muted-foreground">
                            We&apos;ll email your 50% discount code the day we launch.
                        </p>
                        <Button onClick={handleClose} variant="outline" className="mt-2">
                            Close
                        </Button>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    )
}
