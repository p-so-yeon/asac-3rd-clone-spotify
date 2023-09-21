'use client'
import Link from 'next/link'

interface Props {
  title: string
  linkPath: string
  children: React.ReactNode
}

export default function ContentCardContainer({ title, linkPath, children }: Props) {
  return (
    <section className="mb-4 border border-red-500">
      <div className="flex justify-between">
        <h2>{title}</h2>
        <Link
          // href={`/section/${id}`}
          href={`${linkPath}`}
          className="cursor-pointer text-color-text-secondary hover:text-color-hover-primary hover:underline"
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
