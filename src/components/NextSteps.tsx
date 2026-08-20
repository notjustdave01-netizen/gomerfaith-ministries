const STEPS = [
  {
    title: 'Salvation',
    subtext: 'Begin your journey.',
    href: '#salvation',
    image:
      'https://images.unsplash.com/photo-1445633629932-0029acc44e88?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Membership',
    subtext: 'Make GFM your home.',
    href: '#membership',
    image:
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Volunteer',
    subtext: 'Serve the community.',
    href: '#volunteer',
    image:
      'https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Youth & Children',
    subtext: 'Next generation leaders.',
    href: '/ministries#youth-ministry',
    image:
      'https://images.unsplash.com/photo-1592327614130-8bfda22f0bf7?auto=format&fit=crop&w=800&q=80',
  },
]

export function NextSteps() {
  return (
    <section id="next-steps" className="bg-[#f7f6f4] py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <h2 className="text-center font-display text-3xl font-bold text-[#111111] sm:text-4xl">
          Find Your Place. Live Your Purpose.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <a
              key={step.title}
              href={step.href}
              className="group relative block aspect-[3/4] overflow-hidden rounded-xl shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <img
                src={step.image}
                alt={step.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-1 text-sm text-white/80">{step.subtext}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
