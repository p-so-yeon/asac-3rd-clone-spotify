import { ReactNode } from 'react'

import ContentCardContext from '@/components/ContentCard/ContentCardContext'
import ContentCardDescription from '@/components/ContentCard/ContentCardDescription'
import ContentCardName from '@/components/ContentCard/ContentCardName'
import {  Item } from '@/lib/types/playlist/featured-playlist-mock-data'

import ContentCardImg from './ContentCardImg'

type Props = {
  data: Item
  image?: ReactNode
  info?: ReactNode
}

export default function ContentCard({ data, image, info }: Props) {
  return (
    <ContentCardContext.Provider value={{ data }}>
      <div>
        <div>{image}</div>
        <div>{info}</div>
      </div>
    </ContentCardContext.Provider>
  )
}

//굳이 이렇게 해주는 건 ContentCard에 해당하는 거라는걸 명시해주기 위함?
ContentCard.Image = ContentCardImg
ContentCard.Name = ContentCardName
ContentCard.Description = ContentCardDescription
