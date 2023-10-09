import Banner from '@/app/playlist/[slug]/Banner'
import PlaylistSetting from '@/app/playlist/[slug]/PlaylistSetting'
import Tracks from '@/app/playlist/[slug]/Tracks'
import getPlaylist from '@/core/api/playlist/getPlaylist'
import { GetPlaylist } from '@/types/raw-api-data-type/playlist/get-playlist-type'

export default async function page({ params }: { params: { slug: string } }) {
  const playlistData: GetPlaylist | undefined = await getPlaylist(params.slug)
  console.log('playlistData:', playlistData)
  const playlistSnapshot = playlistData?.snapshot_id //The version identifier for the current playlist.

  const playlistBannerData = {
    title: playlistData?.name || '',
    coverImg: playlistData?.images[0]?.url || '', // 첫 번째 이미지 URL
    description: playlistData?.description || '',
    type: playlistData?.type || '',
    owner_name: playlistData?.owner.display_name,
    followers: playlistData?.followers?.total || 0,
    total_tracks: playlistData?.tracks?.total || 0,
  }

  return (
    <>
      <Banner playlistInfo={playlistBannerData} />
      <PlaylistSetting />
      <Tracks tracks={playlistData?.tracks.items} />
    </>
  )
}
