export interface GetRelatedArtists {
  artists: Artist[]
}

export interface Artist {
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

export type { Artist as ArtistItem }
