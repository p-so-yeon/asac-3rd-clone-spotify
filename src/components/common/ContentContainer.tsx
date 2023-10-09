'use client'
import Link from 'next/link'

import { cn } from '@/lib/utils/classNames'

interface Props {
  title: string
  linkPath: string
  children: React.ReactNode
}

export default function ContentCardContainer({ title, linkPath, children }: Props) {
  return (
    <section className={'overflow-x-auto no-scrollbar no-scrollbar::-webkit-scrollbar'}>
      <div className="flex justify-between mb-2">
        <h2 className="text-2xl text-color-text-primary hover:underline active:underline hover:cursor-pointer">
          <Link href={`${linkPath}`}>{title}</Link>
        </h2>
        <Link
          // href={`/section/${id}`}
          href={`${linkPath}`}
          className="text-sm font-semibold cursor-pointer text-color-text-secondary hover:text-color-text-secondary hover:underline"
        >
          모두표시
        </Link>
      </div>
      <div className={cn(`flex gap-4 items-center scroll whitespace-nowrap scroll-smooth`)}>{children}</div>
    </section>
  )
}
