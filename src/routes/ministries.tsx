import { createFileRoute } from '@tanstack/react-router'
import type { LucideIcon } from 'lucide-react'
import {
  BookOpen,
  DoorOpen,
  GraduationCap,
  HeartHandshake,
  Megaphone,
  Sparkles,
  Users,
} from 'lucide-react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export const Route = createFileRoute('/ministries')({
  head: () => ({
    meta: [
      { title: 'Our Ministries | Gomer Faith Ministries' },
      {
        name: 'description',
        content:
          'Explore discipleship, evangelism, prayer, Bible study, Sunday school, and ministries for men, women, and young people at Gomer Faith Ministries.',
      },
    ],
  }),
  component: MinistriesPage,
})

type Ministry = {
  id: string
  title: string
  eyebrow: string
  icon: LucideIcon
  paragraphs: string[]
  tone: 'light' | 'dark' | 'soft'
  className?: string
}

const MINISTRIES: Ministry[] = [
  {
    id: 'discipleship',
    title: 'Discipleship',
    eyebrow: 'Learn · Live · Follow',
    icon: BookOpen,
    tone: 'dark',
    className: 'lg:col-span-7',
    paragraphs: [
      'Discipleship is the process of learning about the teachings of another, internalizing them and then acting upon them. At Gomer Faith Ministries we aim to follow Christ’s teachings from the Bible. Not just learning them but acting on them.',
      'This is very important distinction for us as Christians. To be a disciple of Jesus, you have to learn what Jesus taught and act on it. This is how you can demonstrate if you have truly committed your life to Christ, you start living radically His commands.',
    ],
  },
  {
    id: 'evangelism',
    title: 'Evangelism',
    eyebrow: 'A real word for a real world',
    icon: Megaphone,
    tone: 'light',
    className: 'lg:col-span-5',
    paragraphs: [
      'Evangelism means to preach the good news. We aim to emulate Jesus Christ at Gomer Faith Ministries by preaching the good news of His Word. We believe this to be a fundamental role of being a Christian, and our focus is to spread the good news of God’s Kingdom and His Divine Rule. Our motto is “A Real Word for a Real Life in a Real World”.',
      'We hold weekly Sunday Service and various events and activities, which are all designed to assist in achieving our goal. Through evangelism and networking and churchwide persons, Gomer is able to promote a positive self image in community, providing an avenue for people to come for support and encouragement, and thus bringing glory to the name of the Lord.',
    ],
  },
  {
    id: 'mens-ministry',
    title: 'Mens Ministry',
    eyebrow: 'Support · Purpose · Influence',
    icon: Users,
    tone: 'soft',
    className: 'lg:col-span-4',
    paragraphs: [
      'The Mens Ministry provides support and practical advice and help to men of all ages, in these challenging times. Our aim is to focus on major issues of concern in today’s society and to equip them with the necessary tools to take up their rightful place in these influential roles.',
      'Mens Ministry meets every fourth Friday of the month.',
    ],
  },
  {
    id: 'prayer-bible-study',
    title: 'Prayer & Bible Study',
    eyebrow: 'Prayer · Scripture · Faith',
    icon: HeartHandshake,
    tone: 'light',
    className: 'lg:col-span-8',
    paragraphs: [
      'The Prayer and Bible Study Ministry provides strong leadership in prayer, spiritual warfare and Bible teachings. The scriptures make it clear that our prayers should be directed to God, and His alone. We have our prayers and have the power to act on them. In this respect, the Prayer Leader encourages serious prayer and supplication to the Lord through his Son, Jesus Christ.',
    ],
  },
  {
    id: 'sunday-school',
    title: 'Sunday School',
    eyebrow: 'Growing the next generation',
    icon: GraduationCap,
    tone: 'dark',
    className: 'lg:col-span-7',
    paragraphs: [
      'Gomer’s Sunday School is presided over by experienced teachers who comply with the Child Protection Act 1989 and follow the Guidelines set by the Child Protection Advisory Service to ensure the safety of our children. Sunday School occurs weekly from 11am to 1pm and comprises of children from the ages of 4 to 13 years.',
      'Our aim is to teach and feed within the children with basic Bible principles and instil the basic principles of discipline, respect and love of God. By introducing children to the Word of God we provide them with a foundation for their daily lives and future.',
    ],
  },
  {
    id: 'womens-ministry',
    title: 'Womens Ministry',
    eyebrow: 'Support · Wisdom · Purpose',
    icon: Sparkles,
    tone: 'soft',
    className: 'lg:col-span-5',
    paragraphs: [
      'The Women’s Ministry provides support and practical advice and help to women of all ages. Our aim is to focus on major issues of concern in today’s society, and to equip them with the Word of God so they can identify and walk in their God given ordained purpose.',
    ],
  },
]

const DIRECTORY_LINKS = [
  ['Discipleship', 'discipleship'],
  ['Evangelism', 'evangelism'],
  ['Mens Ministry', 'mens-ministry'],
  ['Prayer & Bible Study', 'prayer-bible-study'],
  ['Sunday School', 'sunday-school'],
  ['Womens Ministry', 'womens-ministry'],
  ['Youth Ministry', 'youth-ministry'],
] as const

const TONE_STYLES = {
  light: {
    card: 'bg-white text-[#111111] shadow-[0_18px_60px_rgba(17,17,17,0.08)]',
    icon: 'bg-[#f8e9eb] text-[#a01c2b]',
    eyebrow: 'text-[#a01c2b]',
    body: 'text-[#111111]/68',
    line: 'bg-[#a01c2b]',
  },
  dark: {
    card: 'bg-[#111111] text-white shadow-[0_18px_60px_rgba(17,17,17,0.14)]',
    icon: 'bg-white/10 text-[#f4d18e]',
    eyebrow: 'text-[#f4d18e]',
    body: 'text-white/68',
    line: 'bg-[#d8aa53]',
  },
  soft: {
    card: 'bg-[#f3e7e8] text-[#111111] shadow-[0_18px_60px_rgba(92,20,30,0.08)]',
    icon: 'bg-white/75 text-[#a01c2b]',
    eyebrow: 'text-[#8a1724]',
    body: 'text-[#111111]/68',
    line: 'bg-[#a01c2b]',
  },
}

