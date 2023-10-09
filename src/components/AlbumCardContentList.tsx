'use client'
import React from 'react'

import { createContentFromItem } from '@/lib/utils/createContentObject'
import { AlbumItem, Item } from '@/types/raw-api-data-type/artist/get-artists-albums-data-type'

import ContentCardListItem from './CardContentListItem'
import ContentCardContainer from './common/ContentContainer'

interface Props {
  title: string
  linkPath: string
  albums: Item[]
}

export default function AlbumCardContentList(props: Props) {
  return (
    <ContentCardContainer title={props.title} linkPath={props.linkPath}>
      {props.albums.map((album) => (
        <ContentCardListItem key={album.id} content={createContentFromItem.album(album as AlbumItem)} />
      ))}
    </ContentCardContainer>
  )
}
