'use client'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

import SearchResult from '@/app/playlist/[slug]/SearchResult'
import SearchBar from '@/components/common/SearchBar'

export default function SearchTrack() {
  const [searchResult, setSearchResult] = useState(null)
  const { data: session } = useSession()
  const accessToken = session?.accessToken
  async function getSearchData(searchInput: string) {
    console.log("searchInput",searchInput)
      try {
        const response = await axios({
          method: 'get',
          url: `https://api.spotify.com/v1/search?q=${searchInput}&type=track%2Calbum%2Cplaylist%2Cartist&offset=10&limit=15`,
          headers: { Authorization: 'Bearer  ' + accessToken },
        })
        setSearchResult(response?.data)
      } catch (error) {
        console.log('Could not get search result', error)
      }
    }
  function clearSearchResult() {
    setSearchResult(null);
  }
  return (
    <div>
      <h1 className="mb-4 text-xl font-bold text-white ">플레이리스트에 추가할 곡을 찾아보세요</h1>
      <div className="w-2/5">
        <SearchBar placeholder={'곡 또는 에피소드 검색하기'} onChange={getSearchData} onClear={clearSearchResult}/>
      </div>
      {searchResult&&(<SearchResult data={searchResult} />)
      }
    </div>
  )
    }
