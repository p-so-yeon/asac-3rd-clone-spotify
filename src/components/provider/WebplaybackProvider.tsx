'use client'

import Script from 'next/script'
import { getSession } from 'next-auth/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '@/store/store'

export default function WebplaybackProvider({ children }: { children: React.ReactNode }) {
  const [is_paused, setPaused] = useState<boolean>(false)
  const [is_active, setActive] = useState<boolean>(false)
  const [player, setPlayer] = useState<Spotify.Player | null>(null)
  const [current_track, setTrack] = useState<Spotify.Track | null>(null)
  const dispatch = useDispatch<AppDispatch>()

  // useEffect(() => {
  //   const script = document.createElement('script')
  //   script.src = 'https://sdk.scdn.co/spotify-player.js'
  //   script.async = true

  //   document.body.appendChild(script)

  //   window.onSpotifyWebPlaybackSDKReady = () => {
  //     const player = new window.Spotify.Player({
  //       name: 'Web Playback SDK',
  //       getOAuthToken: (cb) => {
  //         getSession().then((session) => {
  //           // cb(session?.accessToken?.replace(/\"/g, '') as string)
  //           cb(session?.accessToken as string)
  //         })
  //       },
  //       volume: 0.5,
  //     })

  //     setPlayer(player)

  //     player.addListener('ready', ({ device_id }) => {
  //       console.log('Ready with Device ID', device_id)
  //     })

  //     player.addListener('not_ready', ({ device_id }) => {
  //       console.log('Device ID has gone offline', device_id)
  //     })

  //     player.addListener('player_state_changed', (state) => {
  //       if (!state) {
  //         return
  //       }

  //       setTrack(state.track_window.current_track)
  //       setPaused(state.paused)

  //       player.getCurrentState().then((state) => {
  //         if (!state) {
  //           setActive(false)
  //         } else {
  //           setActive(true)
  //         }
  //       })
  //     })
  //     player.on('initialization_error', ({ message }) => {
  //       console.error('Failed to initialize', message)
  //     })
  //     player.on('authentication_error', ({ message }) => {
  //       console.error('Failed to authenticate', message)
  //     })
  //     player.on('account_error', ({ message }) => {
  //       console.error('Failed to validate Spotify account', message)
  //     })
  //     player.on('playback_error', ({ message }) => {
  //       console.error('Failed to perform playback', message)
  //     })

  //     player.connect()
  //   }
  // }, [])
  return (
    <>
      <Script
        async
        src="https://sdk.scdn.co/spotify-player.js"
        strategy="afterInteractive"
        onLoad={
          (window.onSpotifyWebPlaybackSDKReady = () => {
            const player = new window.Spotify.Player({
              name: 'ASAC Team C Web Playback',
              getOAuthToken: (cb) => {
                getSession().then((session) => {
                  cb(session?.accessToken as string)
                })
              },
              volume: 0.5,
            })

            setPlayer(player)

            player.addListener('ready', ({ device_id }) => {
              console.log('Ready with Device ID', device_id)
            })

            player.addListener('not_ready', ({ device_id }) => {
              console.log('Device ID has gone offline', device_id)
            })

            player.addListener('player_state_changed', (state) => {
              if (!state) {
                return
              }
              // dispatch(setTrack())
              setTrack(state.track_window.current_track)
              setPaused(state.paused)

              player.getCurrentState().then((state) => {
                if (!state) {
                  setActive(false)
                } else {
                  setActive(true)
                }
              })
            })
            player.on('initialization_error', ({ message }) => {
              console.error('Failed to initialize', message)
            })
            player.on('authentication_error', ({ message }) => {
              console.error('Failed to authenticate', message)
            })
            player.on('account_error', ({ message }) => {
              console.error('Failed to validate Spotify account', message)
            })
            player.on('playback_error', ({ message }) => {
              console.error('Failed to perform playback', message)
            })

            player.connect()
          })
        }
      />
      {children}
    </>
  )
}
