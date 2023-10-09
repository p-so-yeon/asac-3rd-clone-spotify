import { useSession } from 'next-auth/react'
import React from 'react'

import { useGetUserFollowedArtistQuery } from '@/ducks/service/user-api'

function Following() {
  const session = useSession()
  const { data, error, isLoading } = useGetUserFollowedArtistQuery(50)

  if (isLoading) {
    return <div>loading..</div>
  }
  return session.status === 'authenticated' && data?.artists && data?.artists?.total
}
export default Following
