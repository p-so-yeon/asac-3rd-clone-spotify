import React from 'react'

import AlbumCardContentList from '@/components/AlbumCardContentList'
import Banner from '@/components/common/Banner'
import GlobalPlayButton from '@/components/common/GlobalPlayButton'
import TrackContainer from '@/components/common/trackItem/TrackContainer'
import getArtist from '@/core/api/artist/getArtist'
import getArtistTopsTrack from '@/core/api/artist/getArtistTopTrack'
import { GetArtist } from '@/types/raw-api-data-type/artist/get-artist-data-type'
import { GetArtistTopTrack } from '@/types/raw-api-data-type/artist/get-artist-top-track-data-type'
import { GetArtistsAlbums } from '@/types/raw-api-data-type/artist/get-artists-albums-data-type'

import getArtistAlbums from '../../../core/api/artist/getArtistAlbums'

export default async function page({ params }: { params: { slug: string } }) {
  const artist: GetArtist = await getArtist(params.slug)
  const topTracks: GetArtistTopTrack = await getArtistTopsTrack(params.slug)
  const albums: GetArtistsAlbums = await getArtistAlbums(params.slug, 8)
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
        <h2 className="text-color-text-primary font-bold text-2xl">인기</h2>
        <TrackContainer className={''} tracks={topTracks.tracks} />
      </div>
      <AlbumCardContentList title={'디스코그래피'} linkPath={''} albums={albums.items} />
    </>
  )
}
