import getPlaylist from '@/core/api/playlist/getPlaylist'
import { GetPlaylist, Image, Owner } from '@/types/raw-api-data-type/playlist/get-playlist-type'
interface playlistBannerData {
  title: string
  coverImg: Image[]
  description: string
  type: string
  owner: Owner
  followers: number
  total_tracks: number
}

export default async function page({ params }: { params: { slug: string } }) {
  const playlistData: GetPlaylist | undefined = await getPlaylist(params.slug)
  const playlistSnapshot = playlistData?.snapshot_id //The version identifier for the current playlist.

  const playlistBannerData: playlistBannerData = {
    title: playlistData?.name || '',
    coverImg: playlistData?.images || [],
    description: playlistData?.description || '',
    type: playlistData?.type || '',
    owner: playlistData?.owner || ({} as Owner), //type
    followers: playlistData?.followers?.total || 0,
    total_tracks: playlistData?.tracks?.total || 0,
    //총 시간
  }

  return (
    <>
      <Banner />
      <PlaylistSetting />
      <Tracks />
    </>
  )
}
