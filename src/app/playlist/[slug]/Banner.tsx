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
      <div className="relative flex w-full px-4 h-72 bg-gradient-to-b from-transparent to-color-card-primary">
        <div className="relative mr-5 shadow-xl top-16 w-60 h-60">
          <Image fill={true} src={playlistInfo.coverImg} alt="playlist cover image" />
        </div>
        <div className="flex flex-col gap-4 text-white pt-36"></div>
        <span className="text-sm">플레이리스트</span>
        <span className="text-sm">{playlistInfo.description}</span>
        <h1 className="text-5xl font-extrabold placeholder-white bg-black border-none">{playlistInfo.title}</h1>
        <div className="flex gap-2">
          <div className="relative w-6 h-6 overflow-hidden rounded-full ">
            <Image fill={true} src="/img/userDefaultProfile.jpeg" alt="author profile image" />
          </div>
          <p>{playlistInfo.owner_name}</p>
          <p>{playlistInfo.followers}</p>
          <p>{playlistInfo.total_tracks}</p>
        </div>
      </div>
    </section>
  )
}

export default Banner
