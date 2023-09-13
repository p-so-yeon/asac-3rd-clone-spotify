import { ReactNode } from 'react'

import { ContentCardContext } from '@/components/ContentCard/ContentCardContext'
import ContentCardDescription from '@/components/ContentCard/ContentCardDescription'
import ContentCardInfo from '@/components/ContentCard/ContentCardInfo'
import ContentCardName from '@/components/ContentCard/ContentCardName'
import { Item } from '@/lib/types/playlist/featured-playlist-mock-data'

import ContentCardImg from './ContentCardImg'

//data type이 늘어나면 interface로 추가해주기 
type Props = {
  data: Item
  image?: ReactNode
  info?: ReactNode
}

export default function ContentCard({ data, image, info }: Props) {
  return (
    <div className="rounded-md bg-color-box-primary overflow-hidden w-full transition duration-300  hover:bg-[rgb(255,255,255)]/20"> 
      <ContentCardContext.Provider value={{ data }}>
        <div className="">
          <div>{image}</div>
          <div>{info}</div>
        </div>
      </ContentCardContext.Provider>
    </div>
    
  )
}

//굳이 이렇게 해주는 건 ContentCard에 해당하는 거라는걸 명시해주기 위함?
ContentCard.Image = ContentCardImg
ContentCard.Name = ContentCardName
ContentCard.Description = ContentCardDescription
ContentCard.Info = ContentCardInfo
