import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { AnchorMedia } from '@/components/AnchorMedia'
import { WelcomeHome } from '@/components/WelcomeHome'
import { NextSteps } from '@/components/NextSteps'
import { Events } from '@/components/Events'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="font-body text-[#111111]">
      <Header />
      <main>
        <Hero />
        <AnchorMedia />
        <WelcomeHome />
        <NextSteps />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
