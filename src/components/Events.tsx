const EVENTS = [
  {
    month: 'OCT',
    days: '4 · 11 · 18 · 25',
    title: 'Family Focus',
    theme: "Trusting God's plans for your family",
    time: '6:30 PM – 8:00 PM',
  },
  {
    month: 'Every',
    days: 'SUN',
    title: 'Sunday Worship',
    time: '1:00 PM – 2:30 PM',
  },
  {
    month: 'SEP',
    days: '1 – 3',
    title: 'Prayer & Fasting Watch',
    time: '6:00 AM – 4:00 PM',
  },
]

export function Events() {
  return (
    <section id="events" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <h2 className="text-center font-display text-3xl font-bold text-[#111111] sm:text-4xl">
          Upcoming Events
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((event) => (
            <div
              key={event.title}
              className="flex gap-5 rounded-xl border border-black/8 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-16 min-w-16 shrink-0 flex-col items-center justify-center rounded-[6px] bg-[#111111] px-3 text-white">
                <span className="text-xs font-semibold uppercase tracking-wide text-white/60">
                  {event.month}
                </span>
                <span className="whitespace-nowrap font-display text-xl font-bold leading-none">
                  {event.days}
                </span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-[#111111]">{event.title}</h3>
                {event.theme ? (
                  <p className="mt-1 text-sm font-medium text-[#a01c2b]">{event.theme}</p>
                ) : null}
                <p className="mt-1 text-sm text-[#111111]/60">{event.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#all-events"
            className="rounded-[6px] border border-[#111111]/25 px-8 py-3.5 text-sm font-semibold text-[#111111] transition-all hover:border-[#111111] hover:bg-[#111111] hover:text-white"
          >
            See All Events
          </a>
        </div>
      </div>
    </section>
  )
}
