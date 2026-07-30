import Link from "next/link"

interface CookiesPageProps {
  siteName: string
  domain: string
  supportEmail?: string
}

export function CookiesPage({
  siteName,
  domain,
  supportEmail = "admin@" + domain,
}: CookiesPageProps) {
  const lastUpdated = "July 29, 2026"

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 mb-3">Legal</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Cookie Policy</h1>
          <p className="text-lg text-slate-600">Last updated: {lastUpdated}</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 md:px-6 py-12">
        <div className="prose prose-slate max-w-none">
          <p className="lead text-lg text-slate-600">
            This Cookie Policy explains how {siteName} uses cookies and similar tracking technologies.
          </p>

          <hr className="my-8" />

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. What Are Cookies</h2>
            <p className="text-slate-700 mb-3">
              Cookies are small text files stored on your device (computer, tablet, phone) when you visit a website.
              They help the website remember your preferences, authenticate your session, and understand how you
              interact with the site. Cookies set by the website owner are called &ldquo;first-party cookies.&rdquo;
              Cookies set by other parties are called &ldquo;third-party cookies.&rdquo;
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. Cookies We Use</h2>

            <h3 className="text-lg font-semibold mb-2">2.1 Essential Cookies</h3>
            <p className="text-slate-700 mb-3">
              Required for the Service to function. Without these, features like user authentication and account
              access cannot work.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 pr-4 font-semibold">Cookie</th>
                    <th className="text-left py-2 pr-4 font-semibold">Provider</th>
                    <th className="text-left py-2 pr-4 font-semibold">Purpose</th>
                    <th className="text-left py-2 font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-2 pr-4 text-slate-700 font-mono text-xs">__session</td>
                    <td className="py-2 pr-4 text-slate-700">Clerk</td>
                    <td className="py-2 pr-4 text-slate-700">Authentication session token</td>
                    <td className="py-2 text-slate-700">Session / persistent</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-slate-700 font-mono text-xs">__client_uat</td>
                    <td className="py-2 pr-4 text-slate-700">Clerk</td>
                    <td className="py-2 pr-4 text-slate-700">Client-side user auth token</td>
                    <td className="py-2 text-slate-700">Session</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-slate-700 font-mono text-xs">__devices</td>
                    <td className="py-2 pr-4 text-slate-700">Clerk</td>
                    <td className="py-2 pr-4 text-slate-700">Device tracking for auth security</td>
                    <td className="py-2 text-slate-700">Persistent</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold mb-2">2.2 Analytics Cookies</h3>
            <p className="text-slate-700 mb-3">
              Help us understand how visitors use the Service — which pages are popular, how users navigate,
              and where errors occur. This data is anonymized and used to improve the site.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 pr-4 font-semibold">Cookie</th>
                    <th className="text-left py-2 pr-4 font-semibold">Provider</th>
                    <th className="text-left py-2 pr-4 font-semibold">Purpose</th>
                    <th className="text-left py-2 font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-2 pr-4 text-slate-700 font-mono text-xs">_vercel_analytics</td>
                    <td className="py-2 pr-4 text-slate-700">Vercel</td>
                    <td className="py-2 pr-4 text-slate-700">Page view and performance analytics</td>
                    <td className="py-2 text-slate-700">Session</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold mb-2">2.3 Preference Cookies</h3>
            <p className="text-slate-700 mb-3">
              Remember your settings and preferences, such as course progress, collapsed sections, or UI state.
              These are first-party cookies specific to {siteName}.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. How to Control Cookies</h2>
            <p className="text-slate-700 mb-3">
              Most browsers allow you to control cookies through their settings:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-1">
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Options → Privacy &amp; Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
              <li><strong>Edge:</strong> Settings → Site permissions → Cookies and site data</li>
            </ul>
            <p className="text-slate-700">
              Blocking essential cookies may prevent the Service from working correctly (e.g., you won&apos;t
              be able to log in or access paid content).
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Third-Party Cookies</h2>
            <p className="text-slate-700 mb-3">
              Some third-party services we use may set their own cookies:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-1">
              <li><strong>Clerk</strong> — authentication cookies (essential)</li>
              <li><strong>Vercel Analytics</strong> — performance and usage analytics</li>
              <li><strong>Stripe</strong> — may set cookies during checkout for fraud detection</li>
            </ul>
            <p className="text-slate-700">
              We do not control these third-party cookies. Refer to each provider&apos;s cookie policy for more
              information.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Changes to This Policy</h2>
            <p className="text-slate-700 mb-3">
              We may update this Cookie Policy as our use of cookies changes or as required by law. The
              &ldquo;Last updated&rdquo; date at the top indicates the most recent revision.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. Contact</h2>
            <p className="text-slate-700">
              For questions about our use of cookies:
            </p>
            <ul className="list-disc pl-6 mt-2 text-slate-700 space-y-1">
              <li>Email: <a href={`mailto:${supportEmail}`} className="text-blue-600 underline">{supportEmail}</a></li>
              <li>Privacy Policy: <Link href="/privacy" className="text-blue-600 underline">{domain}/privacy</Link></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
