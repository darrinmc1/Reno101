import React from 'react';

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Austin, TX',
    project: 'Kitchen Remodel',
    quote: 'I was nervous about going over budget, but the platform helped me save $4,200 compared to my original estimate. The contractor matched my timeline perfectly — done in 3 weeks, just as promised.',
    budgetSaved: '$4,200',
    timelineMet: true,
    satisfactionScore: 9.8,
    avatar: 'SM',
  },
  {
    name: 'James R.',
    location: 'Denver, CO',
    project: 'Bathroom Renovation',
    quote: 'Three bids, all transparent, no surprises. My bathroom was finished 2 days ahead of schedule and came in 12% under budget. I finally feel like I had control over the whole process.',
    budgetSaved: '12% under budget',
    timelineMet: true,
    satisfactionScore: 9.5,
    avatar: 'JR',
  },
  {
    name: 'Linda & Tom K.',
    location: 'Portland, OR',
    project: 'Full Home Renovation',
    quote: 'We were quoted $85,000 elsewhere. Through this platform we found a vetted contractor for $71,000 — same scope, better communication. Every milestone was hit on time.',
    budgetSaved: '$14,000',
    timelineMet: true,
    satisfactionScore: 9.7,
    avatar: 'LK',
  },
  {
    name: 'Marcus D.',
    location: 'Chicago, IL',
    project: 'Basement Finishing',
    quote: 'The cost estimator was spot-on. I budgeted $22,000 and spent $21,400. The project wrapped up exactly on the 6-week timeline. I\'ve already referred two neighbors.',
    budgetSaved: '$600 under budget',
    timelineMet: true,
    satisfactionScore: 9.6,
    avatar: 'MD',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
            Real Results from Real Homeowners
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Renovations Done Right — On Time &amp; Under Budget
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            See how homeowners like you used our platform to take the stress out of renovation planning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4"
            >
              {/* Quote */}
              <p className="text-gray-700 text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Saved {t.budgetSaved}
                </div>
                <div className="flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Timeline Met
                </div>
                <div className="flex items-center gap-1.5 bg-yellow-50 text-yellow-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {t.satisfactionScore}/10 Satisfaction
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.project} &middot; {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-10 flex flex-wrap justify-center gap-8 text-center">
          <div>
            <p className="text-2xl font-bold text-gray-900">96%</p>
            <p className="text-xs text-gray-500 mt-0.5">of projects met timeline</p>
          </div>
          <div className="hidden sm:block w-px bg-gray-200" />
          <div>
            <p className="text-2xl font-bold text-gray-900">$3,800</p>
            <p className="text-xs text-gray-500 mt-0.5">average savings per project</p>
          </div>
          <div className="hidden sm:block w-px bg-gray-200" />
          <div>
            <p className="text-2xl font-bold text-gray-900">9.6/10</p>
            <p className="text-xs text-gray-500 mt-0.5">average satisfaction score</p>
          </div>
          <div className="hidden sm:block w-px bg-gray-200" />
          <div>
            <p className="text-2xl font-bold text-gray-900">4,200+</p>
            <p className="text-xs text-gray-500 mt-0.5">renovations completed</p>
          </div>
        </div>
      </div>
    </section>
  );
}