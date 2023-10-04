import { useSession } from 'next-auth/react'
import React from 'react'

import { useGetUserFollowedArtistQuery } from '@/ducks/service/user-api'

function Following() {
  const session = useSession()
  const { data, error, isLoading } = useGetUserFollowedArtistQuery(50)
  // useEffect(() => {
  //   //console.log(data?.items?.filter((item) => item.public === true).length)
  // }, [data])
  return (
    <div>
      {session.status === 'authenticated' && data?.artists && (
        <div className="flex">
          팔로잉 <div className="ml-[5px]"> {data?.artists?.total}명</div>
        </div>
      )}
    </div>
  )
}
export default Following
