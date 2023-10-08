'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import PauseButton from '@/components/common/playback/playback-control-buttons/PauseButton'
import PlayButton from '@/components/common/playback/playback-control-buttons/PlayButton'
import RepeatButton from '@/components/common/playback/playback-control-buttons/RepeatButton'
import ShuffleButton from '@/components/common/playback/playback-control-buttons/ShuffleButton'
import SkipNextButton from '@/components/common/playback/playback-control-buttons/SkipNextButton'
import SkipPreviousButton from '@/components/common/playback/playback-control-buttons/SkipPreviousButton'
import PlayBackVolume from '@/components/common/playback/PlayBackVolume'
import CurrentPlayingSkeleton from '@/components/common/skeletons/CurrentPlayingSkeleton'
import { useGetRecentlyPlayedTrackQuery } from '@/ducks/service/player-api'
import { defaultPlaylistImage } from '@/lib/utils/staticImages'
import { RootState } from '@/store/store'

import PlayBackAudioBar from './playback/PlayBackAudioBar'

function Player() {
  const { paused, currentTrack } = useSelector((state: RootState) => state.reducer.player)
  const { data, isLoading } = useGetRecentlyPlayedTrackQuery(null)

  useEffect(() => {
    console.log('player is redered')
  }, [])

  // aria-label, data-testid aria-expanded

  return (
    <>
      <footer className="fixed flex w-full px-2 bg-color-background-primary">
        <div className="basis-[30%] min-w-[180px] flex justify-start items-center">
          {currentTrack === null || JSON.stringify(currentTrack) === '{}' ? (
            isLoading ? (
              <CurrentPlayingSkeleton />
            ) : (
              <>
                <Image
                  className="mr-2 rounded"
                  src={data ? `${data?.items[0].track.album.images[0].url}` : defaultPlaylistImage}
                  width={56}
                  height={56}
                  alt={`${data?.items[0].track.name}`}
                />
                <div className="flex flex-col">
                  <span className="text-color-text-primary hover:underline">{data?.items[0].track.name}</span>
                  <span className=" text-color-text-secondary hover:underline hover:text-color-text-primary">
                    {data?.items[0].track.artists.map((artist) => artist.name)}
                  </span>
                </div>
              </>
            )
          ) : (
            <>
              <Image
                className="mr-2 rounded"
                src={currentTrack ? `${currentTrack?.album.images[0].url}` : defaultPlaylistImage}
                width={56}
                height={56}
                alt={`${currentTrack?.name}`}
              />
              <div className="flex flex-col">
                <span className="text-color-text-primary hover:underline">{currentTrack?.name}</span>
                <span className=" text-color-text-secondary hover:underline hover:text-color-text-primary">
                  {currentTrack?.artists.map((artist) => artist.name)}
                </span>
              </div>
            </>
          )}
        </div>
        <div className="basis-[40%] max-w-[722px] ">
          <div className="flex justify-center gap-4 mb-4">
            <div className="flex justify-end gap-2 ml-auto">
              <ShuffleButton />
              <SkipPreviousButton />
            </div>
            {paused ? <PlayButton /> : <PauseButton />}
            <div className="flex justify-start gap-2 mr-auto">
              <SkipNextButton />
              <RepeatButton />
            </div>
          </div>
          <div className="flex gap-2 items-center">
            {/* <div className={'bg-color-text-primary w-full h-1'}></div> */}
            <PlayBackAudioBar className="" />
            {/* <audio ref={audioRef} onDurationChange={(e) => setDuration(e.currentTarget.duration)}></audio> */}
          </div>
        </div>
        <div className="basis-[30%] min-w-[180px] flex justify-end">
          <div className="flex items-center">
            <PlayBackVolume />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Player
