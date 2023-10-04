import PlaylistInfo from '@/app/playlist/[slug]/PlaylistInfo'
import Playlists from '@/app/playlist/[slug]/Playlists'
import { PlaylistTrackProvider } from '@/app/playlist/[slug]/PlaylistTrackProvider'
import SearchTrack from '@/app/playlist/[slug]/SearchTrack'

const test_data = {
  cover_img: '',
  title: '내 플레이리스트 #20',
  author: '승효',
  author_profile: '',
}

export default function page({ params }: { params: { slug: string } }) {
  
  return (
    <div className="w-full overflow-y-scroll h-5/6">
      <PlaylistTrackProvider playlistSlug={params.slug}>
        <PlaylistInfo test_data={test_data} />
        <div className="flex flex-col gap-12 px-5">
          <section>
            <Playlists />
          </section>
          <section className="h-56 pt-4 mt-4 border-tborder-neutral-500">
            <SearchTrack />
          </section>
        </div> 
      </PlaylistTrackProvider> 
    </div>
  )
}
