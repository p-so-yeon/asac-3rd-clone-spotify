// 작업전

export interface RecentlyPlayed {
  limit: number;
  next: string;
  cursors: Cursors;
  items: Item[];
}

export interface Cursors {
  after: string;
  before: string;
}

export interface Item {
  track: Track;
  played_at: Date;
}

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
  id: string;
  name: string;
  type: string;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}