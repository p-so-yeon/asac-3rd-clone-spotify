export interface USERSSAVEDALBUMS {
  href: string
  items: Item[]
  limit: number
  next: null
  offset: number
  previous: null
  total: number
}

export interface Item {
  added_at: string
  album: Album
}

export interface Album {
  album_type: string
  artists: Artist[]
  copyrights: Copyright[]
  external_ids: ExternalIDS
  external_urls: ExternalUrls
  genres: any[]
  href: string
  id: string
  images: Image[]
  is_playable: boolean
  label: string
  name: string
  popularity: number
  release_date: string
  release_date_precision: string
  total_tracks: number
  tracks: Tracks
  type: string
  uri: string
  available_markets?: string[]
  restrictions?: object
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

export interface Copyright {
  text: string
  type: string
}

export interface ExternalIDS {
  upc: string
}

export interface Image {
  height: number
  url: string
  width: number
}

export interface Tracks {
  href: string
  items: TracksItem[]
  limit: number
  next: null
  offset: number
  previous: null
  total: number
}

export interface TracksItem {
  artists: Artist[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_urls: ExternalUrls
  href: string
  id: string
  is_local: boolean
  is_playable: boolean
  name: string
  preview_url: string
  track_number: number
  type: ItemType
  uri: string
  available_markets?: string[]
  restrictions?: object
}

export type ItemType = 'track'
