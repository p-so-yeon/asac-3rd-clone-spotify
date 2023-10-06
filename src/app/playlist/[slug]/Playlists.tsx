'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { LuClock3 } from 'react-icons/lu'
import { SlOptions } from 'react-icons/sl'
import { VscHeart } from 'react-icons/vsc'
import { VscHeartFilled } from 'react-icons/vsc'

import { usePlaylistTracksContext } from '@/app/playlist/[slug]/PlaylistProvider'

export default function Playlists() {
  const seconds = 1
  const minute = seconds * 60
  const hour = minute * 60
  const day = hour * 24
  const { playlistTracks, setPlaylistTracks } = usePlaylistTracksContext()
  const [hover, setHover] = useState<number | null>(null)

  function calcDate(date) {
    const today = new Date()
    const dayPassed = Math.trunc((today.getTime() - date) / 1000)
    if (dayPassed < seconds) {
      return '방금전'
    } else if (dayPassed < minute) {
      return dayPassed + '초 전'
    } else if (dayPassed < hour) {
      return Math.trunc(dayPassed / minute) + '분 전'
    } else if (dayPassed < day) {
      return Math.trunc(dayPassed / hour) + '시간 전'
    } else {
      return Math.trunc(dayPassed / day) + '일 전'
    }
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
            <span className="w-1/6 mr-[48px]">추가한 날짜</span>
            <span className="pr-2">
              <LuClock3 size={15} />
            </span>
          </div>
        </div>
        <div className="w-full h-full text-color-text-secondary">
          {playlistTracks.map((item, index) => (
            <div
              className="flex items-center justify-around px-2 py-3 rounded-md hover:bg-color-hover-primary"
              onMouseOver={() => setHover(index)}
              onMouseOutCapture={() => setHover(null)}
              key={item.id}
            >
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
              <div className="w-[16px]">{index === hover && <VscHeart size={16} className="hover:text-white" />}</div>
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
