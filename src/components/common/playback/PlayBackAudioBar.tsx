'use client'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setPosition } from '@/ducks/features/player/player'
import { playerApi } from '@/ducks/service/player-api'
import { cn } from '@/lib/utils/classNames'
import { convertMilliSecondsToMinutesAndSeconds } from '@/lib/utils/convert'
import { RootState } from '@/store/store'

interface Props {
  className: string
}

export default function PlayBackAudioBar({ className }: Props) {
  const { currentTrack, paused, duration, device_id, position } = useSelector(
    (state: RootState) => state.reducer.player,
  )
  const [seekTrigger] = playerApi.endpoints.seekToPosition.useMutation()
  const dispatch = useDispatch()
  const interval = 1000 // Update interval in milliseconds

  useEffect(() => {
    let timerId: number
    if (!paused) {
      timerId = window.setInterval(() => {
        dispatch(
          setPosition(position >= Math.floor(duration / 1000) * 1000 && position === 0 ? 0 : position + interval),
        )
      }, interval)
    } else {
      //@ts-ignore
      window.clearInterval(timerId)
    }
    return () => {
      window.clearInterval(timerId)
    }
  }, [paused, duration, position, dispatch])

  const handleProgressBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPosition(Math.floor(e.currentTarget.valueAsNumber)))
  }

  const handleSeeking = (e: React.MouseEvent<HTMLInputElement>) => {
    seekTrigger({ position_ms: Math.floor(e.currentTarget.valueAsNumber), device_id })
    dispatch(setPosition(Math.floor(e.currentTarget.valueAsNumber)))
  }

  return (
    <div className="flex gap-2 items-center text-color-text-primary text-xs w-full ">
      <span className="">{convertMilliSecondsToMinutesAndSeconds(position)}</span>
      <input
        className={cn('w-full h-1', className)}
        type="range"
        min="0"
        max={duration}
        step={interval}
        value={position}
        onChange={handleProgressBarChange}
        onMouseUp={handleSeeking}
      />
      {/* https://hermeslog.tistory.com/279 */}
      <span className="">{convertMilliSecondsToMinutesAndSeconds(!!currentTrack ? currentTrack?.duration_ms : 0)}</span>
    </div>
  )
}
