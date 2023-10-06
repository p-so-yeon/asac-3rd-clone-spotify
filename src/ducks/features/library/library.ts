import { createSlice } from '@reduxjs/toolkit'

interface Library {
  userPlaylist: any[]
  userLikedAlbums: any[]
  userLikedPlaylists: any[]
  userLikedTracks: any[]
  followedArtist: any[]
}
const initialState: Library = {
  userPlaylist: [],
  userLikedAlbums: [],
  userLikedPlaylists: [],
  userLikedTracks: [],
  followedArtist: [],
}

const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    setPlaylist: (state, action) => {
      return {
        ...state,
        userPlaylist: action.payload.userPlaylist,
      }
    },
    setLikedAlbums: (state, action) => {
      return {
        ...state,
        userLikedAlbums: action.payload.userLikedAlbums,
      }
    },
    setLikedPlaylists: (state, action) => {
      return {
        ...state,
        userLikedPlaylists: action.payload.userLikedPlaylists,
      }
    },
    setLikedTracks: (state, action) => {
      return {
        ...state,
        userLikedTracks: action.payload.userLikedTracks,
      }
    },
    setFollowedArtist: (state, action) => {
      return {
        ...state,
        followedArtist: action.payload.followedArtist,
      }
    },
  },
})

export const { setPlaylist, setLikedAlbums, setLikedPlaylists, setLikedTracks, setFollowedArtist } =
  librarySlice.actions

export default librarySlice
