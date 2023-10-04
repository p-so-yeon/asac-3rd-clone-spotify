'use client'
import { doc, getDoc } from 'firebase/firestore'
import { createContext, useContext, useEffect, useState } from 'react'

import firebaseDB from '@/app/firebase/firebasedb'

interface playlistTrack {
  id: string
  img: string
  name: string
  album_name?: string
  added_date: Date
  artist: string
  duration: number
}
export const PlaylistTracksContext = createContext<{
  playlistTracks: playlistTrack[]
  setPlaylistTracks: React.Dispatch<React.SetStateAction<playlistTrack[]>>
}>({
  playlistTracks: [],
  setPlaylistTracks: () => {},
})

export function PlaylistTrackProvider({ children, playlistSlug }) {
  const [playlistTracks, setPlaylistTracks] = useState<playlistTrack[]>([])
  const [playlistInfo, setPlaylistInfo] = useState()
  useEffect(() => {
    async function getCurrentPlaylist() {
      try {
        const playlistData = (await getDoc(doc(firebaseDB, 'myPlaylists', `${playlistSlug}`))).data()
        console.log('playlistData', playlistData)
      } catch (e) {
        console.log('Error getting current playlist')
      }
    }
    getCurrentPlaylist()
  }, [])
  return (
    <PlaylistTracksContext.Provider value={{ playlistTracks, setPlaylistTracks }}>
      {children}
    </PlaylistTracksContext.Provider>
  )
}
export function usePlaylistTracksContext() {
  const context = useContext(PlaylistTracksContext)
  if (!context) {
    throw new Error('playlist Track Context could not be made')
  }
  return context
}
