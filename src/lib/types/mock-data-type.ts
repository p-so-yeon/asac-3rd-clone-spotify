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
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}

export interface Album {
  album_type: string;
  total_tracks: number;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: Date;
  release_date_precision: string;
  type: string;
  uri: string;
  artists: Artist[];
  is_playable: boolean;
}

export interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}

export interface ExternalIDS {
  isrc: string;
}

///
export interface FollowArtist {
  artists: Artists;
}

export interface Artists {
  href: string;
  limit: number;
  next: null;
  cursors: Cursors;
  total: number;
  items: Item[];
}

export interface Cursors {
  after: null;
}

export interface Item {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: Type;
  uri: string;
}
// export interface Artist extends Partial<Item> {
//   external_urls: ExternalUrls;
//   href: string;
//   id: string;
//   name: string;
//   type: string;
//   uri: string;
// }

export interface Followers {
  href: null;
  total: number;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}

export type Type = "artist";