'use client'
import Link from 'next/link'
import { useSelector } from 'react-redux'

import { cn } from '@/lib/utils/classNames'
import { RootState } from '@/store/store'

interface Props {
  title: string
  linkPath: string
  children: React.ReactNode
}

export default function ContentCardContainer({ title, linkPath, children }: Props) {
  const sidebarWidth = useSelector((state: RootState) => state.reducer.library.width)
  const mainWidth = Math.floor(window.innerWidth - sidebarWidth)
  const mainCols = Math.floor(mainWidth / 200)
  // console.log(mainWidth)
  // console.log(mainCols)

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
