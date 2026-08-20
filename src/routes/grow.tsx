import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, HeartHandshake, Sparkles } from 'lucide-react'

export const Route = createFileRoute('/grow')({
  component: GrowPage,
})

function GrowPage() {
  return (
    <div className="min-h-screen bg-[#fbfaf8] font-body text-[#111111]">
      <section className="relative isolate overflow-hidden bg-[#111111] px-6 pb-24 pt-36 text-white lg:px-10 lg:pb-32">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/gomer-faith-congregation.jpg')" }}
        />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(160,28,43,0.9),_transparent_45%),linear-gradient(125deg,_rgba(17,17,17,0.98),_rgba(17,17,17,0.76))]" />
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f3b5bd]">Find your next step</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Grow with Gomer Faith Ministries
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Whether you are new to faith or ready to take the next step, there is a place for you here.
          </p>
        </div>
      </section>

      <main className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-24">
        <section id="newcomers" className="group overflow-hidden rounded-2xl bg-white shadow-[0_16px_50px_rgba(17,17,17,0.08)]">
          <div className="h-3 bg-[#a01c2b]" />
          <div className="p-8 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f8e9eb] text-[#a01c2b]">
              <HeartHandshake size={23} aria-hidden="true" />
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-[#a01c2b]">Connect</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight">Newcomers Luncheon</h2>
            <h3 className="mt-4 text-lg font-semibold">It&apos;s time for something new</h3>
            <p className="mt-4 max-w-md leading-relaxed text-[#111111]/70">
              Welcome to Gomer Faith Ministries, and we&apos;re excited to connect with you. We would all be friends in this
              community. At Gomer Faith Ministries, during our Newcomers Luncheon.
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-[#111111]/70">
              Get to know our vision and values while also making the chance to become part of an amazing community.
            </p>
            <a
              href="#newcomers"
              className="mt-8 inline-flex items-center gap-2 rounded-[6px] bg-[#a01c2b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7f1521]"
            >
              Find out more <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section id="baptism" className="overflow-hidden rounded-2xl bg-[#111111] text-white shadow-[0_16px_50px_rgba(17,17,17,0.12)]">
          <div className="h-3 bg-[#d8aa53]" />
          <div className="p-8 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#f4d18e]">
              <Sparkles size={22} aria-hidden="true" />
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-[#f4d18e]">Faith</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight">Ready for Baptism?</h2>
            <h3 className="mt-4 text-lg font-medium text-white/90">What&apos;s Your Next Step?</h3>
            <p className="mt-4 max-w-md leading-relaxed text-white/70">
              You may be thinking, I&apos;ve done it before, now what? You probably still have questions about your decision.
              You may even have doubts. That&apos;s okay! Don&apos;t let those questions or doubts stop you from moving forward.
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-white/70">
              Don&apos;t let your doubts and get your faith and get answers to your questions.
            </p>
            <a
              href="#baptism"
              className="mt-8 inline-flex items-center gap-2 rounded-[6px] bg-white px-5 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#f4d18e]"
            >
              Find out more <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
