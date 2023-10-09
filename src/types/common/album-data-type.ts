import { Artist } from '@/types/common/artist-data-type'
import { Image } from '@/types/common/images-data-type'
import { Track } from '@/types/common/track-data-type'

export interface Album {
  album_type: string
  total_tracks: number
  id: string
  images: Image[]
  name: string
  release_date: string
  release_date_precision: string
  type: string
  artists: Artist[]
  tracks?: Tracks
  copyrights?: Copyright[]
  genres?: any[]
  label?: string
  popularity?: number
  is_playable?: boolean
}

export interface Copyright {
  text: string
  type: string
}

export interface Tracks {
  limit: number
  next: null
  offset: number
  previous: null
  total: number
  items: Track[]
}

export type AlbumType = 'single' | 'album' | 'appears_on' | 'compilation'
