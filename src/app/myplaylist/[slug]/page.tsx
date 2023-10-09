import PlaylistInfo from '@/app/myplaylist/[slug]/PlaylistInfo'
import { PlaylistProvider } from '@/app/myplaylist/[slug]/PlaylistProvider'
import Playlists from '@/app/myplaylist/[slug]/Playlists'
import SearchTrack from '@/app/myplaylist/[slug]/SearchTrack'

export default function page({ params }: { params: { slug: string } }) {
  return (
    <div className="w-full overflow-y-scroll h-5/6">
      <PlaylistProvider playlistSlug={params.slug}>
        <PlaylistInfo slug={params.slug} />
        <div className="flex flex-col gap-12 px-5">
          <section>
            <Playlists />
          </section>
          <section className="h-56 pt-4 mt-4 border-tborder-neutral-500">
            <SearchTrack />
          </section>
        </div>
      </PlaylistProvider>
    </div>
  )
}
