import { createSlice } from "@reduxjs/toolkit"

interface Auth {
  //타입 작성
  name: string;
}

const initialState: Auth = {
  name: "",
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // pauseTrack: (state, action: PayloadAction<boolean>) => {
    //   state.isPlaying = action.payload
    // }, 
  },
  extraReducers: {}
})

export const { } = userSlice.actions
export default userSlice.reducer