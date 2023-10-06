'use client'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import { createContext, useContext, useEffect, useState } from 'react'

import firebaseDB from '@/core/service/firebase/firebasedb'

interface playlistTrack {
  id: string
  img: string
  name: string
  album_name?: string
  added_date: number
  artist: string
  duration: number
  liked: boolean
}
interface playlistInfo {
  author: string
  title: string
  coverImg: string
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
  playlistInfo: { author: '', title: '', coverImg: '' },
  setPlaylistInfo: () => {},
})
async function updatePlaylist({ playlistInfo, playlistTracks, slug }) {
  console.log('updated')
  try {
    const playlistData = doc(firebaseDB, 'myPlaylists', `${slug}`)
    await updateDoc(playlistData, {
      ...playlistInfo,
      tracks: playlistTracks,
    })
  } catch (e) {
    console.log('Error updating current playlist', e)
  }
}

export function PlaylistProvider({ children, playlistSlug }) {
  const router = useRouter()

  const [playlistTracks, setPlaylistTracks] = useState<playlistTrack[]>([])
  const [playlistInfo, setPlaylistInfo] = useState<playlistInfo>({ author: '', title: '', coverImg: '' })
  useEffect(() => {
    async function getCurrentPlaylist() {
      try {
        const playlistData = (await getDoc(doc(firebaseDB, 'myPlaylists', `${playlistSlug}`))).data()
        setPlaylistTracks(playlistData?.tracks) //
        setPlaylistInfo({ author: playlistData?.author, title: playlistData?.title, coverImg:playlistData?.coverImg })
        console.log('playlist set done')
      } catch (e) {
        console.log('Error getting current playlist')
      }
    }
    getCurrentPlaylist()
  }, [])

  window.addEventListener('beforeunload', () => {
    updatePlaylist({ playlistInfo: playlistInfo, playlistTracks: playlistTracks, slug: playlistSlug })
  })
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
