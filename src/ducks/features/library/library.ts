import { createSlice } from "@reduxjs/toolkit"

import { FollowedArtist } from "@/types/raw-api-data-type/user/followed-artist-data-type"

// sidebar
interface Library {
  //타입 작성
  usersPlaylist: any[]
  userLikedAlbums: any[]
  userLikedPlaylists: any[]
  userLikedTrack: any[]
  followedArtist: FollowedArtist | []
}

const initialState: Library = {
  followedArtist: [],
  usersPlaylist: [],
  userLikedAlbums: [],
  userLikedPlaylists: [],
  userLikedTrack: []
}

export const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    // pauseTrack: (state, action: PayloadAction<boolean>) => {
    //   state.isPlaying = action.payload
    // },
  },
  extraReducers: {}
})

export const { } = librarySlice.actions
export default librarySlice.reducer