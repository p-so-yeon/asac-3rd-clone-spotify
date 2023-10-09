export interface GetUserTopItems {
  items: Item[]
  total: number
  limit: number
  offset: number
  href: string
  next: null
  previous: null
}
export type Item = UserTopArtistItem | UserTopTrackItem

export interface UserTopArtistItem {
  external_urls: ExternalUrls
  followers: Followers
  genres: string[]
  href: string
  id: string
  images: Image[]
  name: string
  popularity: number
  type: Type
  uri: string
}

export interface ExternalUrls {
  spotify: string
}

export interface Followers {
  href: null
  total: number
}

export interface Image {
  height: number
  url: string
  width: number
}

export type Type = 'artist'

export interface UserTopTrackItem {
  album: Album
  artists: Artist[]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: ExternalIDS
  external_urls: ExternalUrls
  href: string
  id: string
  is_local: boolean
  name: string
  popularity: number
  preview_url: string
  track_number: number
  type: ItemType
  uri: string
  restrictions?: object
}

export interface Album {
  album_type: AlbumType
  artists: Artist[]
  available_markets: string[]
  external_urls: ExternalUrls
  href: string
  id: string
  images: Image[]
  name: string
  release_date: string
  release_date_precision: ReleaseDatePrecision
  total_tracks: number
  type: AlbumTypeEnum
  uri: string
  restrictions?: object
}

export type AlbumType = 'ALBUM' | 'SINGLE'

export interface Artist {
  external_urls: ExternalUrls
  href: string
  id: string
  name: string
  type: ArtistType
  uri: string
}

export interface ExternalUrls {
  spotify: string
}

export type ArtistType = 'artist'

export interface Image {
  height: number
  url: string
  width: number
}

export type ReleaseDatePrecision = 'day'

export type AlbumTypeEnum = 'album'

export interface ExternalIDS {
  isrc: string
}

export type ItemType = 'track'
