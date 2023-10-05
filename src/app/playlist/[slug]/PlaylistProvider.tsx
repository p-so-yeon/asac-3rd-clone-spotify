'use client'
import { doc, getDoc } from 'firebase/firestore'
import { createContext, useContext, useEffect, useState } from 'react'

import firebaseDB from '@/core/service/firebase/firebasedb'
import { File } from 'buffer'

interface playlistTrack {
  id: string
  img: string
  name: string
  album_name?: string
  added_date: Date
  artist: string
  duration: number
  liked: boolean
}
interface playlistInfo {
  author: string
  coverImg: Blob
  title: string
}
export const PlaylistTracksContext = createContext<{
  playlistTracks: playlistTrack[]
  setPlaylistTracks: React.Dispatch<React.SetStateAction<playlistTrack[]>>
}>({
  playlistTracks: [],
  setPlaylistTracks: () => {},
})
export const PlaylistInfoContext = createContext<{
  playlistInfo: playlistInfo
  setPlaylistInfo: React.Dispatch<React.SetStateAction<playlistInfo>>
}>({
  playlistInfo: { author: '', coverImg: '', title: '' },
  setPlaylistInfo: () => {},
})

export function PlaylistProvider({ children, playlistSlug }) {
  const [playlistTracks, setPlaylistTracks] = useState<playlistTrack[]>([])
  const [playlistInfo, setPlaylistInfo] = useState<playlistInfo>({ author: '', coverImg: '', title: '' })
  useEffect(() => {
    async function getCurrentPlaylist() {
      try {
        const playlistData = (await getDoc(doc(firebaseDB, 'myPlaylists', `${playlistSlug}`))).data()
        setPlaylistTracks(playlistData?.tracks) //
        setPlaylistInfo({ author: playlistData?.author, coverImg: playlistData?.coverImg, title: playlistData?.title })
        console.log('playlist set done')
      } catch (e) {
        console.log('Error getting current playlist')
      }
    }
    getCurrentPlaylist()
  }, [])
  return (
    <PlaylistTracksContext.Provider value={{ playlistTracks, setPlaylistTracks }}>
      <PlaylistInfoContext.Provider value={{ playlistInfo, setPlaylistInfo }}>{children}</PlaylistInfoContext.Provider>
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

export function usePlaylistInfoContext() {
  const context = useContext(PlaylistInfoContext)
  if (!context) {
    throw new Error('playlist Info Context could not be made')
  }
  return context
}
