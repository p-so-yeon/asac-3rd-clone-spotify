'use client'
import Image from 'next/image'
import React from 'react'
import { SlOptions } from 'react-icons/sl'

import { usePlaylistTracksContext } from '@/app/playlist/PlaylistTrackProvider'

export default function Playlists() {
  const { playlistTracks, setPlaylistTracks } = usePlaylistTracksContext()
  return (
    <>
      <div className="w-full py-6 min-h-14 h-14 ">
        <SlOptions size={24} className="text-color-text-secondary" />
      </div>
      <div>
        <div className="w-full h-24 ">
          {playlistTracks.map((item) => (
            <div className="relative flex flex-row px-2 py-3" key={item.id}>
              <Image className="mr-3" src={item.img} width={40} height={40} alt="track image" />
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-sm font-semibold text-[#B3B3B3]">{item.artist}</p>
              </div>
              <div className="absolute text-right top-5 text-[#B3B3B3] text-sm right-48">
                {Math.floor(item.duration / 60000)}:{((item.duration % 60000) / 1000).toFixed(0).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
