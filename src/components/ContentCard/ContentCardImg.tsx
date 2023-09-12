import Image from 'next/image'

import useContentCardContext from '@/components/ContentCard/ContentCardContext'

export default function ContentCardImg() {
  const { data } = useContentCardContext()
  return (
    <div>
      <Image src={data.images[0].url} alt={data.name} width={64} height={64} />
    </div>
  )
}
