'use client'

import { MdPause, MdPlayArrow } from 'react-icons/md'
import { useSelector } from 'react-redux'

import { RootState } from '@/store/store'

export default function GlobalPlayButton() {
  const {} = useSelector((state: RootState) => state.reducer.player)
  const handleOnClickPlay = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }
  return (
    <button
      className="relative text-base font-bold text-center align-middle duration-75 rounded-full cursor-pointer touch-manipulation bg-color-accent-primary hover:scale-105"
      onClick={handleOnClickPlay}
    >
      <MdPause /> <MdPlayArrow />
    </button>
  )
}
