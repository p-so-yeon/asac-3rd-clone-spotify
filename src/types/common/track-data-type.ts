import { Album } from "@/lib/types/common/album-data-type";
import { Artist } from "@/lib/types/common/artist-data-type";

export interface Track {
  album?: Album;
  artists: Artist[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  id: string;
  is_playable?: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  is_local: boolean;
}
