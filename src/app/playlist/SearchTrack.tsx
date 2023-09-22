import React from 'react'

import SearchBar from '@/components/common/SearchBar'

export default function SearchTrack() {
  function search(input) {}

  return (
    <div>
      <h1 className="text-white text-xl font-bold mb-4 ">플레이리스트에 추가할 곡을 찾아보세요</h1>
      <div className="w-2/5">
        <SearchBar onChange={search} placeholder="곡 또는 에피소드 검색하기" />
      </div>
    </div>
  )
}
