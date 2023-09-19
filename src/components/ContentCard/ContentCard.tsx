import { ReactNode } from 'react'

import { ContentCardContext } from '@/components/ContentCard/ContentCardContext'
import ContentCardDescription from '@/components/ContentCard/ContentCardDescription'
import ContentCardImg from '@/components/ContentCard/ContentCardImg'
import ContentCardInfo from '@/components/ContentCard/ContentCardInfo'
import ContentCardName from '@/components/ContentCard/ContentCardName'
import { ContentCardObject } from '@/lib/utils/createContentObject'

export interface ContentCardProps {
  data: ContentCardObject
}

type Props = {
  data: ContentCardProps
  image: ReactNode
  info: ReactNode
}

export default function ContentCard({ data, image, info }: Props) {
  return (
    <div className="rounded-md bg-color-box-primary overflow-hidden w-full transition duration-300  hover:bg-[rgb(255,255,255)]/20">
      <ContentCardContext.Provider value={data}>
        <div className="">
          <div>{image}</div>
          <div>{info}</div>
        </div>
      </ContentCardContext.Provider>
    </div>
  )
}

ContentCard.Image = ContentCardImg
ContentCard.Name = ContentCardName
ContentCard.Description = ContentCardDescription
ContentCard.Info = ContentCardInfo
