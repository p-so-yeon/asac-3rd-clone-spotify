export interface Track {
  album: Album;
  artists: Artist[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  id: string;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  is_local: boolean;
}

export interface Album {
  album_type: string;
  total_tracks: number;
  id: string;
  images: Image[];
  name: string;
  release_date: Date;
  release_date_precision: string;
  type: string;
  artists: Artist[];
  is_playable: boolean;
}

export interface Artist {
  id: string;
  name: string;
  type: string;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}

///
export interface FollowArtist {
  artists: Artists;
}

export interface Artists {
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
  followers: Followers;
  genres: string[];
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: Type;
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