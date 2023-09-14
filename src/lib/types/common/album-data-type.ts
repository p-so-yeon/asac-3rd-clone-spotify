import { Artist } from "@/lib/types/common/artist-data-type";
import { Image } from "@/lib/types/common/images-data-type";
import { Track } from "@/lib/types/common/track-data-type";

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
  tracks?: Tracks;
  copyrights?: Copyright[];
  genres?: any[];
  label?: string;
  popularity?: number;
  is_playable: boolean;
}

export interface Copyright {
  text: string;
  type: string;
}

export interface Tracks {
  limit: number;
  next: null;
  offset: number;
  previous: null;
  total: number;
  items: Track[];
}

export type ItemType = "track" | "album" | "playlist" | "artist";