import { Image } from "@/lib/types/common/images-data-type";

// in Album & Track #1
// followers? genres? images? popularity?
export interface Artist {
  followers?: Followers;
  genres?: string[];
  images?: Image[];
  popularity?: number;
  id: string;
  name: string;
  type: string;
}
export interface Followers {
  total: number;
}

// in Album & Track #2
// export interface ArtistMinimum extends Partial<Artist> {
//   id: string;
//   name: string;
//   type: string;
// }
// in Album & Track #3
// export interface minArtist extends Pick<Artist, "id" | "name" | "type"> { }

