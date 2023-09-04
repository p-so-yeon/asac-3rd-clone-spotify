'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { MdPlayCircle, MdSkipNext, MdSkipPrevious, MdVolumeOff, MdVolumeUp } from 'react-icons/md'
import { PiRepeat, PiShuffleLight } from 'react-icons/pi'

import { MOCK_API_URL } from '@/lib/constant/path'
import { Track } from '@/lib/types/mock-data-type'

function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="text-color-text-secondary hover:text-color-text-primary active:text-color-active-primary">
      {children}
    </button>
  )
}

function Player() {
  const [currentTrack, setCurrentTrack] = useState<Track>()

  //최적화 해야함
  useEffect(() => {
    async function fetchCurrentTrack() {
      const url = `${MOCK_API_URL}/home/track`
      const res = await fetch(url)
      const trackData: Track = await res.json()
      console.log(trackData)

      setCurrentTrack(trackData)
    }
    fetchCurrentTrack()
  }, [])

  // aria-label, data-testid aria-expanded
  return (
    <footer className="flex w-screen gap-x-2 fixed bottom-0 bg-color-background-primary">
      <div className="basis-[30%] min-w-[180px] flex justify-start items-center">
        {currentTrack && (
          <div className="">
            <Image
              className="rounded"
              src={`${currentTrack?.album.images[0].url}`}
              width={56}
              height={56}
              alt={`${currentTrack?.album.name}`}
            />
          </div>
        )}
        <div className="flex flex-col">
          <span className="text-color-text-primary hover:underline">{currentTrack?.name}</span>
          <span className=" text-color-text-secondary hover:underline hover:text-color-text-primary">
            {currentTrack?.artists.map((artist) => artist.name)}
          </span>
        </div>
      </div>
      <div className="basis-[40%] max-w-[722px] ">
        <div className="flex justify-center gap-4 mb-2">
          <div className="flex justify-end gap-2 ml-auto">
            <Button>
              <PiShuffleLight size={'1rem'} />
            </Button>
            <Button>
              <MdSkipPrevious size={'1.5rem'} />
            </Button>
          </div>
          <Button>
            <MdPlayCircle size={'2rem'} className={'text-color-text-primary hover:scale-105 active:scale-100'} />
          </Button>
          <div className="flex justify-start gap-2 mr-auto">
            <Button>
              <MdSkipNext size={'1.5rem'} />
            </Button>
            <Button>
              <PiRepeat size={'1rem'} />
            </Button>
          </div>
        </div>
      </div>
      <div className="basis-[30%] min-w-[180px]  flex justify-end">
        <div className="flex items-center">
          <Button>
            <MdVolumeUp size={'1rem'} />
          </Button>
          <Button>
            <MdVolumeOff size={'1rem'} />
          </Button>
          <input type="range" min={0} max={1} step={0.1} className="h-1 ml-2" />
        </div>
      </div>
    </footer>
  )
}

export default Player
