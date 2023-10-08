import { useSession } from 'next-auth/react'
import React from 'react'

import { useGetCurrentUsersPlaylistQuery } from '@/ducks/service/playlist-api'

function Userplaylist() {
  const session = useSession()
  const { data, isLoading } = useGetCurrentUsersPlaylistQuery(50)
  // useEffect(() => {
  //   //console.log(data?.items?.filter((item) => item.public === true).length)
  // }, [data])
  if (isLoading) {
    return <div>Loading..</div>
  }

  return (
    session.status === 'authenticated' &&
    data?.items?.filter((item) => item.public === true).length! > 0 &&
    data?.items?.filter((item) => item.public === true).length
  )
}
export default Userplaylist
