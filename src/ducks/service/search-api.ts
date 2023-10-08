import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getSession } from 'next-auth/react'

import { GetAlbum } from '@/types/raw-api-data-type/album/get-album-data-types'

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.spotify.com/v1/`,
    prepareHeaders: async (headers) => {
      const session = await getSession()
      if (session) {
        headers.set(`Authorization`, `Bearer ${session.accessToken}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    getSearchItems: builder.query<GetAlbum, string>({
      query: (item) => `/search?q=${item}&type=album%2Cartist%2Ctrack&offset=10&limit=15`,
    }),
  }),
})

export const { useGetSearchItemsQuery } = searchApi
