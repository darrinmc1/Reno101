export type UserRole = "admin" | "member"
export type SubscriptionStatus = "inactive" | "trialing" | "active" | "past_due" | "canceled"

export interface Profile {
  id: string
  email: string
  role: UserRole
  subscription_status: SubscriptionStatus
  full_name: string | null
  created_at: string
  updated_at: string
}

export function hasMemberAccess(profile: Profile | null | undefined): boolean {
  if (!profile) return false
  if (profile.role === "admin") return true
  return profile.subscription_status === "active" || profile.subscription_status === "trialing"
}
