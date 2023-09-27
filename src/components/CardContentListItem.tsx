import { ContentCardObject } from '@/lib/utils/createContentObject'

import ContentCard from './ContentCard/ContentCard'
import ContentCardDescription from './ContentCard/ContentCardDescription'
import ContentCardImg from './ContentCard/ContentCardImg'
import ContentCardInfo from './ContentCard/ContentCardInfo'
import ContentCardName from './ContentCard/ContentCardName'

interface Props {
  content: ContentCardObject
}

export default function ContentCardListItem({ content }: Props) {
  return (
    <ContentCard
      data={content}
      image={<ContentCardImg />}
      info={
        <ContentCardInfo>
          <ContentCardName />
          <ContentCardDescription />
        </ContentCardInfo>
      }
    />
  )
}
