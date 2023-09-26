import PlaylistInfo from '@/app/playlist/PlaylistInfo'
import Playlists from '@/app/playlist/Playlists'
import { PlaylistTrackProvider } from '@/app/playlist/PlaylistTrackProvider'
import SearchTrack from '@/app/playlist/SearchTrack'

const test_data = {
  cover_img: '',
  title: '내 플레이리스트 #20',
  author: '승효',
  author_profile: '',
}

export default function page() {
  return (
    <div className="h-full">
      <PlaylistInfo test_data={test_data} />
      <PlaylistTrackProvider>
        <div className="px-5">
          <section>
            <Playlists />
          </section>
          <section className="h-52 mt-4 pt-4 border-t border-neutral-500">
            <SearchTrack />
          </section>
        </div>
      </PlaylistTrackProvider>
    </div>
  )
}
