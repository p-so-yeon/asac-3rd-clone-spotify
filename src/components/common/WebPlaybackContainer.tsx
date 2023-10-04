'use client'
import { getSession, useSession } from 'next-auth/react'
import { useEffect } from 'react'

// import { setDeviceId } from '@/ducks/features/player/player'
// import { playerApi } from '@/ducks/service/player-api'

const handleSportifyScriptLoad = async () => {
  const session = await getSession()
  return session
}

export default function WebPlaybackContainer() {
  const session = useSession()

  useEffect(() => {
    // const script = document.createElement('script')
    // script.src = 'https://sdk.scdn.co/spotify-player.js'
    // script.async = true

    // document.body.appendChild(script)
    // console.log(session)

    // window.onSpotifyWebPlaybackSDKReady = () => {
    //   console.log('initialize webplayback')

    //   const player = new window.Spotify.Player({
    //     name: 'web playback sdk',
    //     getOAuthToken: (cb) => {
    //       cb(session.data?.accessToken as string)
    //     },
    //     volume: 0.5,
    //   })
    //   console.log(player)
    //   player.addListener('ready', ({ device_id }) => {
    //     console.log('Ready with Device ID', device_id)
    //   })
    //   console.log(player)

    //   player.addListener('ready', ({ device_id }) => {
    //     console.log('Ready with Device ID', device_id)
    //     setDeviceId(device_id)
    //     // const body = { device_ids: [`${device_id}`], play: false }
    //     // fetch('https://api.spotify.com/v1/me/player', {
    //     //   method: 'PUT',
    //     //   headers: {
    //     //     'Content-Type': 'application/json',
    //     //     Authorization: `Bearer ${session.data?.accessToken}`,
    //     //   },
    //     //   body: JSON.stringify(body),
    //     // })
    //     playerApi.endpoints.transferPlayback.initiate({ device_ids: [`${device_id}`], play: false })
    //   })
    //   player.addListener('not_ready', ({ device_id }) => {
    //     console.log('Device ID has gone offline', device_id)
    //   })
    //   player.addListener('player_state_changed', (state) => {
    //     if (!state) {
    //       return
    //     }
    //     console.log('state changed', state)
    //     // setTrack()
    //     // setTrack(state.track_window.current_track)
    //     // setPaused(state.paused)
    //     // setPosition(state.position)
    //     // setDuration(state.duration)

    //     // player.getCurrentState().then((state) => {
    //     //   !state ? setActive(false) : setActive(true)
    //     // })
    //   })
    // }
    return () => {}
  }, [])

  return <div>Enter</div>
}
