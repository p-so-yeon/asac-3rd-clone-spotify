import { AlbumType } from '@/types/common/album-data-type'

export interface GetArtistsAlbums {
  href: string
  items: Item[]
  limit: number
  next: null
  offset: number
  previous: null
  total: number
}

export interface Item {
  album_group: AlbumType
  album_type: AlbumType
  artists: Artist[]
  external_urls: ExternalUrls
  available_markets?: string[]
  restrictions?: object
  href: string
  id: string
  images: Image[]
  is_playable?: boolean
  name: string
  release_date: string
  release_date_precision: ReleaseDatePrecision
  total_tracks: number
  type: AlbumType
  uri: string
}

export interface Artist {
  external_urls: ExternalUrls
  href: string
  id: string
  name: string
  type: Type
  uri: string
}

export interface ExternalUrls {
  spotify: string
}

export type Type = 'artist'

export interface Image {
  height: number
  url: string
  width: number
}

export type ReleaseDatePrecision = 'day' | 'week' | 'month' | 'year'

// artist의 앨범 아이템 아티스트가 아님
export type { Item as AlbumItem }
