'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { LuClock3 } from 'react-icons/lu'
import { SlOptions } from 'react-icons/sl'
import {VscHeart} from 'react-icons/vsc'
import {VscHeartFilled} from 'react-icons/vsc'

import { usePlaylistTracksContext } from '@/app/playlist/PlaylistTrackProvider'

export default function Playlists() {
  const { playlistTracks, setPlaylistTracks } = usePlaylistTracksContext()
  const {trackHover, setTrackHover}= useState(false)
  const relativeFormatter = new Intl.RelativeTimeFormat('ko', {
    numeric: 'auto',
  })
  function calcDate(date) {
    const created = date
    const today = new Date()
    const dayPassed = Math.ceil(created.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    const daysAgo = relativeFormatter.format(dayPassed, 'day')
    return daysAgo
  }
  return (
    <>
      <div className="w-full py-6 min-h-14 h-14 ">
        <SlOptions size={24} className="text-color-text-secondary" />
      </div>
      <div>
        <div className="mb-2 text-sm border-b text-color-text-secondary border-color-text-secondary">
          <div className="flex items-center justify-around px-2 py-3 ">
            <span>#</span>
            <span className="w-2/6">제목</span>
            <span className="w-2/6">앨범</span>
            <span className="w-1/6">추가한 날짜</span>
            <span className="pr-2">
              <LuClock3 size={15} />
            </span>
          </div>
        </div>
        <div className="w-full h-full text-color-text-secondary" onMouseOver={()=>setTrackHover(true)} onMouseOutCapture={()=>setTrackHover(false)}>
          {playlistTracks.map((item, index) => (
            <div className="flex items-center justify-around px-2 py-3 rounded-md hover:bg-color-hover-primary" key={item.id}>
              <span>{index + 1}</span>
              <span className="relative flex w-2/6">
                <Image className="mr-3" src={item.img} width={40} height={40} alt="track image" />
                <div>
                  <p className="font-semibold text-color-text-primary">{item.name}</p>
                  <p className="text-sm text-[#B3B3B3]">{item.artist}</p>
                </div>
              </span>
              <span className="w-2/6 text-sm">{item.album_name}</span>
              <span className="w-1/6 pl-2 text-sm">{calcDate(item.added_date)}</span>
              {trackHover&&(<VscHeart className="mr-2" size={16}/> )}
              <span className=" text-[#B3B3B3] text-sm">
                {Math.floor(item.duration / 60000)}:{((item.duration % 60000) / 1000).toFixed(0).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
