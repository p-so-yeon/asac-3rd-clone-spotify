import { createSlice } from '@reduxjs/toolkit'

import { Image } from '@/types/common/images-data-type'

interface userProfile {
  //타입 작성
  name: string
  followers: number
  profileImage: Image | null
}

const initialState: userProfile = {
  name: '',
  followers: 0,
  profileImage: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // pauseTrack: (state, action: PayloadAction<boolean>) => {
    //   state.isPlaying = action.payload
    // },
  },
  extraReducers: {},
})

export const {} = userSlice.actions
export default userSlice.reducer
