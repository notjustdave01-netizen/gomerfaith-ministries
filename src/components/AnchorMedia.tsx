import { Play } from 'lucide-react'

export function AnchorMedia() {
  return (
    <section id="anchor" className="bg-[#111111] py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <a href="#watch-latest" className="group relative block aspect-video overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1200&q=80"
            alt="Pastor Michael A Lewis preaching to the congregation"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 shadow-xl transition-transform duration-300 group-hover:scale-110">
              <Play size={28} className="ml-1 text-[#111111]" fill="currentColor" />
            </span>
          </span>
        </a>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#a01c2b]">
            This Week&rsquo;s Message
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            Anchor Your Week
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
            Join Pastor Michael A Lewis and Elder Pauline Lewis for timely, life-giving messages
            that ground you in the Word before the week gets loud.
          </p>
          <a
            href="#watch-latest"
            className="mt-8 inline-flex items-center rounded-[6px] bg-[#a01c2b] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#7f1521] hover:shadow-lg"
          >
            Watch Latest Message
          </a>
        </div>
      </div>
    </section>
  )
}
