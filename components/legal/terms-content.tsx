import Link from "next/link"

interface TermsPageProps {
  siteName: string
  domain: string
  supportEmail?: string
  companyName?: string
}

export function TermsPage({ siteName, domain, supportEmail = "admin@" + domain, companyName = siteName }: TermsPageProps) {
  const lastUpdated = "July 29, 2026"

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 mb-3">Legal</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Terms &amp; Conditions</h1>
          <p className="text-lg text-slate-600">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 md:px-6 py-12">
        <div className="prose prose-slate max-w-none">
          <p className="lead text-lg text-slate-600">
            Please read these Terms &amp; Conditions (&ldquo;Terms&rdquo;) carefully before using the {siteName} website
            (the &ldquo;Service&rdquo;), operated by {companyName} (&ldquo;us,&rdquo; &ldquo;we,&rdquo; or &ldquo;our&rdquo;).
          </p>

          <p className="text-sm text-slate-500 mt-2">
            By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part,
            you may not access the Service. These Terms apply to all visitors, users, and others who access or use the Service.
          </p>

          <hr className="my-8" />

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Accounts</h2>
            <p className="text-slate-700 mb-3">
              When you create an account with us, you guarantee that the information you provide is accurate, complete,
              and current at all times. Inaccurate, incomplete, or obsolete information may result in immediate termination
              of your account.
            </p>
            <p className="text-slate-700 mb-3">
              You are responsible for safeguarding the password and for any activities or actions under your account.
              You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
            <p className="text-slate-700">
              We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders at our
              sole discretion.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. Free vs. Paid Content</h2>
            <h3 className="text-lg font-semibold mb-2">2.1 Free Content</h3>
            <p className="text-slate-700 mb-3">
              {siteName} offers a selection of free courses, tools, templates, and resources. Free content is provided
              &ldquo;as is&rdquo; without warranty, and we may modify or discontinue any free offering at any time without notice.
            </p>
            <h3 className="text-lg font-semibold mb-2">2.2 Paid Content &amp; Subscriptions</h3>
            <p className="text-slate-700 mb-3">
              Certain content, features, courses, and tools require payment. Paid offerings include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-1">
              <li><strong>One-time purchases</strong> — individual courses, templates, or tools</li>
              <li><strong>Subscription plans</strong> — recurring access to premium content, billed monthly or annually</li>
              <li><strong>Professional services</strong> — consulting, coaching, or custom work (governed by separate agreement)</li>
            </ul>
            <p className="text-slate-700">
              All prices are listed in US Dollars (USD) unless otherwise stated. We reserve the right to change prices
              at any time, but changes will not affect active subscriptions until the next billing period.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. Payments &amp; Billing</h2>
            <p className="text-slate-700 mb-3">
              Payments are processed securely through third-party payment processors (e.g., Stripe). We do not store
              full credit card numbers on our servers. By providing payment information, you represent that you are
              authorized to use the payment method and authorize us to charge the applicable fees.
            </p>
            <p className="text-slate-700 mb-3">
              <strong>Subscription billing:</strong> Your subscription will auto-renew at the end of each billing cycle
              unless you cancel before the renewal date. You may cancel at any time from your account dashboard. Upon
              cancellation, you retain access to paid content until the end of the current billing period.
            </p>
            <p className="text-slate-700">
              We reserve the right to suspend or terminate access if payment is not received on time.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Refund Policy</h2>
            <p className="text-slate-700 mb-3">
              We want you to be satisfied with your purchase. Our refund policy is as follows:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-1">
              <li><strong>Digital courses &amp; templates:</strong> Due to the digital nature of our products, all sales are final. If you experience technical issues preventing access, contact us and we will resolve the issue or issue a refund at our discretion.</li>
              <li><strong>Subscription plans:</strong> You may cancel at any time. Refunds are provided on a case-by-case basis. If you cancel within 14 days of signing up and have consumed minimal content, we may issue a prorated refund.</li>
              <li><strong>Billing errors:</strong> Duplicate or incorrect charges will be refunded in full upon verification.</li>
            </ul>
            <p className="text-slate-700">
              To request a refund, contact <a href={`mailto:${supportEmail}`} className="text-blue-600 underline">{supportEmail}</a>.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
            <p className="text-slate-700 mb-3">
              All content on {siteName} — including courses, lessons, templates, tools, articles, graphics, logos,
              and code — is the property of {companyName} or its content creators and is protected by applicable
              intellectual property laws.
            </p>
            <p className="text-slate-700 mb-3">
              <strong>What you may do:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-1">
              <li>Access and view content for your personal, non-commercial use</li>
              <li>Download templates for your own business use</li>
              <li>Share links to public pages on social media</li>
            </ul>
            <p className="text-slate-700 mb-3">
              <strong>What you may NOT do:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-1">
              <li>Re-sell, redistribute, or sublicense any content or templates</li>
              <li>Reproduce courses or materials for commercial training programs without written permission</li>
              <li>Copy, modify, or create derivative works of the platform itself</li>
              <li>Use our content to train AI models or for similar machine-learning purposes</li>
            </ul>
            <p className="text-slate-700">
              If you believe your intellectual property has been infringed, contact us at {supportEmail}.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. User Conduct</h2>
            <p className="text-slate-700 mb-3">
              You agree not to use the Service for any unlawful purpose or in violation of these Terms. Prohibited
              behavior includes:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-1">
              <li>Attempting to access accounts, systems, or data without authorization</li>
              <li>Uploading malicious code, viruses, or harmful content</li>
              <li>Interfering with the operation of the Service</li>
              <li>Harassing, abusing, or threatening other users or staff</li>
              <li>Using automated tools (scrapers, bots) to extract content without permission</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">7. Third-Party Services</h2>
            <p className="text-slate-700 mb-3">
              The Service may contain links to third-party websites or services that are not owned or controlled by us.
              We have no control over and assume no responsibility for the content, privacy policies, or practices of
              any third-party websites.
            </p>
            <p className="text-slate-700">
              We use third-party services for payment processing (Stripe), authentication (Clerk), analytics (Vercel),
              and email delivery. These services have their own terms and privacy policies governing their use of your data.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
            <p className="text-slate-700 mb-3">
              To the fullest extent permitted by applicable law, {companyName} shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising out of or related to your use of the
              Service, whether based on warranty, contract, tort (including negligence), or any other legal theory.
            </p>
            <p className="text-slate-700">
              The educational content provided is for informational purposes only and does not constitute professional
              advice. Always consult qualified professionals for advice specific to your situation.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
            <p className="text-slate-700 mb-3">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason,
              including breach of these Terms. Upon termination, your right to use the Service ceases immediately.
            </p>
            <p className="text-slate-700">
              If you wish to terminate your account, you may simply discontinue using the Service or delete your account
              from your account settings. Sections 5 (Intellectual Property), 8 (Limitation of Liability), and 11
              (Governing Law) survive termination.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">10. Changes to Terms</h2>
            <p className="text-slate-700 mb-3">
              We reserve the right to modify or replace these Terms at any time. Material changes will be notified
              via email (if you have an account) or by posting a notice on the Service. Your continued use of the
              Service after any changes constitutes acceptance of the new Terms.
            </p>
            <p className="text-slate-700">
              It is your responsibility to review these Terms periodically. The &ldquo;Last updated&rdquo; date at the
              top of this page indicates when changes were last made.
            </p>
          </section>

          {/* Section 11 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
            <p className="text-slate-700">
              These Terms shall be governed and construed in accordance with the laws of the State of Delaware, United
              States, without regard to its conflict of law provisions. Our failure to enforce any right or provision
              of these Terms will not be considered a waiver of those rights.
            </p>
          </section>

          {/* Section 12 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">12. Contact</h2>
            <p className="text-slate-700">
              If you have any questions about these Terms, please contact us:
            </p>
            <ul className="list-disc pl-6 mt-2 text-slate-700 space-y-1">
              <li>Email: <a href={`mailto:${supportEmail}`} className="text-blue-600 underline">{supportEmail}</a></li>
              <li>Website: <Link href={`https://${domain}/contact`} className="text-blue-600 underline">{domain}/contact</Link></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
