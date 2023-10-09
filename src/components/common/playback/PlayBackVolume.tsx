import React, { useState } from 'react'
import { MdVolumeOff, MdVolumeUp } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from '@/components/common/playback/playback-control-buttons/Button'
import { setVolume } from '@/ducks/features/player/player'
import { playerApi } from '@/ducks/service/player-api'
import { debounce } from '@/lib/utils/debounce'
import { checkVolumeRange } from '@/lib/utils/validations'
import { RootState } from '@/store/store'

export default function PlayBackVolume() {
  const dispatch = useDispatch()
  const { device_id, volume } = useSelector((state: RootState) => state.reducer.player)
  const [volumeTrigger] = playerApi.endpoints.setPlaybackVolume.useMutation()

  const [localVolume, setLocalVolume] = useState<number>(50)

  const [isMute, setIsMute] = useState<boolean>(localVolume !== 0)

  const toggleMute = (e: React.MouseEvent) => {
    setIsMute((prevState) => !prevState)
    const newVolume = isMute ? 0 : localVolume
    dispatch(setVolume(newVolume))
    volumeTrigger({ volume_percent: newVolume, device_id })
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Math.floor(e.target.valueAsNumber)
    if (!checkVolumeRange(newVolume)) return
    dispatch(setVolume(newVolume))
    setLocalVolume(newVolume)
    volumeTrigger({ volume_percent: newVolume, device_id })
    if (volume === 0) {
      setIsMute(true)
    }
  }

  const debouncedOnChange = debounce<typeof handleVolumeChange>(handleVolumeChange, 300)
  const debouncedToggleMute = debounce<typeof toggleMute>(toggleMute, 300)

  return (
    <>
      <Button handleClick={debouncedToggleMute}>
        {isMute ? <MdVolumeUp size={'1rem'} /> : <MdVolumeOff size={'1rem'} />}
      </Button>
      <input
        type="range"
        min={0}
        max={100}
        step={1}
        className="h-1 ml-2"
        defaultValue={volume}
        onChange={debouncedOnChange}
      />
    </>
  )
}
