'use client'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setToken } from '@/ducks/features/token/tokenSlice'

export default function useSetAccessToken() {
  const dispatch = useDispatch()
  useEffect(() => {
    const setAccessToken = (token: String) => {
      console.log("token:", token)
      dispatch(
        setToken({
          ACCESS_TOKEN: token,
        }),
      )
      console.log('accessToken setted in Redux toolkit')

    }
    axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: `grant_type=client_credentials&client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_CLIENT_SECRET}`,
    })
      .then((response) => {
        const data = response.data
        setAccessToken(data.access_token)
      })
      .catch((error) => console.log("Couldn't set Token", error))
  })
}
