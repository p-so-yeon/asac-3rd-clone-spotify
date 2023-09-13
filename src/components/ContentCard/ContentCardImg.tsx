import Image from 'next/image'

import useContentCardContext from '@/components/ContentCard/ContentCardContext'

export default function ContentCardImg() {
  const { data } = useContentCardContext()
  return (
    <div>
      <Image className="rounded-md" src={data.images[0].url} alt={data.name} width={120} height={120} />
    </div>
  )
}
