'use client'
import { ReactNode } from 'react'

import { ContentCardContext } from '@/components/ContentCard/ContentCardContext'
import ContentCardDescription from '@/components/ContentCard/ContentCardDescription'
import ContentCardImg from '@/components/ContentCard/ContentCardImg'
import ContentCardInfo from '@/components/ContentCard/ContentCardInfo'
import ContentCardName from '@/components/ContentCard/ContentCardName'
import { cn } from '@/lib/utils/classNames'
import { ContentCardObject } from '@/lib/utils/createContentObject'
export interface ContentCardProps {
  data: ContentCardObject
}

type Props = {
  data: ContentCardObject
  image: ReactNode
  info: ReactNode
  classNames?:string
}

export default function ContentCard({ data, image, info,classNames }: Props) {
  return (
    <div className={cn("p-4 rounded-sm bg-color-box-primary overflow-hidden w-full transition duration-300 hover:bg-color-text-primary/20",classNames)}>
      <ContentCardContext.Provider value={data}>
        <div className="mb-4">{image}</div>
        <div>{info}</div>
      </ContentCardContext.Provider>
    </div>
  )
}

ContentCard.Image = ContentCardImg
ContentCard.Name = ContentCardName
ContentCard.Description = ContentCardDescription
ContentCard.Info = ContentCardInfo
