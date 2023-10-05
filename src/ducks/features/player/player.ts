import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Track } from '@/types/common/track-data-type'

interface Player {
  device_id: string
  isReady: boolean
  currentTrack: Track
  currentPlaylist: any // playlist
  trackQueue: Track[]
  volume: number
  isPlaying: boolean
  isSuffle: boolean
  isRepeat: boolean
  isloading: boolean
  duration: number
  position: number
}

const initialState: Player = {
  device_id: '',
  isReady: false,
  currentTrack: {} as Track,
  currentPlaylist: {},
  trackQueue: [] as Track[],
  volume: 50,
  isPlaying: false,
  isSuffle: false,
  isRepeat: false,
  isloading: false,
  duration: 0,
  position: 0,
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setDeviceId: (state, action: PayloadAction<string>) => {
      state.device_id = action.payload
    },
    setReady: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload
    },
    setPause: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload
    },
    setPlay: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload
    },
    setSuffle: (state, action: PayloadAction<boolean>) => {
      state.isSuffle = action.payload
    },
    setRepeat: (state, action: PayloadAction<boolean>) => {
      state.isRepeat = action.payload
    },
    setVolume: (state, action: PayloadAction<boolean>) => {
      state.isRepeat = action.payload
    },
    setPosisition: (state, action: PayloadAction<boolean>) => {
      state.isRepeat = action.payload
    },
    setTrack: (state, action: PayloadAction<boolean>) => {
      state.isRepeat = action.payload
    },
    addQueue: (state, action: PayloadAction<boolean>) => {
      state.isRepeat = action.payload
    },
    updateQueue: (state, action: PayloadAction<boolean>) => {
      state.isRepeat = action.payload
    },
    deleteQueue: (state, action: PayloadAction<boolean>) => {
      state.isRepeat = action.payload
    },
  },
  extraReducers: {},
})

export const {
  setDeviceId,
  setReady,
  setPause,
  setPlay,
  setSuffle,
  setRepeat,
  setVolume,
  setPosisition,
  setTrack,
  addQueue,
  updateQueue,
  deleteQueue,
} = playerSlice.actions
export default playerSlice.reducer
