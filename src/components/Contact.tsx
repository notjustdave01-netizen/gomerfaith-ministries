import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

import { CONTACT_EMAIL } from '@/constants'

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

const FIELD_CLASSES =
  'w-full rounded-[6px] border border-[#111111]/15 bg-white px-4 py-3 text-sm text-[#111111] placeholder:text-[#111111]/40 focus:border-[#a01c2b] focus:outline-none'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>

    setStatus('sending')
    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ ...data, 'form-name': 'contact' }),
      })
      if (!response.ok) throw new Error(`Form submission failed: ${response.status}`)
      form.reset()
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="visit" className="bg-[#f7f6f4] py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#a01c2b]">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-[#111111] sm:text-4xl">
            We'd Love To Hear From You.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-[#111111]/70">
            Whether you are planning your first visit, need prayer, or want to know more about
            serving with us — send us a message and someone from the team will get back to you.
          </p>

          <dl className="mt-10 flex flex-col gap-5">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-[#a01c2b]" />
              <div>
                <dt className="font-display text-sm font-bold text-[#111111]">Visit us</dt>
                <dd className="mt-1 text-sm leading-relaxed text-[#111111]/70">
                  Ground Floor, 31 Dunton Road
                  <br />
                  Leyton, London, E10 7AF
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-[#a01c2b]" />
              <div>
                <dt className="font-display text-sm font-bold text-[#111111]">Email us</dt>
                <dd className="mt-1 text-sm text-[#111111]/70">
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[#a01c2b]">
                    {CONTACT_EMAIL}
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-[#a01c2b]" />
              <div>
                <dt className="font-display text-sm font-bold text-[#111111]">Call us</dt>
                <dd className="mt-1 text-sm text-[#111111]/70">
                  <a href="tel:0794456800" className="hover:text-[#a01c2b]">
                    0794456800
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="rounded-xl bg-white p-8 shadow-sm">
          {status === 'done' ? (
            <div className="flex h-full min-h-64 flex-col justify-center text-center">
              <h3 className="font-display text-xl font-bold text-[#111111]">Message sent.</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#111111]/70">
                Thank you for reaching out — we aim to reply within a couple of days.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mx-auto mt-6 text-sm font-semibold text-[#a01c2b] hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-[#111111]"
                >
                  Your name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Jane Doe"
                  className={FIELD_CLASSES}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-[#111111]"
                >
                  Email address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={FIELD_CLASSES}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block text-sm font-medium text-[#111111]"
                >
                  Phone number <span className="text-[#111111]/50">(optional)</span>
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="07000 000000"
                  className={FIELD_CLASSES}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-[#111111]"
                >
                  How can we help?
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us a little about your enquiry…"
                  className={`${FIELD_CLASSES} resize-y`}
                />
              </div>

              {status === 'error' && (
                <p className="text-sm font-medium text-[#a01c2b]">
                  Something went wrong sending your message. Please try again, or email us directly
                  at {CONTACT_EMAIL}.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center justify-center rounded-[6px] bg-[#a01c2b] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#7f1521] hover:shadow-lg disabled:translate-y-0 disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
