import Image from 'next/image'
import React from 'react'

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
  return (
    <section className="relative flex w-full px-4 h-72 bg-gradient-to-b from-transparent to-color-card-primary">
      <button className="relative mr-5 text-white shadow-xl top-16 w-52 h-52 hover:bg-color-hover-primary">
        <Image
          fill={true}
          src={test_data.cover_img ? test_data.cover_img : '/img/playlistDefault.png'}
          alt="playlist cover image"
        />
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
    </section>
  )
}
