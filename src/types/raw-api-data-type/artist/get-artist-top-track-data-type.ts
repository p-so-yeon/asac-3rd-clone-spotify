import { AlbumType } from '../../common/album-data-type'

export interface GetArtistTopTrack {
  tracks: Track[]
}

export interface Track {
  album?: Album
  artists: Artist[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: ExternalIDS
  external_urls: ExternalUrls
  available_markets?: string[]
  restrictions?: object
  href: string
  id: string
  is_local: boolean
  is_playable?: boolean
  name: string
  popularity: number
  preview_url: string
  track_number: number
  type: TrackType
  uri: string
}

export interface Album {
  album_type: AlbumType
  artists: Artist[]
  external_urls: ExternalUrls
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
  type: string
  uri: string
}

export interface ExternalUrls {
  spotify: string
}

export interface Image {
  height: number
  url: string
  width: number
}

export type ReleaseDatePrecision = 'day' | 'week' | 'month' | 'year'

export interface ExternalIDS {
  isrc: string
}

export type TrackType = 'track'
