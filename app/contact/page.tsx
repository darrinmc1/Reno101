import { Mail, MessageSquare, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const CONTACT_METHODS = [
  { icon: Mail, label: "Email us", value: "hello@renos101.com", desc: "We reply within 24 hours, unless we're up to our elbows in drywall compound." },
  { icon: MessageSquare, label: "Live chat", value: "Available 9am–5pm AEST", desc: "For quick questions like 'is this wall load-bearing?' or 'should I panic about this crack?'" },
  { icon: Clock, label: "Office hours", value: "Mon–Fri, 9am–5pm", desc: "We spend the rest of our time measuring things three times and cutting once." },
]

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-4xl space-y-12 px-4 py-16">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Get In Touch</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Ask us anything
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Whether you&apos;re comparing grout colors at 11 PM or wondering if that crack is structural or
          just the house settling (spoiler: it&apos;s always both), we&apos;re here to help.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {CONTACT_METHODS.map((method) => {
          const Icon = method.icon
          return (
            <div key={method.label} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-slate-900">{method.label}</h2>
              <p className="mt-1 text-sm font-medium text-amber-700">{method.value}</p>
              <p className="mt-2 text-sm text-slate-500">{method.desc}</p>
            </div>
          )
        })}
      </div>

      <div className="rounded-2xl border bg-white p-8 shadow-sm md:p-12">
        <h2 className="text-2xl font-bold text-slate-900">What&apos;s your project?</h2>
        <p className="mt-2 text-slate-600">Tell us about your renovation and we&apos;ll point you in the right direction.</p>

        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input type="text" className="mt-1 block w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" className="mt-1 block w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500" placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Project type</label>
            <select className="mt-1 block w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500">
              <option>Kitchen renovation</option>
              <option>Bathroom renovation</option>
              <option>Home addition</option>
              <option>Full house renovation</option>
              <option>Just exploring ideas</option>
              <option>Something else entirely</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea rows={4} className="mt-1 block w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500" placeholder="Tell us about your renovation dreams and nightmares..." />
          </div>
          <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-amber-700">
            Send message
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  )
}
