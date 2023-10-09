'use client'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import React from 'react'

import { useGetSearchItemsQuery } from '@/ducks/service/search-api'

function Searchresultpage({ artist, tracks }: props) {
  const [searchdata, setsearchdata] = useState('')
  // useEffect(() => {
  //   setsearchdata(word)
  // }, [word])

  console.log(searchdata)
  console.log(artist)
  console.log(tracks)
  const session = useSession()
  const { data } = useGetSearchItemsQuery(searchdata)
  return (
    <div className="flex">
      <div className="flex-col text-white">
        <div>상위결과</div>
        {artist.length > 0 ? (
          <div className="flex-col w-80 h-44 bg-black ">
            <div className="relative w-20 h-20 flex-col justify-center mt-[10px] ">
              <div className="rounded-full bg-white w-20 h-20 mt-[15px] text-center absolute left-3 top-[5px]"></div>
              <div className="text-white text-2xl font-semibold text-center absolute left-3 top-[108px]">{artist}</div>
              <div className="text-white text-xs text-center absolute top-[150px] left-5.5"> 아티스트 </div>
            </div>
          </div>
        ) : (
          <div>No artists found.</div>
        )}
      </div>
    </div>
  )
}
export default Searchresultpage
