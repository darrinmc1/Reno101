import { Metadata } from "next";
import Link from "next/link";
import { Check, X, HelpCircle, Zap, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Pricing | Renos101 – Plans for Every Renovation Project",
  description:
    "Compare Renos101 plans. Get transparent pricing, full feature breakdowns, and find the right tier for your renovation project — from first-time DIYers to seasoned contractors.",
};

const tiers = [
  {
    id: "free",
    name: "Starter",
    price: 0,
    billingNote: "Free forever",
    description: "Explore the basics and plan your first renovation with confidence.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlight: false,
    badge: null,
    icon: <Zap className="w-5 h-5" />,
    features: [
      { label: "5 renovation project plans", included: true },
      { label: "Access to renovation stage guides", included: true },
      { label: "Basic cost estimator", included: true },
      { label: "Community Q&A access", included: true },
      { label: "Material tracker (up to 10 items)", included: true },
      { label: "AI renovation assistant", included: false },
      { label: "Unlimited project plans", included: false },
      { label: "Priority email support", included: false },
      { label: "Contractor comparison tools", included: false },
      { label: "Advanced design tools", included: false },
      { label: "Downloadable permit checklists", included: false },
      { label: "Custom budget reports", included: false },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 19,
    billingNote: "per month, billed monthly",
    annualPrice: 15,
    annualNote: "per month, billed annually — save 21%",
    description: "Everything you need to manage a full renovation from start to finish.",
    cta: "Start 7-Day Free Trial",
    ctaHref: "/sign-up?plan=pro",
    highlight: true,
    badge: "Most Popular",
    icon: <Star className="w-5 h-5" />,
    features: [
      { label: "5 renovation project plans", included: true },
      { label: "Access to renovation stage guides", included: true },
      { label: "Basic cost estimator", included: true },
      { label: "Community Q&A access", included: true },
      { label: "Material tracker (up to 10 items)", included: true },
      { label: "AI renovation assistant", included: true },
      { label: "Unlimited project plans", included: true },
      { label: "Priority email support", included: true },
      { label: "Contractor comparison tools", included: true },
      { label: "Advanced design tools", included: true },
      { label: "Downloadable permit checklists", included: true },
      { label: "Custom budget reports", included: false },
    ],
  },
  {
    id: "contractor",
    name: "Contractor",
    price: 49,
    billingNote: "per month, billed monthly",
    annualPrice: 39,
    annualNote: "per month, billed annually — save 20%",
    description: "Built for professionals managing multiple clients and projects simultaneously.",
    cta: "Start 7-Day Free Trial",
    ctaHref: "/sign-up?plan=contractor",
    highlight: false,
    badge: "Best for Pros",
    icon: <Shield className="w-5 h-5" />,
    features: [
      { label: "5 renovation project plans", included: true },
      { label: "Access to renovation stage guides", included: true },
      { label: "Basic cost estimator", included: true },
      { label: "Community Q&A access", included: true },
      { label: "Material tracker (up to 10 items)", included: true },
      { label: "AI renovation assistant", included: true },
      { label: "Unlimited project plans", included: true },
      { label: "Priority email support", included: true },
      { label: "Contractor comparison tools", included: true },
      { label: "Advanced design tools", included: true },
      { label: "Downloadable permit checklists", included: true },
      { label: "Custom budget reports", included: true },
    ],
  },
];

const comparisonCategories = [
  {
    category: "Project Management",
    rows: [
      {
        feature: "Project plans",
        starter: "Up to 5",
        pro: "Unlimited",
        contractor: "Unlimited",
      },
      {
        feature: "Material tracker items",
        starter: "Up to 10",
        pro: "Unlimited",
        contractor: "Unlimited",
      },
      {
        feature: "Custom budget reports",
        starter: false,
        pro: false,
        contractor: true,
      },
    ],
  },
  {
    category: "Tools & Resources",
    rows: [
      {
        feature: "Renovation stage guides",
        starter: true,
        pro: true,
        contractor: true,
      },
      {
        feature: "Basic cost estimator",
        starter: true,
        pro: true,
        contractor: true,
      },
      {
        feature: "Advanced design tools",
        starter: false,
        pro: true,
        contractor: true,
      },
      {
        feature: "Downloadable permit checklists",
        starter: false,
        pro: true,
        contractor: true,
      },
      {
        feature: "Contractor comparison tools",
        starter: false,
        pro: true,
        contractor: true,
      },
    ],
  },
  {
    category: "AI & Automation",
    rows: [
      {
        feature: "AI renovation assistant",
        starter: false,
        pro: true,
        contractor: true,
      },
      {
        feature: "Smart cost suggestions",
        starter: false,
        pro: true,
        contractor: true,
      },
    ],
  },
  {
    category: "Support",
    rows: [
      {
        feature: "Community Q&A",
        starter: true,
        pro: true,
        contractor: true,
      },
      {
        feature: "Priority email support",
        starter: false,
        pro: true,
        contractor: true,
      },
      {
        feature: "Dedicated account manager",
        starter: false,
        pro: false,
        contractor: true,
      },
    ],
  },
];

const faqs = [
  {
    q: "Can I switch plans at any time?",
    a: "Yes. You can upgrade or downgrade your plan at any time from your account settings. Upgrades take effect immediately; downgrades apply at the start of your next billing cycle.",
  },
  {
    q: "Is there a free trial for paid plans?",
    a: "Both Pro and Contractor plans include a 7-day free trial. No credit card is required to start — you'll only be charged if you choose to continue after the trial ends.",
  },
  {
    q: "What happens to my projects if I downgrade?",
    a: "Your data is never deleted. If you downgrade to Starter, projects beyond the 5-plan limit become read-only until you upgrade again or archive older projects.",
  },
  {
    q: "Do you offer annual billing discounts?",
    a: "Yes. Choosing annual billing saves you approximately 20% compared to monthly billing. You can switch to annual billing at any time from your account settings.",
  },
  {
    q: "Is Renos101 suitable for professional contractors?",
    a: "Absolutely. The Contractor plan is purpose-built for professionals managing multiple client projects. It includes custom budget reports, a dedicated account manager, and unlimited project plans.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit and debit cards (Visa, Mastercard, Amex) as well as PayPal. All payments are processed securely.",
  },
  {
    q: "Can I get a refund?",
    a: "If you're not satisfied within the first 14 days of a paid plan, contact our support team for a full refund — no questions asked.",
  },
];

function FeatureCell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-5 h-5 text-green-500 mx-auto" aria-label="Included" />
    ) : (
      <X className="w-5 h-5 text-gray-300 mx-auto" aria-label="Not included" />
    );
  }
  return <span className="text-sm text-gray-700 font-medium">{value}</span>;
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-16 px-4 text-center">
        <Badge variant="outline" className="mb-4 text-orange-600 border-orange-300 bg-orange-50">
          Transparent Pricing
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Plans that grow with your renovation
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Whether you&apos;re tackling your first bathroom refresh or managing a full home build for a client, Renos101 has a plan to keep you on budget and on schedule.
        </p>
        <p className="text-sm text-gray-500">
          All paid plans include a <strong>7-day free trial</strong>. No credit card required.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-2xl border-2 p-8 flex flex-col ${
                tier.highlight
                  ? "border-orange-500 shadow-xl shadow-orange-100 bg-white"
                  : "border-gray-200 bg-white shadow-sm"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge
                    className={`px-4 py-1 text-sm font-semibold ${
                      tier.highlight
                        ? "bg-orange-500 text-white hover:bg-orange-500"
                        : "bg-gray-800 text-white hover:bg-gray-800"
                    }`}
                  >
                    {tier.badge}
                  </Badge>
                </div>
              )}

              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`p-2 rounded-lg ${
                    tier.highlight ? "bg-orange-100 text-orange-600" : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {tier.icon}
                </span>
                <h2 className="text-xl font-bold text-gray-900">{tier.name}</h2>
              </div>

              <p className="text-gray-500 text-sm mb-6">{tier.description}</p>

              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {tier.price === 0 ? "Free" : `$${tier.price}`}
                  </span>
                  {tier.price > 0 && (
                    <span className="text-gray-500 text-sm mb-1">/mo</span>
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-1">{tier.billingNote}</p>
                {tier.annualPrice && (
                  <p className="text-xs text-green-600 font-medium mt-1">
                    Or ${tier.annualPrice}/mo — {tier.annualNote.split("—")[1].trim()}
                  </p>
                )}
              </div>

              <Link href={tier.ctaHref} className="mb-8">
                <Button
                  className={`w-full font-semibold ${
                    tier.highlight
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : "bg-gray-900 hover:bg-gray-800 text-white"
                  }`}
                  size="lg"
                >
                  {tier.cta}
                </Button>
              </Link>

              <ul className="space-y-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f.label} className="flex items-start gap-3">
                    {f.included ? (
                      <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-gray-300 mt-0.5 shrink-0" />
                    )}
                    <span
                      className={`text-sm ${
                        f.included ? "text-gray-700" : "text-gray-400"
                      }`}
                    >
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Full Comparison Table */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Full feature comparison</h2>
          <p className="text-gray-500">See exactly what&apos;s included in every plan.</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-4 px-6 font-semibold text-gray-700 w-1/2">Feature</th>
                {tiers.map((tier) => (
                  <th
                    key={tier.id}
                    className={`py-4 px-4 text-center font-semibold ${
                      tier.highlight ? "text-orange-600" : "text-gray-700"
                    }`}
                  >
                    {tier.name}
                    {tier.highlight && (
                      <span className="block text-xs font-normal text-orange-400">Most Popular</span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonCategories.map((cat) => (
                <>
                  <tr key={cat.category} className="bg-orange-50">
                    <td
                      colSpan={4}
                      className="py-3 px-6 font-semibold text-orange-700 text-xs uppercase tracking-wider"
                    >
                      {cat.category}
                    </td>
                  </tr>
                  {cat.rows.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-gray-100 ${
                        i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                      }`}
                    >
                      <td className="py-3 px-6 text-gray-700">{row.feature}</td>
                      <td className="py-3 px-4 text-center">
                        <FeatureCell value={row.starter} />
                      </td>
                      <td className="py-3 px-4 text-center bg-orange-50/30">
                        <FeatureCell value={row.pro} />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <FeatureCell value={row.contractor} />
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Social Proof / Trust Strip */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm uppercase tracking-wider font-medium mb-6">
            Trusted by homeowners and contractors across Canada
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The Pro plan paid for itself in the first week — I caught a $2,400 material overrun before it happened.",
                author: "Sarah M., Toronto",
                role: "First-time homeowner",
              },
              {
                quote:
                  "I manage 6 client projects at once. The Contractor plan keeps everything organized without the spreadsheet chaos.",
                author: "Derek L., Vancouver",
                role: "General Contractor",
              },
              {
                quote:
                  "Started on the free plan, upgraded to Pro after day two. The AI assistant alone is worth it.",
                author: "Priya K., Calgary",
                role: "DIY renovator",
              },
            ].map((t) => (
              <div key={t.author} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-left">
                <p className="text-gray-700 text-sm italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-gray-900 font-semibold text-sm">{t.author}</p>
                <p className="text-gray-400 text-xs">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <HelpCircle className="w-6 h-6 text-orange-500" />
            <h2 className="text-3xl font-bold text-gray-900">Frequently asked questions</h2>
          </div>
          <p className="text-gray-500">
            Still have questions?{" "}
            <Link href="/contact" className="text-orange-500 hover:underline font-medium">
              Contact our team
            </Link>
            .
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-gray-200 rounded-xl px-6 shadow-sm bg-white"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-800 hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm pb-5 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Final CTA */}
      <section className="bg-orange-500 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to renovate smarter?
        </h2>
        <p className="text-orange-100 mb-8 max-w-xl mx-auto">
          Join thousands of homeowners and contractors who plan, track, and complete renovations on time and on budget with Renos101.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/sign-up">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8">
              Start Free — No Credit Card
            </Button>
          </Link>
          <Link href="/sign-up?plan=pro">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-orange-600 font-semibold px-8"
            >
              Try Pro Free for 7 Days
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
