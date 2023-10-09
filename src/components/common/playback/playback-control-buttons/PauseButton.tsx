'use client'

import { MdPauseCircle } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from '@/components/common/playback/playback-control-buttons/Button'
import { setPause } from '@/ducks/features/player/player'
import { playerApi } from '@/ducks/service/player-api'
import { RootState } from '@/store/store'

export default function PauseButton() {
  const dispatch = useDispatch()
  const device_id = useSelector((state: RootState) => state.reducer.player.device_id)
  const [pauseTrigger] = playerApi.endpoints.pausePlayback.useMutation()

  const handlePause = (e: React.MouseEvent) => {
    e.preventDefault()
    pauseTrigger(device_id)
    dispatch(setPause(true))
  }

  return (
    <Button handleClick={handlePause}>
      <MdPauseCircle size={'2rem'} className={'text-color-text-primary hover:scale-105 active:scale-100'} />
    </Button>
  )
}
