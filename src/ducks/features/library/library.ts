import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { userApi } from '@/ducks/service/user-api'
import { Item } from '@/types/raw-api-data-type/user/followed-artist-data-type'

interface Library {
  width: number
  userPlaylist: any[]
  userLikedAlbums: any[]
  userLikedPlaylists: any[]
  userLikedTracks: any[]
  followedArtist: Item[]
}
const initialState: Library = {
  // width: 280,
  // @ts-ignore
  width: !localStorage.getItem('sidebarWidth') ? 280 : parseInt(localStorage.getItem('sidebarWidth') as string),
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
    setSidebarWidth: (state, action: PayloadAction<number>) => {
      state.width = action.payload
    },
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
  extraReducers: (builder) => {
    // 외부 slice의 action을 참조하여 내부 state를 변경
    builder.addMatcher(userApi.endpoints.getUserFollowedArtist.matchFulfilled, (state, { payload }) => {
      state.followedArtist = payload.artists.items
    })
  },
})

export const { setSidebarWidth, setPlaylist, setLikedAlbums, setLikedPlaylists, setLikedTracks, setFollowedArtist } =
  librarySlice.actions

export default librarySlice
