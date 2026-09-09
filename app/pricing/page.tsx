import TestimonialsSection from '@/components/TestimonialsSection';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Page header */}
      <section className="py-16 px-4 text-center bg-white">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
        <p className="text-gray-500 max-w-lg mx-auto">
          Choose the plan that fits your renovation project. No hidden fees, no surprises.
        </p>
      </section>

      {/* Testimonials — placed above pricing for maximum trust impact */}
      <TestimonialsSection />

      {/* Pricing section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Pick Your Plan</h2>
            <p className="text-gray-500">All plans include access to vetted contractors and our cost estimator.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="border border-gray-200 rounded-2xl p-8 flex flex-col gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Starter</h3>
                <p className="text-gray-500 text-sm mt-1">Perfect for a single room project</p>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-bold text-gray-900">$0</span>
                <span className="text-gray-400 mb-1">/project</span>
              </div>
              <ul className="flex flex-col gap-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> 1 project estimate
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Up to 3 contractor bids
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Basic cost breakdown
                </li>
              </ul>
              <button className="mt-auto w-full py-2.5 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition">
                Get Started Free
              </button>
            </div>

            {/* Pro — highlighted */}
            <div className="border-2 border-indigo-500 rounded-2xl p-8 flex flex-col gap-4 relative shadow-md">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                Most Popular
              </span>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Pro</h3>
                <p className="text-gray-500 text-sm mt-1">For full-room or multi-room renovations</p>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-bold text-gray-900">$49</span>
                <span className="text-gray-400 mb-1">/project</span>
              </div>
              <ul className="flex flex-col gap-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Unlimited estimates
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Up to 10 contractor bids
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Detailed cost breakdown
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Timeline tracking
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Priority support
                </li>
              </ul>
              <button className="mt-auto w-full py-2.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
                Start Pro Plan
              </button>
            </div>

            {/* Enterprise */}
            <div className="border border-gray-200 rounded-2xl p-8 flex flex-col gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Enterprise</h3>
                <p className="text-gray-500 text-sm mt-1">For large-scale or whole-home renovations</p>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-bold text-gray-900">$149</span>
                <span className="text-gray-400 mb-1">/project</span>
              </div>
              <ul className="flex flex-col gap-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Everything in Pro
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Dedicated project manager
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Unlimited contractor bids
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Contract review service
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Post-project satisfaction audit
                </li>
              </ul>
              <button className="mt-auto w-full py-2.5 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition">
                Contact Sales
              </button>
            </div>
          </div>

          {/* Money-back guarantee */}
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700">30-day money-back guarantee.</span>{' '}
              Not satisfied? We&apos;ll refund your plan — no questions asked.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}