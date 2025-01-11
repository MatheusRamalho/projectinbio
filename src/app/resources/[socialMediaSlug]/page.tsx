import { notFound } from 'next/navigation'

import Header from '@/components/header'
import Video from '@/components/video'
import FaqList from '@/components/faq-list'
import Hero from '@/components/hero'
import Pricing from '@/components/pricing'

export default async function LinkInBio({
  params,
}: {
  params: Promise<{ socialMediaSlug: string }>
}) {
  const { socialMediaSlug } = await params

  const texts = await getTextBySlug(socialMediaSlug)

  if (!texts) {
    return notFound()
  }

  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Hero texts={texts} />
      <Video />
      <Pricing />
      <FaqList />
    </div>
  )
}
