'use client'
import { useEffect, useState } from 'react'

import ContentCard from '@/components/ContentCard/ContentCard'
import { MOCK_API_URL } from '@/lib/constant/path'
import { FeaturedPlaylist, Item } from '@/lib/types/playlist/featured-playlist-mock-data'

export default function Playlist() {
  const [featuredPlaylists, setFeaturedPlaylists] = useState<FeaturedPlaylist>()
  useEffect(() => {
    async function fetchFeaturedPlaylists() {
      const url = `${MOCK_API_URL}/featured-playlist`
      const res = await fetch(url)
      const featuredPlaylistData: FeaturedPlaylist = await res.json()
      console.log(featuredPlaylistData)
      setFeaturedPlaylists(featuredPlaylistData)
    }
    fetchFeaturedPlaylists()
  }, [])

  return (
    <>
      <h1>{featuredPlaylists?.message}</h1>
      <ul>
        {featuredPlaylists?.playlists.items.map((playlist: Item) => {
          return (
            <ContentCard
              key={playlist.id}
              data={playlist}
              image={<ContentCard.Image />}
              info={
                <ContentCard.Info>
                  <ContentCard.Name />
                  <ContentCard.Description />
                </ContentCard.Info>
              }
            />
          )
        })}
      </ul>
    </>
  )
}
