import React from 'react'

export default function Track({ track, artist }: any) {
  return (
    <div>
      <div className="text-white">곡</div>
      <div className="flex w-80 h-5">
        <div className="flex">
          <div className="bg-white w-[40px] h-[40px] "></div>
          <div>
            <div className="text-white">드라마{track}</div>
            <div className="text-white">아이유{artist}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
