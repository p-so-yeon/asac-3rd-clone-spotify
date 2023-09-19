export interface GetRecommendations {
  tracks: Track[];
  seeds: Seed[];
}

export interface Seed {
  initialPoolSize: number;
  afterFilteringSize: number;
  afterRelinkingSize: number;
  id: string;
  type: string;
  href: string;
}

export interface Track {
  album: Album;
  artists: Artist[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIDS;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  is_playable?: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: TrackType;
  uri: string;
  available_markets?: string[]
  restrictions?: object
}

export interface Album {
  album_type: AlbumType;
  artists: Artist[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  is_playable?: boolean;
  name: string;
  release_date: string;
  release_date_precision: ReleaseDatePrecision;
  total_tracks: number;
  type: AlbumTypeEnum;
  uri: string;
  available_markets?: string[]
  restrictions?: object
}

export type AlbumType = "ALBUM" | "SINGLE";

export interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: ArtistType;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export type ArtistType = "artist";

export interface Image {
  height: number;
  url: string;
  width: number;
}

export type ReleaseDatePrecision = "day" | "week" | "month" | "year";

export type AlbumTypeEnum = "album";

export interface ExternalIDS {
  isrc: string;
}

export type TrackType = "track";
