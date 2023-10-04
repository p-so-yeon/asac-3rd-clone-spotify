import { Artist } from '@/lib/types/common/artist-data-type'

export interface FollowArtist {
  artists: Artists
}

export interface Artists {
  limit: number
  next: null
  cursors: Cursors
  total: number
  items: Artist[]
}

export interface Cursors {
  after: null
}
