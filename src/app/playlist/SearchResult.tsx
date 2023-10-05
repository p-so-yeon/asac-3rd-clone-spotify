'use client'
import Image from 'next/image'
import React from 'react'

import { usePlaylistTracksContext } from '@/app/playlist/PlaylistTrackProvider'

export default function SearchResult({ data }) {
  const { playlistTracks, setPlaylistTracks } = usePlaylistTracksContext()
  function addTrack(item) {
    setPlaylistTracks([
      ...playlistTracks,
      {
        id: item.id,
        img: item.album.images[0]?.url,
        name: item.name,
        artist: item.artists[0]?.name,
        album_name: item.album.name,
        duration: item.duration_ms,
      },
    ])
  }

  return (
    <div className="">
      {data?.tracks.items.map((item) => (
        <div className="relative flex flex-row px-2 py-3 text-color-text-secondary" key={item.id}>
          <Image className="mr-3" src={item.album.images[0]?.url} width={40} height={40} alt="item image" />
          <div>
            <p className="font-bold">{item.name}</p>
            <p className="text-sm font-semibold">{item.artists[0]?.name}</p>
          </div>
          <div className="absolute text-right top-5  text-sm right-48">{item.album?.name}</div>
          <button className="absolute right-10 top-5" onClick={() => addTrack(item)}>
            추가하기
          </button>
        </div>
      ))}
    </div>
  )
}
