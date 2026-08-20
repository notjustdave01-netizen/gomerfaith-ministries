import { Clock, MapPin, Play } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[85vh] flex-col justify-end overflow-hidden bg-[#111111]"
    >
      <img
        src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1920&q=80"
        alt="Congregation with hands raised during worship"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/85" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-32 text-center">
        <p className="animate-fade-up mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
          Welcome to Gomer Faith Ministries
        </p>
        <h1
          className="animate-fade-up max-w-4xl font-display text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl"
          style={{ animationDelay: '0.1s' }}
        >
          Restoring Families and Changing Lives.
        </h1>
        <div
          className="animate-fade-up mt-9 flex flex-col gap-4 sm:flex-row"
          style={{ animationDelay: '0.2s' }}
        >
          <a
            href="#anchor"
            className="flex items-center justify-center gap-2 rounded-[6px] bg-[#a01c2b] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/30 transition-all hover:-translate-y-0.5 hover:bg-[#7f1521] hover:shadow-xl"
          >
            <Play size={16} fill="currentColor" />
            Watch Live
          </a>
          <a
            href="#visit"
            className="flex items-center justify-center rounded-[6px] border border-white/60 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-[#111111]"
          >
            Plan Your Visit
          </a>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-md">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-white/10 px-6 py-6 text-white sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-10">
          <div className="flex items-center gap-3 py-3 sm:py-0 sm:pr-8">
            <Clock size={20} className="shrink-0 text-white/60" />
            <div>
              <p className="text-xs uppercase tracking-wide text-white/60">Sunday Worship</p>
              <p className="text-sm font-semibold">1:00 PM – 2:30 PM</p>
            </div>
          </div>
          <div className="flex items-center gap-3 py-3 sm:py-0 sm:px-8">
            <Clock size={20} className="shrink-0 text-white/60" />
            <div>
              <p className="text-xs uppercase tracking-wide text-white/60">Midweek Service - Prayer Meeting & Bible Study</p>
              <p className="text-sm font-semibold">7:30 PM – 8:30 PM</p>
            </div>
          </div>
          <div className="flex items-center gap-3 py-3 sm:py-0 sm:pl-8">
            <MapPin size={20} className="shrink-0 text-white/60" />
            <div>
              <p className="text-xs uppercase tracking-wide text-white/60">Location</p>
              <p className="text-sm font-semibold">Ground Floor, 31 Dunton Road, Leyton, London, E10 7AF</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
