import React from 'react'
interface trackprops {
  key: number
  cover: string
  title: string
  artist: string
}
export default function Toptracklist({ key, cover, title, artist }: trackprops) {
  return (
    <div className="flex">
      <div>{key}</div>
      <img src={cover}></img>
      <div className="flex-col">
        <div>{title}</div>
        <div>{artist}</div>
      </div>
    </div>
  )
}
