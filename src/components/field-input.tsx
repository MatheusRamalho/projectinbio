import { InputHTMLAttributes } from 'react'

import { cn } from '@/lib/cn'

type FieldInputProps = InputHTMLAttributes<HTMLInputElement>

export default function FieldInput({ className, ...rest }: FieldInputProps) {
  return (
    <input
      className={cn(
        `w-full p-3 bg-background-secondary text-white placeholder:text-content-placeholder rounded-xl
        border border-transparent hover:border-border-secondary hover:text-content-body active:border-border-tertiary`,
        className,
      )}
      {...rest}
    />
  )
}
