export interface GetSearchforItem {
  albums: Albums
  artists: Artists
  tracks: Tracks
}

export interface Albums {
  href: string
  items: AlbumElement[]
  limit: number
  next: string
  offset: number
  previous: null
  total: number
}

export interface AlbumElement {
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

export enum AlbumTypeEnum {
  Album = 'album',
  Single = 'single',
}

export interface Artist {
  external_urls: ExternalUrls
  href: string
  id: ID
  name: Name
  type: ArtistType
  uri: URI
}

export interface ExternalUrls {
  spotify: string
}

export enum ID {
  The0EbNdVaOfp6N0OZ1GuIxM8 = '0ebNdVaOfp6N0oZ1guIxM8',
  The2YMDYqTvjFeBZcGC4ZMMVH = '2yMDYqTvjFeBZcGC4ZMMVH',
  The30B9WulBM8SFuBo17NNq9C = '30b9WulBM8sFuBo17nNq9c',
  The3HqSLMAZ3G3D5PoNaI7GOU = '3HqSLMAZ3g3d5poNaI7GOU',
  The4XDi67ZENZcbfKnvMnTYsI = '4XDi67ZENZcbfKnvMnTYsI',
  The5RmQ8K4L3HZ8JoPb4MNSML = '5RmQ8k4l3HZ8JoPb4mNsML',
  The68TCVp5T1Dxi2TvNuYoYK0 = '68TCVp5t1Dxi2TvNuYoYK0',
}

export enum Name {}

export enum ArtistType {
  Artist = 'artist',
}

export enum URI {
  SpotifyArtist0EbNdVaOfp6N0OZ1GuIxM8 = 'spotify:artist:0ebNdVaOfp6N0oZ1guIxM8',
  SpotifyArtist2YMDYqTvjFeBZcGC4ZMMVH = 'spotify:artist:2yMDYqTvjFeBZcGC4ZMMVH',
  SpotifyArtist30B9WulBM8SFuBo17NNq9C = 'spotify:artist:30b9WulBM8sFuBo17nNq9c',
  SpotifyArtist3HqSLMAZ3G3D5PoNaI7GOU = 'spotify:artist:3HqSLMAZ3g3d5poNaI7GOU',
  SpotifyArtist4XDi67ZENZcbfKnvMnTYsI = 'spotify:artist:4XDi67ZENZcbfKnvMnTYsI',
  SpotifyArtist5RmQ8K4L3HZ8JoPb4MNSML = 'spotify:artist:5RmQ8k4l3HZ8JoPb4mNsML',
  SpotifyArtist68TCVp5T1Dxi2TvNuYoYK0 = 'spotify:artist:68TCVp5t1Dxi2TvNuYoYK0',
}

export interface Image {
  height: number
  url: string
  width: number
}

export enum ReleaseDatePrecision {
  Day = 'day',
}

export interface Artists {
  href: string
  items: ArtistsItem[]
  limit: number
  next: null
  offset: number
  previous: null
  total: number
}

export interface ArtistsItem {
  external_urls: ExternalUrls
  followers: Followers
  genres: string[]
  href: string
  id: string
  images: Image[]
  name: string
  popularity: number
  type: ArtistType
  uri: string
}

export interface Followers {
  href: null
  total: number
}

export interface Tracks {
  href: string
  items: TracksItem[]
  limit: number
  next: string
  offset: number
  previous: null
  total: number
}

export interface TracksItem {
  album: AlbumElement
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
  type: PurpleType
  uri: string
}

export interface ExternalIDS {
  isrc: string
}

export enum PurpleType {
  Track = 'track',
}
