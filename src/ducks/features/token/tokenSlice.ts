import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  ACCESS_TOKEN: '',
}

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action) => {
      return {
        ...state,
        ACCESS_TOKEN: action.payload.ACCESS_TOKEN,
      }
    },
  },
})

export const { setToken } = tokenSlice.actions
export default tokenSlice
