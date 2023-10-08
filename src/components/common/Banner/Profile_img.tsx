'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

import { useGetCurrentUserProfileQuery } from '@/ducks/service/user-api'

function Userimg() {
  const session = useSession()

  const { data, error, isLoading } = useGetCurrentUserProfileQuery(`${session.data?.user?.id}`)
  if (isLoading) {
    return <div>로딩중</div>
  }
  return data?.images[1].url
}

export default Userimg
