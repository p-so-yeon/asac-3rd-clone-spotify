'use client'

import Link from 'next/link'

import { ContentCardObject } from '@/lib/utils/createContentObject'

import GlobalPlayButton from './common/GlobalPlayButton'
import ContentCard from './ContentCard/ContentCard'
import ContentCardDescription from './ContentCard/ContentCardDescription'
import ContentCardImg from './ContentCard/ContentCardImg'
import ContentCardInfo from './ContentCard/ContentCardInfo'
import ContentCardName from './ContentCard/ContentCardName'

interface Props {
  content: ContentCardObject
}

export default function ContentCardListItem({ content }: Props) {
  const [domain, type, id] = content.uri.split(':')
  return (
    <li>
      <Link href={`/${type}/${id}`}>
        <ContentCard
          classNames="group"
          data={content}
          image={
            <>
              <ContentCardImg />
              <GlobalPlayButton uri={content.uri} className={'group-hover:opacity-100'} />
            </>
          }
          info={
            <ContentCardInfo>
              <ContentCardName />
              <ContentCardDescription />
            </ContentCardInfo>
          }
        />
      </Link>
    </li>
  )
}
