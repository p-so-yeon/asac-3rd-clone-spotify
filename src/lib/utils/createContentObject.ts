import { Image } from "@/lib/types/common/images-data-type"
import { AlbumItem } from "@/lib/types/raw-api-data-type/artist/get-artists-albums-data-type";
import { ArtistItem } from "@/lib/types/raw-api-data-type/artist/get-related-artist-data-type";
import { PlaylistItem } from "@/lib/types/raw-api-data-type/playlist/featured-playlist-data-type";
import { TrackItem } from "@/lib/types/raw-api-data-type/track/get-track-data-type";
import { UserItem } from "@/lib/types/raw-api-data-type/user/followed-artist-data-type";

type Items = ArtistItem | AlbumItem | PlaylistItem | TrackItem | UserItem;

// HOC으로 감싸고 넘기면 가능할 듯?
export type CommonContentObject = {
  id: string
  name: string
}

export interface ContentCardObject {
  id: string
  name: string
  image: Image
  description: string
}

const extractCommonContentFromObject = <T extends Items>(obj: T): CommonContentObject => {
  const { id, name } = obj;
  return { id, name }
}

const getContentFromArtist = (obj: ArtistItem): ContentCardObject => {
  const common = extractCommonContentFromObject(obj)
  const { images, type } = obj
  return { ...common, image: images[0], description: type }
}

const getContentFromAlbum = (obj: AlbumItem): ContentCardObject => {
  const common = extractCommonContentFromObject(obj)
  const { images, artists } = obj
  const description = artists.map(el => el.name).join(" ")
  return { ...common, image: images[0], description }
}

const getContentFromUser = (obj: UserItem): ContentCardObject => {
  const common = extractCommonContentFromObject(obj)
  const { images, type } = obj
  return { ...common, image: images[0], description: type }
}

const getContentFromPlayList = (obj: PlaylistItem): ContentCardObject => {
  const common = extractCommonContentFromObject(obj)
  const { images, description } = obj
  return { ...common, image: images[0], description }
}

const getContentFromTrack = (obj: TrackItem): ContentCardObject => {
  const common = extractCommonContentFromObject(obj)
  const { album, artists } = obj
  const { images } = album
  const description = artists.map(el => el.name).join(" ")
  return { ...common, image: images[0], description }
}

export const createContentFromItem = {
  artist: getContentFromArtist,
  album: getContentFromAlbum,
  user: getContentFromUser,
  playlist: getContentFromPlayList,
  track: getContentFromTrack
}

// 사용 예시
// const testdata: AlbumItem = {
//   "album_type": "compilation",
//   "total_tracks": 9,
//   "available_markets": ["CA", "BR", "IT"],
//   "external_urls": {
//     "spotify": "string"
//   },
//   "href": "string",
//   "id": "2up3OPMp9Tb4dAKM2erWXQ",
//   "images": [
//     {
//       "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
//       "height": 300,
//       "width": 300
//     }
//   ],
//   "name": "string",
//   "release_date": "1981-12",
//   "release_date_precision": "year",
//   "restrictions": {
//     "reason": "market"
//   },
//   "type": "album",
//   "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
//   "artists": [
//     {
//       "external_urls": {
//         "spotify": "string"
//       },
//       "href": "string",
//       "id": "string",
//       "name": "string",
//       "type": "artist",
//       "uri": "string"
//     }
//   ],
//   "album_group": "compilation",
// }
// const testContentData = createContentFromItem.album(testdata)
