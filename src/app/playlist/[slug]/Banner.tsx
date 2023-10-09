import Image from 'next/image'

interface PlaylistBannerData {
  title: string
  coverImg: string
  description: string
  type: string
  owner_name: string
  followers: number
  total_tracks: number
}
interface BannerProps {
  playlistInfo: PlaylistBannerData
}
function Banner({ playlistInfo }: BannerProps) {
  return (
    <section>
      <div className="relative flex w-full gap-4 px-4 pt-4 pb-8 h-72 bg-gradient-to-b from-transparent to-color-card-primary">
        <div className="relative shadow-xl w-60 h-60">
          <Image fill={true} src={playlistInfo.coverImg} alt="playlist cover image" />
        </div>
        <div className="flex flex-col justify-end gap-4 text-white">
          <span className="text-sm">플레이리스트</span>
          <span className="text-sm">{playlistInfo.description}</span>
          <h1 className="text-6xl font-extrabold ">{playlistInfo.title}</h1>
          <div className="flex gap-2">
            <div className="relative w-6 h-6 overflow-hidden rounded-full ">
              <Image fill={true} src="/img/userDefaultProfile.jpeg" alt="author profile image" />
            </div>
            <p className="text-sm font-bold">{playlistInfo.owner_name}</p>
            <p className="text-sm">· 좋아요{playlistInfo.followers} 개</p>
            <p className="text-sm">· {playlistInfo.total_tracks}곡</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
