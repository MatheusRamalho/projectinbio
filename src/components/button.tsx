import { ButtonHTMLAttributes, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

import { cn } from '@/lib/cn'

const buttonVariants = tv({
  slots: {
    base: 'p-3 text-white rounded-xl font-bold whitespace-nowrap hover:opacity-95 disabled:opacity-70',
  },
  variants: {
    variant: {
      primary: { base: 'bg-accent-purple' },
      secondary: { base: 'bg-background-tertiary' },
      ghost: { base: 'border border-border-primary' },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode
}

export default function Button({
  children,
  variant,
  className,
  ...rest
}: ButtonProps) {
  const { base } = buttonVariants({ variant })

  return (
    <button className={cn(base(), className)} {...rest}>
      {children}
    </button>
  )
}
