import FaqList from '@/components/faq-list'
import Video from '@/components/video'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Pricing from '@/components/pricing'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Hero />
      <Video />
      <Pricing />
      <FaqList />
    </div>
  )
}
