import { MapPin } from 'lucide-react'

const EVENTS = [
  {
    day: '14',
    month: 'AUG',
    title: 'Family Focus',
    time: '6:30 PM – 8:00 PM',
    location: 'Destiny House, Main Hall',
  },
  {
    day: '16',
    month: 'AUG',
    title: 'Sunday Worship',
    time: '10:30 AM – 12:30 PM',
    location: 'Destiny House, Main Hall',
  },
  {
    day: '22',
    month: 'AUG',
    title: 'Prayer & Fasting Watch',
    time: '7:00 PM – 9:00 PM',
    location: 'Destiny House, Upper Room',
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
              <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-[6px] bg-[#111111] text-white">
                <span className="text-xs font-semibold uppercase tracking-wide text-white/60">
                  {event.month}
                </span>
                <span className="font-display text-xl font-bold leading-none">{event.day}</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-[#111111]">{event.title}</h3>
                <p className="mt-1 text-sm text-[#111111]/60">{event.time}</p>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-[#111111]/60">
                  <MapPin size={14} />
                  {event.location}
                </p>
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
