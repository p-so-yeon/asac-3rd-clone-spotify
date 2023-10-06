'use client'

import { MdPlayCircle } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from '@/components/common/playback/playback-control-buttons/Button'
import { setPause } from '@/ducks/features/player/player'
import { playerApi } from '@/ducks/service/player-api'
import { RootState } from '@/store/store'

export default function PlayButton() {
  const dispatch = useDispatch()
  const { currentTrack, device_id, position, duration, context } = useSelector(
    (state: RootState) => state.reducer.player,
  )
  const [playTrigger] = playerApi.endpoints.startAndResumePlayback.useMutation()
  const [transferTrigger] = playerApi.endpoints.transferPlayback.useMutation()

  const handlePlay = (e: React.MouseEvent) => {
    e.preventDefault()
    if (currentTrack === null) {
      return transferTrigger(device_id)
    }
    if (JSON.stringify(context) !== '{}' && context.uri !== null) {
      console.log('context :', context)
      playTrigger({
        device_id,
        type: 'playlist',
        uri: context.uri,
        position_ms: position <= Math.floor(duration / 1000) * 1000 ? position : 0,
      })
    } else {
      if (currentTrack !== null) {
        playTrigger({
          device_id,
          type: 'track',
          uri: currentTrack?.uri,
          position_ms: position <= Math.floor(duration / 1000) * 1000 ? position : 0,
        })
      }
      // if (!currentTrack?.uri) {
      //   playTrigger({
      //     device_id,
      //     type: 'track',
      //     uri: `spotify:${currentTrack.type}:${currentTrack.id}`,
      //     position_ms: position <= Math.floor(duration / 1000) * 1000 ? position : 0,
      //   })
      // } else {
      //   playTrigger({
      //     device_id,
      //     type: 'track',
      //     uri: currentTrack?.uri,
      //     position_ms: position <= Math.floor(duration / 1000) * 1000 ? position : 0,
      //   })
      // }
    }

    dispatch(setPause(false))
  }

  return (
    <Button handleClick={handlePlay}>
      <MdPlayCircle size={'2rem'} className={'text-color-text-primary hover:scale-105 active:scale-100'} />
    </Button>
  )
}
