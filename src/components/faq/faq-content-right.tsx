import { ReactNode } from 'react'

interface FAQContentRightProps {
  children: ReactNode
}

export default function FAQContentRight({ children }: FAQContentRightProps) {
  return <div className="flex flex-col gap-3"> {children} </div>
}
