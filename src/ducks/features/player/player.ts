import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { Track } from "@/types/common/track-data-type"

interface Player {
  currentTrack: Track
  currentPlaylist: any // playlist
  trackQueue: Track[]
  volume: number
  isPlaying: boolean
  isSuffle: boolean
  isRepeat: boolean
  isloading: boolean
}

const initialState: Player = {
  currentTrack: {} as Track,
  currentPlaylist: {},
  trackQueue: [] as Track[],
  volume: 50,
  isPlaying: false,
  isSuffle: false,
  isRepeat: false,
  isloading: false,
}

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    pauseTrack: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload
    },
    playTrack: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload
    },
    setSuffle: (state, action: PayloadAction<boolean>) => {
      state.isSuffle = action.payload
    },
    setRepeat: (state, action: PayloadAction<boolean>) => {
      state.isRepeat = action.payload
    },
    // setVolume
    // setCurrentTrack
    // addQueue
    // deleteQueue
    //  
  },
  extraReducers: {}
})

export const { pauseTrack, playTrack } = playerSlice.actions
export default playerSlice.reducer