'use client'

import { MdSkipPrevious } from 'react-icons/md'
import { useSelector } from 'react-redux'

import { Button } from '@/components/common/playback/playback-control-buttons/Button'
import { playerApi } from '@/ducks/service/player-api'
import { RootState } from '@/store/store'

export default function SkipPreviousButton() {
  const device_id = useSelector((state: RootState) => state.reducer.player.device_id)
  const [skipPreviousTrigger] = playerApi.endpoints.skipToPreviousPlayback.useLazyQuery()

  const handleSkipPrevious = (e: React.MouseEvent) => {
    e.preventDefault()
    skipPreviousTrigger(device_id)
  }

  return (
    <Button handleClick={handleSkipPrevious}>
      <MdSkipPrevious size={'1.5rem'} />
    </Button>
  )
}
