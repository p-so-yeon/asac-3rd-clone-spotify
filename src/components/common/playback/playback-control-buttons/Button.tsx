'use client'

import { cn } from '@/lib/utils/classNames'

export function Button({
  className,
  children,
  handleClick,
}: {
  className?: string
  children: React.ReactNode
  handleClick?: (e: React.MouseEvent) => void
}) {
  return (
    <button
      className={cn(
        'text-color-text-secondary hover:text-color-text-primary active:text-color-active-primary',
        className,
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
