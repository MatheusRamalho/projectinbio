'use client'

import { ReactNode, useRef } from 'react'

import useOnClickOutside from '@/hooks/useOnClickOutside'

interface ModalProps {
  children: ReactNode
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default function Modal({ children, isOpen, setIsOpen }: ModalProps) {
  const ref = useRef<HTMLDivElement>(null)

  useOnClickOutside(ref, () => {
    setIsOpen(false)
  })

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-[#787878]/10 flex items-center justify-center backdrop-blur-md z-50">
      <div ref={ref}> {children} </div>
    </div>
  )
}
