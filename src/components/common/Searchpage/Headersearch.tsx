'use client'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'

import Searchresultpage from '@/components/common/Searchpage/Searchresultpage'
import Track from '@/components/common/Searchpage/track'
import { useGetSearchItemsQuery } from '@/ducks/service/search-api'

function Headersearch() {
  const session = useSession()
  const [searchitem, setSearchitem] = useState(null)
  const [artist, setArtist] = useState([])
  const [album, setAlbum] = useState([])
  const [track, setTrack] = useState([])
  const { data } = useGetSearchItemsQuery(searchitem)
  console.log(data)

  // data?.artists, data?.albums, data?.tracks 값을 설정
  useEffect(() => {
    if (data) {
      setArtist(data.artists.items[0].name || [])
    }
  }, [data])
  console.log(typeof data?.tracks.items)
  return (
    <div>
      <div className="grow">
        <form>
          <div className="relative ">
            {' '}
            <input
              placeholder="어떤 것을 듣고 싶으세요?"
              className="bg-[#242424] rounded-[500px] px-9 py-[6px] h-[48px] w-[364px]"
              onChange={(e) => setSearchitem(e.target.value)}
            ></input>{' '}
            <button className="absolute top-[31.5%] left-3 hover:text-white">
              <FiSearch color="#b3b3b3" />
            </button>
          </div>
        </form>{' '}
      </div>
      <div className="flex">
        <Searchresultpage artist={artist} track={track}></Searchresultpage>
        {Array.isArray(data?.tracks) &&
          data?.tracks.items.map((item: any) => (
            <Track key={item.index} track={item.name} artist={item.artists.name}></Track>
          ))}
      </div>
    </div>
  )
}

export default Headersearch
