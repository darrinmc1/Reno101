import StarterPage from "@/components/starter-page"

export default function AboutPage() {
  return (
    <StarterPage
      eyebrow="Who We Are"
      title="About Renovation Helper"
      description="We exist for people who begin a 'small weekend update' and three hours later are comparing grout colors with the intensity of a hostage negotiator."
      aside="The future version of this page should explain your mission. The current version explains your emotional support strategy for anyone who has ever opened a wall and found surprise noodles of old wiring."
      bullets={[
        "Part renovation guide, part project planner, part polite intervention before someone buys the wrong tile for the fourth time.",
        "Built for homeowners, DIY optimists, and the brave souls who said, 'How hard can it be?' right before removing a load-bearing maybe.",
        "Our long-term job is simple: reduce panic, improve decisions, and keep at least one marriage alive during a kitchen remodel.",
      ]}
      primaryHref="/blogs"
      primaryLabel="Read The Guides"
      secondaryHref="/contact"
      secondaryLabel="Talk To Humans"
    />
  )
}
