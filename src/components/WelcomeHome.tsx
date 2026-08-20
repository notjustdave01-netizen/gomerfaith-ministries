export function WelcomeHome() {
  return (
    <section id="welcome-home" className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <div className="order-2 aspect-[4/5] overflow-hidden rounded-xl lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1000&q=80"
            alt="Pastor Michael A Lewis and Elder Pauline Lewis greeting members"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#a01c2b]">
            About Gomer Faith Ministries
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-[#111111] sm:text-4xl">
            You Belong Here.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-[#111111]/70">
            Established in 2002, Gomer Faith Ministries offers an open door to all. We focus on
            strengthening the family unit by instilling the fundamental values of love, unity,
            respect, and responsibility.
          </p>
          <a
            href="#purpose"
            className="mt-8 inline-flex items-center rounded-[6px] bg-[#a01c2b] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#7f1521] hover:shadow-lg"
          >
            Discover Our Purpose
          </a>
        </div>
      </div>
    </section>
  )
}
