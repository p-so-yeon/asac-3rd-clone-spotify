export interface RecentlyplayedTrack {
  items: Item[]
  next: string
  cursors: Cursors
  limit: number
  href: string
}

export interface Cursors {
  after: string
  before: string
}

export interface Item {
  track: Track
  played_at: Date
  context: Context
}

export interface Context {
  type: ContextType
  external_urls: ExternalUrls
  href: string
  uri: ContextURI
}

export interface ExternalUrls {
  spotify: string
}

export type ContextType = 'artist' | 'playlist'

export type ContextURI = string

export interface Track {
  album: Album
  artists: Artist[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: ExternalIDS
  external_urls: ExternalUrls
  href: string
  id: string
  is_local: boolean
  is_playable: boolean
  name: string
  popularity: number
  preview_url: string
  track_number: number
  type: TrackType
  uri: string
}

export interface Album {
  album_type: AlbumTypeEnum
  artists: Artist[]
  external_urls: ExternalUrls
  href: string
  id: string
  images: Image[]
  is_playable: boolean
  name: string
  release_date: Date
  release_date_precision: ReleaseDatePrecision
  total_tracks: number
  type: AlbumTypeEnum
  uri: string
}

export type AlbumTypeEnum = 'single' | 'album'

export interface Artist {
  external_urls: ExternalUrls
  href: string
  id: ID
  name: Name
  type: ContextType
  uri: ArtistURI
}

export type ID = string

export type Name = string

export type ArtistURI = string

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
