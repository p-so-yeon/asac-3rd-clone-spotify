'use client'

import { MdSkipNext } from 'react-icons/md'
import { useSelector } from 'react-redux'

import { Button } from '@/components/common/playback/playback-control-buttons/Button'
import { playerApi } from '@/ducks/service/player-api'
import { RootState } from '@/store/store'

export default function SkipNextButton() {
  const device_id = useSelector((state: RootState) => state.reducer.player.device_id)
  const [skipNextTrigger] = playerApi.endpoints.skipToNextPlayback.useLazyQuery()

  const handleSkipNext = (e: React.MouseEvent) => {
    e.preventDefault()
    skipNextTrigger(device_id)
  }

  return (
    <Button handleClick={handleSkipNext}>
      <MdSkipNext size={'1.5rem'} />
    </Button>
  )
}
