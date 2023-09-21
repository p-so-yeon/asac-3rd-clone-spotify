'use client'
import Image from 'next/image'

import useContentCardContext from '@/components/ContentCard/ContentCardContext'

export default function ContentCardImg() {
  const { data } = useContentCardContext()
  return <Image className="rounded-md" src={data.image.url} alt={data.name} width={120} height={120} />
}
