import { useSession } from 'next-auth/react'
import React from 'react'

import { useGetCurrentUserProfileQuery } from '@/ducks/service/user-api'
interface Typeprops {
  type: 'big' | 'small'
}
function Userprofile({ type }: Typeprops) {
  const session = useSession()

  const { data, error, isLoading } = useGetCurrentUserProfileQuery(`${session.data?.user?.id}`)

  console.log(data)
  return <div>hi</div>
}

export default Userprofile
