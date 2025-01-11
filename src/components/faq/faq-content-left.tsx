import { ReactNode } from 'react'

interface FAQContentLeftProps {
  children: ReactNode
}

export default function FAQContentLeft({ children }: FAQContentLeftProps) {
  return <div className="flex flex-col gap-3"> {children} </div>
}