function MinistriesPage() {
  return (
    <div className="min-h-screen bg-[#fbfaf8] font-body text-[#111111]">
      <Header />

      <main>
        <section className="relative isolate overflow-hidden bg-[#111111] px-6 pb-24 pt-36 text-white lg:px-10 lg:pb-32 lg:pt-44">
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/gomer-faith-congregation.jpg')" }}
          />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_22%,_rgba(160,28,43,0.92),_transparent_36%),linear-gradient(120deg,_rgba(17,17,17,0.99)_20%,_rgba(17,17,17,0.78))]" />
          <div className="absolute -bottom-24 right-[8%] -z-10 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute -bottom-10 right-[13%] -z-10 h-40 w-40 rounded-full border border-white/10" />

          <div className="mx-auto grid max-w-6xl items-end gap-12 lg:grid-cols-[1fr_0.72fr]">
            <div className="animate-fade-up">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f3b5bd]">Life together</p>
              <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-7xl">
                Our Ministries
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/72">
                Places to deepen your faith, build lasting community, and use your gifts to serve others.
              </p>
            </div>

            <p className="max-w-md border-l border-white/20 pl-6 text-sm leading-7 text-white/60 lg:justify-self-end">
              From Sunday School to prayer, discipleship, and community-focused groups, every ministry creates room to
              learn, belong, and grow.
            </p>
          </div>
        </section>

        <section aria-label="Ministry directory" className="border-b border-[#111111]/8 bg-white">
          <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-6 py-5 lg:px-10">
            {DIRECTORY_LINKS.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="shrink-0 rounded-full border border-[#111111]/12 px-4 py-2 text-xs font-semibold text-[#111111]/65 transition hover:border-[#a01c2b] hover:bg-[#a01c2b] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a01c2b]"
              >
                {label}
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="mb-12 grid gap-5 lg:grid-cols-[0.7fr_1fr] lg:items-end">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a01c2b]">Find your place</p>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
              Faith grows best in community.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-12">
            {MINISTRIES.map((ministry, index) => {
              const Icon = ministry.icon
              const styles = TONE_STYLES[ministry.tone]

              return (
                <article
                  id={ministry.id}
                  key={ministry.id}
                  className={`scroll-mt-28 overflow-hidden rounded-2xl ${styles.card} ${ministry.className ?? ''}`}
                >
                  <div className={`h-2.5 ${styles.line}`} />
                  <div className="p-8 sm:p-10">
                    <div className="flex items-start justify-between gap-6">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-full ${styles.icon}`}>
                        <Icon size={22} aria-hidden="true" />
                      </div>
                      <span className="font-display text-sm font-bold opacity-30">0{index + 1}</span>
                    </div>
                    <p className={`mt-8 text-xs font-semibold uppercase tracking-[0.24em] ${styles.eyebrow}`}>
                      {ministry.eyebrow}
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-bold leading-tight">{ministry.title}</h3>
                    <div className={`mt-5 space-y-4 leading-relaxed ${styles.body}`}>
                      {ministry.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section id="youth-ministry" className="scroll-mt-24 bg-[#111111] px-6 py-20 text-white lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl bg-[#181818] shadow-[0_24px_80px_rgba(0,0,0,0.25)] lg:grid-cols-[0.72fr_1.28fr]">
            <div className="relative isolate flex min-h-80 flex-col justify-between overflow-hidden bg-[#a01c2b] p-8 sm:p-10 lg:min-h-full">
              <div className="absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full border border-white/15" />
              <div className="absolute -bottom-28 -left-20 -z-10 h-80 w-80 rounded-full bg-[#7f1521]" />
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#a01c2b]">
                <DoorOpen size={26} aria-hidden="true" />
              </div>
              <div className="mt-20">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/65">Youth Ministry</p>
                <h2 className="mt-4 max-w-sm font-display text-4xl font-bold leading-tight sm:text-5xl">
                  Youth Ministry
                </h2>
                <p className="mt-3 font-display text-xl font-semibold text-white/80">Youth Next Door</p>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-white/80">
                  First and third Friday · 7:30pm–9pm
                </p>
              </div>
            </div>

            <div className="p-8 sm:p-10 lg:p-14">
              <div className="space-y-5 leading-relaxed text-white/68">
                <p>
                  Gomer’s Youth Ministry Youth Next Door is also presided over by experienced teachers who comply with
                  the Child Protection Advisory Service to ensure the safety of our young people.
                </p>
                <p>Youth Next Door meet every first and third Friday of the month from 7:30pm - 9pm.</p>
                <p>
                  Youth Next Door provides support, direction and practical advice to teenagers who today face difficult
                  and challenging times. Our Youth Leaders are responsible and spiritually mature, who provide support to
                  young people. They are aware of changing trends in today’s society, and the impact these can have on our
                  youth.
                </p>
                <p>
                  Our Youth Leaders aim to answer the questions young people most commonly ask. They offer practical
                  advice, based on Biblical principles while appreciating we are living in difficult times. Working with
                  young people is central to the work of Gomer and we encourage them by engaging in positive activities
                  through initiatives within the community and planned events. Our aim is that young people be challenged
                  in ways that promote personal and social responsibility. We believe our youth are extremely important,
                  because they are the future.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
