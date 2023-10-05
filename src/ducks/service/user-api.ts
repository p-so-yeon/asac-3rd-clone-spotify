import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getSession } from 'next-auth/react'

import { UsersSavedTracks } from '@/types/raw-api-data-type/track/users-saved-tracks-data-type'
import { FollowedArtist } from '@/types/raw-api-data-type/user/followed-artist-data-type'
import { GetCurrentUserProfile } from '@/types/raw-api-data-type/user/get-current-user-profile-data-type'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.spotify.com/v1/me`,
    prepareHeaders: async (headers) => {
      const session = await getSession()
      if (session) {
        headers.set(`Authorization`, `Bearer ${session.accessToken}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    getUserFollowedArtist: builder.query<FollowedArtist, number>({
      query: (limit) => `/following?type=artist&limit=${limit}`,
    }),
    getCurrentUserProfile: builder.query<GetCurrentUserProfile, string>({
      query: () => `/`,
    }),
    getUsersSavedTracks: builder.query<UsersSavedTracks, number>({
      query: (limit) => `/tracks?limit=${limit}`,
    }),
  }),
})

export const { useGetUserFollowedArtistQuery, useGetCurrentUserProfileQuery, useGetUsersSavedTracksQuery } = userApi
