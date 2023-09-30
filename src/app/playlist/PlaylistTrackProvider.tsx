'use client'
import { createContext, useContext, useState } from 'react'

interface playlistTrack {
  id: string
  img: string
  name: string
  album_name?: string
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

export function PlaylistTrackProvider({ children }) {
  const [playlistTracks, setPlaylistTracks] = useState<playlistTrack[]>([])
  // useEffect(() => {
  //   async function getCurrentPlaylist() {
  //     try {
  //       //트랙 데이터 불러오기
  //     } catch (e) {
  //       console.log('Error getting current playlist');
  //     }
  //   }
  //   getCurrentPlaylist();
  // }, []);
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
