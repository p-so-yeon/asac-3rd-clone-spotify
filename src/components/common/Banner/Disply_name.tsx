'use client'
import { useSession } from 'next-auth/react'

import { useGetCurrentUserProfileQuery } from '@/ducks/service/user-api'

function Display_name() {
  const session = useSession()

  const { data, error, isLoading } = useGetCurrentUserProfileQuery(`${session.data?.user?.id}`)

  if (isLoading) {
    return <div> loading.. </div>
  }

  return data?.display_name
}

export default Display_name
