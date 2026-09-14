import { redirect } from "next/navigation"

/** Leftover membership SKU page. Public prices live on /pricing waitlist packs. */
export default function SubscriptionPage() {
  redirect("/pricing")
}
