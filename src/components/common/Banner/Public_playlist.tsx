import { useSession } from 'next-auth/react'
import React from 'react'

import { useGetCurrentUsersPlaylistQuery } from '@/ducks/service/playlist-api'

function Userplaylist() {
  const session = useSession()
  const { data } = useGetCurrentUsersPlaylistQuery(50)
  // useEffect(() => {
  //   //console.log(data?.items?.filter((item) => item.public === true).length)
  // }, [data])
  return (
    <div>
      {session.status === 'authenticated' && data?.items?.filter((item) => item.public === true).length! > 0 && (
        <div className="flex">
          공개 플레이리스트{' '}
          <div className="ml-[5px]"> {data?.items?.filter((item) => item.public === true).length}개</div>
        </div>
      )}
    </div>
  )
}
export default Userplaylist
