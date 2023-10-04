'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { FiEdit2 } from 'react-icons/fi'

import { usePlaylistInfoContext } from '@/app/playlist/[slug]/PlaylistProvider'

export default function PlaylistInfo() {
  useEffect(() => {
    if (playlistInfo.coverImg) {
      const image = window.URL.createObjectURL(playlistInfo.coverImg)
      setCoverImgPreview(image)
    }
  }, [])
  const { playlistInfo, setPlaylistInfo } = usePlaylistInfoContext()
  const [coverImgPreview, setCoverImgPreview] = useState('/img/playlistDefault.png')
  //playlistInfo.coverImg가 있다면 coverImgPreview를 셋팅하기

  const [coverHover, setCoverHover] = useState(false)
  const coverImgRef = useRef<HTMLInputElement | null>(null)

  const handleTitleChange = (e) => {
    setPlaylistInfo({ ...playlistInfo, title: e.target.value })
  }
  const handleCoverImg = () => {
    coverImgRef.current?.click()
  }
  const handleCoverChange = (e) => {
    if (!e.target.files) return
    const file = e.target.files[0]
    console.log('file', file)
    if (file) {
      let image = window.URL.createObjectURL(file)
      setCoverImgPreview(image)
      setPlaylistInfo({ ...playlistInfo, coverImg: file })
    }
  }
  return (
    <div className="relative flex w-full px-4 h-72 bg-gradient-to-b from-transparent to-color-card-primary">
      <input type="file" className="hidden" ref={coverImgRef} onChange={handleCoverChange} />
      <button
        className="relative mr-5 shadow-xl top-16 w-52 h-52"
        onMouseOver={() => {
          setCoverHover(true)
        }}
        onMouseOut={() => {
          setCoverHover(false)
        }}
        onClick={handleCoverImg}
      >
        <Image fill={true} src={coverImgPreview} alt="playlist cover image" />
        {coverHover && (
          <div className="relative flex flex-col items-center justify-center w-full h-full gap-2 text-white bg-black bg-opacity-50">
            <FiEdit2 size={48} />
            <span>사진 선택</span>
          </div>
        )}
      </button>
      <div className="flex flex-col gap-4 text-white pt-36">
        <span className="text-sm">플레이리스트</span>
        <input
          type="text"
          className="text-5xl font-extrabold bg-black placeholder-white border-none"
          placeholder="플레이리스트 제목"
          value={playlistInfo.title}
          onChange={handleTitleChange}
        ></input>
        <div className="flex gap-2">
          <div className="relative w-6 h-6 overflow-hidden rounded-full ">
            <Image
              fill={true}
              // src={playlistInfo. ? test_data.author_profile : '/img/userDefaultProfile.jpeg'}
              src="/img/userDefaultProfile.jpeg"
              alt="author profile image"
            />
          </div>
          <p>{playlistInfo.author}</p>
        </div>
      </div>
    </div>
  )
}
