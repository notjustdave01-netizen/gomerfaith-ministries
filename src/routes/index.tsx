import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main className="flex min-h-[100svh] items-center justify-center bg-[#111111] px-6 py-16 text-center text-white">
      <div className="w-full max-w-xl">
        <img
          src="/logo.png"
          alt="Gomer Faith Ministries"
          className="mx-auto h-20 w-auto"
        />
        <div className="mx-auto mt-10 h-px w-16 bg-[#a01c2b]" />
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-[#f3b5bd]">
          We’ll be back soon
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
          Our website is under maintenance.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
          We are making a few updates to serve you better. Thank you for your patience — we look
          forward to welcoming you back shortly.
        </p>
        <p className="mt-10 text-sm text-white/55">Gomer Faith Ministries · Leyton, London</p>
      </div>
    </main>
  )
}

