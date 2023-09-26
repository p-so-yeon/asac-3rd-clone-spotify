import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getServerSession } from 'next-auth';

import { options } from '@/app/api/auth/[...nextauth]/options';
import { FollowedArtist } from '@/types/raw-api-data-type/user/followed-artist-data-type';

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.spotify.com/v1/me`,
    prepareHeaders: async (headers) => {
      const session = await getServerSession(options)
      if (session) {
        headers.set(`Authorization`, `Bearer ${session.accessToken}`)
      }
      return headers
    }
  }),
  endpoints: (builder) => ({
    getUserFollowedArtist: builder.query<FollowedArtist, null>({
      query: (limit) => `/following?type=artist&limit=${limit}`
    })
  })
})

export const { useGetUserFollowedArtistQuery } = userApi