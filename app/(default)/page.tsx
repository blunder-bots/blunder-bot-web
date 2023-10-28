export const metadata = {
  title: 'Blunder Bots Technologies',
  description: 'Blunder Bots Technologies is a leading software house offering services in Mobile App Development, Web App Development and Web 3.0',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import TalkToTeam from '@/components/TalkToTeam'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <TalkToTeam />
      {/* <Newsletter /> */}
    </>
  )
}
