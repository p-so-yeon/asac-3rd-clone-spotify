'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FiEdit2 } from 'react-icons/fi'

interface dataProps {
  cover_img: string | null
  title: string
  author: string
  author_profile: string | null
}

interface PlaylistInfoProps {
  test_data: dataProps
}
export default function PlaylistInfo({ test_data }: PlaylistInfoProps) {
  const [coverHover, setCoverHover] = useState(false)
  return (
    <div className="relative flex w-full px-4 h-72 bg-gradient-to-b from-transparent to-color-card-primary">
      <button
        className="relative mr-5 shadow-xl top-16 w-52 h-52"
        onMouseOver={() => {
          setCoverHover(true)
        }}
        onMouseOut={() => {
          setCoverHover(false)
        }}
      >
        <Image
          fill={true}
          src={test_data.cover_img ? test_data.cover_img : '/img/playlistDefault.png'}
          alt="playlist cover image"
        />
        {coverHover && (
          <div className="relative flex flex-col items-center justify-center w-full h-full gap-2 text-white bg-black bg-opacity-50">
            <FiEdit2 size={48} />
            <span>사진 선택</span>
          </div>
        )}
      </button>
      <div className="flex flex-col gap-4 text-white pt-36 ">
        <span className="text-sm">플레이리스트</span>
        <button className="text-5xl font-extrabold">{test_data.title}</button>
        <div className="flex gap-2">
          <div className="relative w-6 h-6 overflow-hidden rounded-full ">
            <Image
              fill={true}
              src={test_data.author_profile ? test_data.author_profile : '/img/userDefaultProfile.jpeg'}
              alt="author profile image"
            />
          </div>
          <p>{test_data.author}</p>
        </div>
      </div>
    </div>
  )
}
