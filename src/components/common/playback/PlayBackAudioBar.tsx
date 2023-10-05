'use client'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { playerApi } from '@/ducks/service/player-api'
import { cn } from '@/lib/utils/classNames'
import { convertMilliSecondsToMinutesAndSeconds } from '@/lib/utils/convert'
import { debounce } from '@/lib/utils/debounce'
import { RootState } from '@/store/store'

interface Props {
  className: string
}

export default function PlayBackAudioBar({ className }: Props) {
  const { currentTrack, paused, duration, device_id, position } = useSelector(
    (state: RootState) => state.reducer.player,
  )
  const [seekTrigger] = playerApi.endpoints.seekToPosition.useMutation()

  const [currentTime, setCurrentTime] = useState(0)
  const interval = 1000 // Update interval in milliseconds

  useEffect(() => {
    let timerId: number
    if (!paused) {
      timerId = window.setInterval(() => {
        setCurrentTime((prevTime) =>
          prevTime >= Math.floor(duration / 1000) * 1000 && position === 0 ? 0 : prevTime + interval,
        )
      }, interval)
    } else {
      //@ts-ignore
      window.clearInterval(timerId)
    }
    return () => {
      window.clearInterval(timerId)
    }
  }, [paused, duration, position])

  const handleProgressBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(Math.floor(e.target.valueAsNumber))
  }

  const handleSeeking = (e: React.MouseEvent<HTMLInputElement>) => {
    seekTrigger({ position_ms: Math.floor(e.currentTarget.valueAsNumber), device_id })
    setCurrentTime(Math.floor(e.currentTarget.valueAsNumber))
  }

  const handleKeyDownSeeking = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'ArrowRight' || e.code === 'ArrowLeft') {
      seekTrigger({ position_ms: Math.floor(e.currentTarget.valueAsNumber), device_id })
      setCurrentTime(Math.floor(e.currentTarget.valueAsNumber))
    }
  }

  const debouncedProgressBarChange = debounce<typeof handleProgressBarChange>(handleProgressBarChange, 200)
  const debouncedKSeeking = debounce<typeof handleSeeking>(handleSeeking, 200)
  const debouncedKeyDownSeeking = debounce<typeof handleKeyDownSeeking>(handleKeyDownSeeking, 200)

  return (
    <div className="flex gap-2 items-center text-color-text-primary text-xs w-full ">
      <span className="">{convertMilliSecondsToMinutesAndSeconds(currentTime)}</span>
      <input
        className={cn('w-full h-1', className)}
        type="range"
        min="0"
        max={duration}
        step={interval}
        value={currentTime}
        onChange={debouncedProgressBarChange}
        onMouseUp={debouncedKSeeking}
        onKeyDown={debouncedKeyDownSeeking}
      />
      {/* https://hermeslog.tistory.com/279 */}
      <span className="">{convertMilliSecondsToMinutesAndSeconds(!!currentTrack ? currentTrack?.duration_ms : 0)}</span>
    </div>
  )
}
