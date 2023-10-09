export interface GetCategoryPlaylist {
  playlists: Playlists
}

export interface Playlists {
  href: string
  items: Array<Item | null>
  limit: number
  next: string
  offset: number
  previous: null
  total: number
}

export interface Item {
  collaborative: boolean
  description: string
  external_urls: ExternalUrls
  href: string
  id: string
  images: Image[]
  name: string
  owner: Owner
  primary_color: null
  public: null
  snapshot_id: string
  tracks: Tracks
  type: ItemType
  uri: string
}

export interface ExternalUrls {
  spotify: string
}

export interface Image {
  height: null
  url: string
  width: null
}

export interface Owner {
  display_name: DisplayName
  external_urls: ExternalUrls
  href: string
  id: ID
  type: OwnerType
  uri: URI
}

export type DisplayName = 'Spotify'

export type ID = 'spotify'

export type OwnerType = 'user'

export type URI = 'spotify:user:spotify'

export interface Tracks {
  href: string
  total: number
}

export type ItemType = 'playlist'
