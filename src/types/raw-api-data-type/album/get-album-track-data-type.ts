export interface GetAlbumTrack {
  href: string
  items: Item[]
  limit: number
  next: null
  offset: number
  previous: null
  total: number
}

export interface Item {
  artists: Artist[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_urls: ExternalUrls
  href: string
  id: string
  is_local: boolean
  is_playable?: boolean
  name: string
  preview_url: string
  track_number: number
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
export type { Item as TrackItem } // 앨범이 아니라 트랙임
