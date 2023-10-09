import React from 'react'

import Banner from '@/components/common/Banner'
import GlobalPlayButton from '@/components/common/GlobalPlayButton'
import TrackContainer from '@/components/common/trackItem/TrackContainer'
import getArtist from '@/core/api/artist/getArtist'
import getArtistTopsTrack from '@/core/api/artist/getArtistTopTrack'
import { GetArtist } from '@/types/raw-api-data-type/artist/get-artist-data-type'
import { GetArtistTopTrack } from '@/types/raw-api-data-type/artist/get-artist-top-track-data-type'

export default async function page({ params }: { params: { slug: string } }) {
  const artist: GetArtist = await getArtist(params.slug)
  const topTracks: GetArtistTopTrack = await getArtistTopsTrack(params.slug)
  return (
    <>
      <Banner
        type={'profile'}
        inform={{
          banner_name: artist?.name,
          display_name: artist?.name,
          playlist: 0,
          following: artist?.followers.total,
          img: artist?.images[0].url,
        }}
      />
      <div className="flex gap-6 justify-start items-center">
        <GlobalPlayButton uri={artist.uri} className={'static opacity-100'} />
        <button className="inline-block border border-color-text-secondary rounded-full px-2 text-color-text-primary">
          팔로잉
        </button>
      </div>
      <div>
        <h2 className="text-color-text-primary font-bold">인기</h2>
        <TrackContainer className={''} tracks={topTracks.tracks} />
      </div>
    </>
  )
}
