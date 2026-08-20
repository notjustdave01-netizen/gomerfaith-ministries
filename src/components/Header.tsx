import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About Us', href: '/#welcome-home' },
  { label: 'Ministries', href: '/ministries' },
  { label: 'Grow', href: '/grow' },
  { label: 'Events', href: '/#events' },
  { label: 'Watch', href: '/#anchor' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-white/95 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.06)]'
          : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="/" className="rounded-[8px] bg-white px-3 py-1.5 shadow-sm">
          <img src="/logo.png" alt="Gomer Faith Ministries" className="h-9 w-auto lg:h-11" />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[15px] font-medium transition-colors ${
                scrolled ? 'text-[#111111]/80 hover:text-[#a01c2b]' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/#visit"
            className={`rounded-[6px] border px-5 py-2.5 text-sm font-semibold transition-all ${
              scrolled
                ? 'border-[#111111]/25 text-[#111111] hover:border-[#111111] hover:bg-[#111111] hover:text-white'
                : 'border-white/70 text-white hover:bg-white hover:text-[#111111]'
            }`}
          >
            Plan Your Visit
          </a>
          <a
            href="/#give"
            className="rounded-[6px] bg-[#a01c2b] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#7f1521] hover:shadow-md"
          >
            Give
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className={`lg:hidden ${scrolled || menuOpen ? 'text-[#111111]' : 'text-white'}`}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-black/5 bg-white px-6 pb-6 lg:hidden">
          <nav className="flex flex-col gap-1 pt-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-[#111111] hover:bg-black/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-3">
            <a
              href="/#visit"
              onClick={() => setMenuOpen(false)}
              className="rounded-[6px] border border-[#111111]/25 px-5 py-3 text-center text-sm font-semibold text-[#111111]"
            >
              Plan Your Visit
            </a>
            <a
              href="/#give"
              onClick={() => setMenuOpen(false)}
              className="rounded-[6px] bg-[#a01c2b] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Give
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
