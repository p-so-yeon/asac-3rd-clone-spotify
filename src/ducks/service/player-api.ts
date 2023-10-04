import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getSession } from 'next-auth/react'

import { CurrentlyplayingTrack } from '@/types/raw-api-data-type/player/currently-playing-track'
import { RecentlyplayedTrack } from '@/types/raw-api-data-type/player/recently-played-track'

export const playerApi = createApi({
  reducerPath: 'playerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.spotify.com/v1/me/player`,
    prepareHeaders: async (headers) => {
      const session = await getSession()
      if (session) {
        headers.set(`Authorization`, `Bearer ${session.accessToken}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    getCurrentlyPlayingTrack: builder.query<CurrentlyplayingTrack, null>({
      query: () => `/currently-playing`,
    }),
    getRecentlyPlayedTrack: builder.query<RecentlyplayedTrack, null>({
      query: () => `/recently-played`,
    }),
    transferPlayback: builder.mutation<RecentlyplayedTrack, { device_ids: string[]; play: boolean }>({
      query: (deviceId) => ({
        url: `/`,
        method: 'PUT',
        body: {
          device_ids: [`${deviceId}`],
        },
      }),
    }),
  }),
})

export const { useGetCurrentlyPlayingTrackQuery, useGetRecentlyPlayedTrackQuery, useTransferPlaybackMutation } =
  playerApi
