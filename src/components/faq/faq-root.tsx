import { ReactNode } from 'react'

interface FAQRootProps {
  name: string
  children: ReactNode
}

export default function FAQRoot({ name, children }: FAQRootProps) {
  return (
    <div className="my-20 flex flex-col items-center gap-16">
      <h3 className="text-4xl font-bold text-white"> {name} </h3>
      <div className="flex gap-3"> {children} </div>
    </div>
  )
}
