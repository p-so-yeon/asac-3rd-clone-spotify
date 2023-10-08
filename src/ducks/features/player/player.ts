import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Player {
  device_id: string
  isReady: boolean
  context: Spotify.PlaybackContext
  currentTrack: Spotify.Track
  currentPlaylist: any // playlist
  trackQueue: Spotify.Track[]
  volume: number
  paused: boolean
  shuffled: boolean
  repeated: 0 | 1 | 2
  /**
   * 0: NO_REPEAT
   * 1: ONCE_REPEAT
   * 2: FULL_REPEAT
   *
   * The repeat mode.
   * No repeat mode is 0,
   * repeat context 1
   * repeat track 2.
   */
  duration: number
  position: number
  loading: boolean
  position_ms: number
}

const initialState: Player = {
  device_id: '',
  isReady: false,
  context: {} as Spotify.PlaybackContext,
  currentTrack: {} as Spotify.Track,
  currentPlaylist: {},
  trackQueue: [] as Spotify.Track[],
  volume: 50,
  paused: true,
  shuffled: false,
  repeated: 0,
  duration: 0,
  position: 0,
  loading: true,
  position_ms: 0,
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setDeviceId: (state, action: PayloadAction<string>) => {
      state.device_id = action.payload
    },
    setReady: (state, action: PayloadAction<boolean>) => {
      state.paused = action.payload
    },
    setContext: (state, action: PayloadAction<Spotify.PlaybackContext>) => {
      state.context = action.payload
    },
    setPause: (state, action: PayloadAction<boolean>) => {
      state.paused = action.payload
    },
    setShuffle: (state, action: PayloadAction<boolean>) => {
      state.shuffled = action.payload
    },
    setRepeat: (state, action: PayloadAction<0 | 1 | 2>) => {
      state.repeated = action.payload
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload
    },
    setPosition: (state, action: PayloadAction<number>) => {
      state.position = action.payload
    },
    setPosition_ms: (state, action: PayloadAction<number>) => {
      state.position_ms = action.payload
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload
    },
    setTrack: (state, action: PayloadAction<Spotify.Track>) => {
      state.currentTrack = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    // addQueue: (state, action: PayloadAction<boolean>) => {
    //   state.repeated = action.payload
    // },
    // updateQueue: (state, action: PayloadAction<boolean>) => {
    //   state.repeated = action.payload
    // },
    // deleteQueue: (state, action: PayloadAction<boolean>) => {
    //   state.repeated = action.payload
    // },
  },
})

export const {
  setDeviceId,
  setReady,
  setContext,
  setPause,
  setShuffle,
  setRepeat,
  setVolume,
  setPosition,
  setPosition_ms,
  setDuration,
  setTrack,
  setLoading,
  // addQueue,
  // updateQueue,
  // deleteQueue,
} = playerSlice.actions
export default playerSlice.reducer
