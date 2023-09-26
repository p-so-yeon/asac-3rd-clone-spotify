// 'use client'
import Link from 'next/link'

interface Props {
  title: string
  linkPath: string
  children: React.ReactNode
}

export default function ContentCardContainer({ title, linkPath, children }: Props) {
  return (
    <section className="">
      <div className="flex justify-between mb-4">
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
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-9">
        {children}
      </div>
    </section>
  )
}
