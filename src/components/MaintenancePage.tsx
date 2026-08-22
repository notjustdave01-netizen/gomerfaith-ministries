import { MapPin, Phone } from 'lucide-react'

export function MaintenancePage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#f4efe7] text-[#171512]">
      <div className="maintenance-grid absolute inset-0 -z-20" aria-hidden="true" />
      <div
        className="absolute -right-28 -top-36 -z-10 h-[34rem] w-[34rem] rounded-full bg-[#a01c2b] opacity-95 sm:-right-16 sm:-top-44 sm:h-[42rem] sm:w-[42rem] lg:-right-20 lg:-top-72 lg:h-[58rem] lg:w-[58rem]"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-36 -left-28 -z-10 h-72 w-72 rounded-full border-[52px] border-[#d8cbb9]/70 sm:-bottom-52 sm:-left-36 sm:h-[30rem] sm:w-[30rem] sm:border-[84px]"
        aria-hidden="true"
      />

      <div className="mx-auto grid min-h-screen max-w-7xl grid-rows-[auto_1fr_auto] px-6 py-7 sm:px-10 sm:py-9 lg:px-16 lg:py-12">
        <header className="maintenance-reveal flex items-start justify-between gap-6">
          <div className="inline-flex rounded-[10px] bg-white px-3 py-2 shadow-[0_10px_35px_rgba(49,38,25,0.09)] sm:px-4">
            <img
              src="/logo.png"
              alt="Gomer Faith Ministries"
              className="h-12 w-auto object-contain sm:h-16"
            />
          </div>
          <p className="hidden max-w-48 pt-2 text-right text-[11px] font-semibold uppercase leading-relaxed tracking-[0.2em] text-white/80 sm:block">
            Restoring families
            <br />
            Changing lives
          </p>
        </header>

        <section className="flex items-center py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl">
            <div className="maintenance-reveal maintenance-delay-1 mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#a01c2b]" />
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#a01c2b]">
                A brief pause
              </p>
            </div>

            <h1 className="maintenance-reveal maintenance-delay-2 max-w-3xl font-display text-[clamp(3.3rem,10vw,7.8rem)] font-black leading-[0.86] tracking-[-0.065em]">
              We’re making
              <span className="block text-[#a01c2b]">room for more.</span>
            </h1>

            <div className="maintenance-reveal maintenance-delay-3 mt-9 grid max-w-3xl gap-7 border-l-2 border-[#a01c2b] pl-6 sm:mt-12 sm:grid-cols-[1.4fr_1fr] sm:gap-12 sm:pl-8">
              <p className="max-w-xl text-lg leading-8 text-[#39342d] sm:text-xl sm:leading-9">
                Our website is currently undergoing a little care and attention. We’ll be back
                online soon with a renewed space for faith, family, and community.
              </p>
              <p className="self-end text-sm leading-6 text-[#746b60]">
                Thank you for your patience. Our church remains open, active, and ready to welcome
                you.
              </p>
            </div>
          </div>
        </section>

        <footer className="maintenance-reveal maintenance-delay-4 flex flex-col gap-5 border-t border-[#171512]/15 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 text-[#514a42] sm:flex-row sm:gap-7">
            <a
              href="tel:0794456800"
              className="inline-flex items-center gap-2.5 font-semibold transition-colors hover:text-[#a01c2b] focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a01c2b]"
            >
              <Phone size={16} aria-hidden="true" />
              07944 56800
            </a>
            <p className="inline-flex items-center gap-2.5">
              <MapPin size={16} aria-hidden="true" />
              31 Dunton Road, Leyton, London E10 7AF
            </p>
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b8175]">
            Gomer Faith Ministries
          </p>
        </footer>
      </div>
    </main>
  )
}
