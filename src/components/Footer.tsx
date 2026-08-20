import { useState } from 'react'
import { Facebook, Instagram, Phone, Youtube } from 'lucide-react'

const QUICK_LINKS = [
  { label: 'About Us', href: '#welcome-home' },
  { label: 'Events', href: '#events' },
  { label: 'Watch', href: '#anchor' },
  { label: 'Giving', href: '#give' },
  { label: 'Contact', href: '#contact' },
]

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

export function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'newsletter', email }),
      })
    } finally {
      setStatus('done')
    }
  }

  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3">
          <div>
            <div className="mb-6 inline-block rounded-[8px] bg-white px-4 py-2">
              <img src="/logo.png" alt="Gomer Faith Ministries" className="h-14 w-auto" />
            </div>
            <h3 className="font-display text-xl font-bold">Stay Connected.</h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
              Get service updates, upcoming events, and weekly encouragement straight to your
              inbox.
            </p>

            {status === 'done' ? (
              <p className="mt-6 text-sm font-medium text-white/80">
                Thanks for subscribing — welcome to the family.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex max-w-sm gap-2">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-[6px] border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#a01c2b] focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="shrink-0 rounded-[6px] bg-[#a01c2b] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#7f1521] disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending…' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white/60">
              Quick Links
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/75 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white/60">
              Visit Us
            </h3>
            <address className="mt-5 max-w-xs text-sm not-italic leading-relaxed text-white/75">
              Ground Floor,
              <br />
              31 Dunton Road
              <br />
              Leyton, London, E10 7AF
            </address>
            <a
              href="tel:0794456800"
              className="mt-4 flex items-center gap-2 text-sm text-white/75 hover:text-white"
            >
              <Phone size={15} />
              0794456800
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/50">© 2026 Gomer Faith Ministries</p>
          <div className="flex items-center gap-4">
            <a
              href="#facebook"
              aria-label="Facebook"
              className="text-white/60 transition-colors hover:text-white"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#instagram"
              aria-label="Instagram"
              className="text-white/60 transition-colors hover:text-white"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#youtube"
              aria-label="YouTube"
              className="text-white/60 transition-colors hover:text-white"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
