export interface UsersSavedTracks {
  href: string;
  items: Item[];
  limit: number;
  next: null;
  offset: number;
  previous: null;
  total: number;
}

export interface Item {
  added_at: string;
  track: Track;
}

export interface Track {
  album: Album;
  artists: LinkedFrom[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIDS;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  linked_from?: LinkedFrom;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: LinkedFromType;
  uri: string;
  available_markets?: string[]
  restrictions?: object
}

export interface Album {
  album_type: AlbumTypeEnum;
  artists: LinkedFrom[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  is_playable: boolean;
  name: string;
  release_date: Date;
  release_date_precision: ReleaseDatePrecision;
  total_tracks: number;
  type: AlbumTypeEnum;
  uri: string;
  available_markets?: string[]
  restrictions?: object
}

export type AlbumTypeEnum = "compilation" | "album" | "single" | "appears_on";

export interface LinkedFrom {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name?: string;
  type: LinkedFromType;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export type LinkedFromType = "artist" | "track";

export interface Image {
  height: number;
  url: string;
  width: number;
}

export type ReleaseDatePrecision = "day" | "week" | "month" | "year";

export interface ExternalIDS {
  isrc: string;
}
