import Link from "next/link"

interface PrivacyPageProps {
  siteName: string
  domain: string
  supportEmail?: string
  companyName?: string
  address?: string
}

export function PrivacyPage({
  siteName,
  domain,
  supportEmail = "admin@" + domain,
  companyName = siteName,
  address = "",
}: PrivacyPageProps) {
  const lastUpdated = "July 29, 2026"

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 mb-3">Legal</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Privacy Policy</h1>
          <p className="text-lg text-slate-600">Last updated: {lastUpdated}</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 md:px-6 py-12">
        <div className="prose prose-slate max-w-none">
          <p className="lead text-lg text-slate-600">
            {companyName} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the {siteName} website
            (the &ldquo;Service&rdquo;). This page explains how we collect, use, and protect your personal information.
          </p>
          <p className="text-sm text-slate-500 mt-2">
            By using the Service, you agree to the collection and use of information in accordance with this policy.
          </p>

          <hr className="my-8" />

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>

            <h3 className="text-lg font-semibold mb-2">1.1 Information You Provide</h3>
            <p className="text-slate-700 mb-3">
              When you create an account, purchase a course, or contact us, we collect:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-1">
              <li>Name and email address</li>
              <li>Account credentials (password — stored as a salted hash)</li>
              <li>Billing information (processed securely by Stripe — we never store full card numbers)</li>
              <li>Any content you submit via contact forms, topic requests, or feedback</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">1.2 Information Collected Automatically</h3>
            <p className="text-slate-700 mb-3">
              When you visit the Service, we automatically collect:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-1">
              <li>IP address, browser type, device information</li>
              <li>Pages visited, time spent, and navigation patterns</li>
              <li>Referral source (how you found the site)</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="text-slate-700 mb-3">We use collected information for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-1">
              <li>To provide and maintain the Service — deliver courses, templates, and tools</li>
              <li>To process payments and manage subscriptions</li>
              <li>To communicate with you — send course updates, account notifications, and support responses</li>
              <li>To improve the Service — analyze usage patterns and fix issues</li>
              <li>To detect and prevent fraud, abuse, or security incidents</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. Third-Party Services</h2>
            <p className="text-slate-700 mb-3">
              We use trusted third-party services to operate the Service. Each has its own privacy policy:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 pr-4 font-semibold">Service</th>
                    <th className="text-left py-2 pr-4 font-semibold">Purpose</th>
                    <th className="text-left py-2 font-semibold">Data shared</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-2 pr-4 text-slate-700">Stripe</td>
                    <td className="py-2 pr-4 text-slate-700">Payment processing</td>
                    <td className="py-2 text-slate-700">Name, email, billing address, card details (tokenized)</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-slate-700">Clerk</td>
                    <td className="py-2 pr-4 text-slate-700">Authentication</td>
                    <td className="py-2 text-slate-700">Email, name, account credentials, login metadata</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-slate-700">Supabase</td>
                    <td className="py-2 pr-4 text-slate-700">Database & storage</td>
                    <td className="py-2 text-slate-700">Account data, course progress, user content</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-slate-700">Resend</td>
                    <td className="py-2 pr-4 text-slate-700">Email delivery</td>
                    <td className="py-2 text-slate-700">Email address, message content</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-slate-700">Vercel</td>
                    <td className="py-2 pr-4 text-slate-700">Hosting & analytics</td>
                    <td className="py-2 text-slate-700">IP address, page views, performance data</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Cookies</h2>
            <p className="text-slate-700 mb-3">
              We use cookies and similar tracking technologies to track activity on our Service and hold certain
              information. Cookies are files with a small amount of data sent to your browser from a website.
            </p>
            <p className="text-slate-700 mb-3">
              <strong>Types of cookies we use:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-1">
              <li><strong>Essential cookies</strong> — required for authentication and site functionality (Clerk session cookies)</li>
              <li><strong>Preference cookies</strong> — remember your settings and course progress</li>
              <li><strong>Analytics cookies</strong> — help us understand how visitors use the site (Vercel Analytics)</li>
            </ul>
            <p className="text-slate-700">
              You can control cookies through your browser settings. Disabling essential cookies may prevent the
              Service from functioning properly. See our <Link href="/cookies" className="text-blue-600 underline">Cookie Policy</Link> for full details.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Data Storage &amp; Security</h2>
            <p className="text-slate-700 mb-3">
              Your data is stored securely on Supabase (database) and Vercel (hosting infrastructure), both of which
              maintain industry-standard physical and digital security measures including encryption at rest and in transit.
            </p>
            <p className="text-slate-700 mb-3">
              We implement commercially reasonable security practices to protect your data, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-1">
              <li>SSL/TLS encryption for all data in transit</li>
              <li>Password hashing (bcrypt or similar)</li>
              <li>API keys and secrets stored as environment variables, never in code</li>
              <li>Regular security updates and dependency audits</li>
            </ul>
            <p className="text-slate-700">
              No method of transmission or storage is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
            <p className="text-slate-700 mb-3">
              We retain your personal information for as long as your account is active or as needed to provide the Service.
              When you delete your account, we delete or anonymize your personal data within 30 days, unless we are
              required to retain it for legal, tax, or fraud-prevention purposes.
            </p>
            <p className="text-slate-700">
              Payment records may be retained longer to comply with financial regulations and tax obligations.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
            <p className="text-slate-700 mb-3">
              Depending on your jurisdiction, you have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-1">
              <li><strong>Access</strong> — request a copy of the data we hold about you</li>
              <li><strong>Correction</strong> — request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion</strong> — request deletion of your data (subject to legal retention requirements)</li>
              <li><strong>Portability</strong> — request transfer of your data in a machine-readable format</li>
              <li><strong>Objection</strong> — object to processing of your data for analytics or marketing</li>
              <li><strong>Withdrawal of consent</strong> — withdraw consent at any time where processing is based on consent</li>
            </ul>
            <p className="text-slate-700">
              To exercise any of these rights, contact us at <a href={`mailto:${supportEmail}`} className="text-blue-600 underline">{supportEmail}</a>.
              We will respond within 30 days.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">8. Children&apos;s Privacy</h2>
            <p className="text-slate-700 mb-3">
              The Service is not intended for individuals under the age of 16. We do not knowingly collect personal
              information from children. If you are a parent or guardian and believe your child has provided us with
              personal data, please contact us and we will take steps to delete that information.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
            <p className="text-slate-700 mb-3">
              We may update our Privacy Policy from time to time. Material changes will be notified via email
              (if you have an account) or by posting a notice on the Service. The &ldquo;Last updated&rdquo; date
              at the top of this page reflects the most recent revision.
            </p>
            <p className="text-slate-700">
              Your continued use of the Service after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">10. Contact</h2>
            <p className="text-slate-700 mb-3">
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-1">
              <li>Email: <a href={`mailto:${supportEmail}`} className="text-blue-600 underline">{supportEmail}</a></li>
              <li>Website: <Link href={`https://${domain}/contact`} className="text-blue-600 underline">{domain}/contact</Link></li>
              {address && <li>Address: {address}</li>}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
