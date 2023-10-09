import { Image } from '@/lib/types/common/images-data-type'
export interface Playlist {
  collaborative: boolean
  description: string
  external_urls: ExternalUrls
  followers: Followers
  href: string
  id: string
  images: Image[]
  name: string
  owner: Owner
  primary_color: null
  public: boolean
  snapshot_id: string
  tracks: Tracks
  type: string
  uri: string
}

export interface ExternalUrls {
  spotify: string
}

export interface Followers {
  href: null
  total: number
}

export interface Owner {
  display_name?: string
  external_urls: ExternalUrls
  href: string
  id: string
  type: OwnerType
  uri: string
  name?: string
}

export type OwnerType = 'user' | 'artist'

export interface Tracks {
  href: string
  items: Item[]
  limit: number
  next: null
  offset: number
  previous: null
  total: number
}

export interface Item {
  added_at: Date
  added_by: Owner
  is_local: boolean
  primary_color: null
  track: Track
  video_thumbnail: VideoThumbnail
}

export interface Track {
  album: Album
  artists: Owner[]
  disc_number: number
  duration_ms: number
  episode: boolean
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
  track: boolean
  track_number: number
  type: TrackType
  uri: string
}

export interface Album {
  album_type: AlbumTypeEnum
  artists: Owner[]
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

export type AlbumTypeEnum = 'album' | 'single' | 'compilation'

export type ReleaseDatePrecision = 'day'

export interface ExternalIDS {
  isrc: string
}

export type TrackType = 'track'

export interface VideoThumbnail {
  url: null
}
