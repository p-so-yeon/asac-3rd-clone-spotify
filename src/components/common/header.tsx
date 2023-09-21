'use client'
import { useEffect, useState } from 'react'
import { BsDot } from 'react-icons/bs'

import Nav from '@/components/common/Nav'
import { MOCK_API_URL } from '@/lib/constant/path'
import { User } from '@/lib/types/mock-data-type'
import { Artists } from '@/lib/types/mock-data-type'
import { playlistItem } from '@/lib/types/mock-data-type'
function Contentheader() {
  const [curuser, setCuruser] = useState<User>()
  const [followed, setFollowed] = useState<Artists>()
  const [number, setNumber] = useState<playlistItem>()
  useEffect(() => {
    async function userdata() {
      const url = `${MOCK_API_URL}/home/user`
      let res = await fetch(url)
      if (res.ok) {
        let user_data = await res.json()
        console.log(user_data)
        setCuruser(user_data)
      } else {
        alert('error' + res.status)
      }
    }
    async function followed_data() {
      const url1 = `${MOCK_API_URL}/followed-artist`
      let res1 = await fetch(url1)
      if (res1.ok) {
        let user_data1 = await res1.json()
        console.log(user_data1)
        setFollowed(user_data1)
      } else {
        alert('error' + res1.status)
      }
      console.log(followed?.total)
    }
    async function get_user_playlist() {
      const url2 = `${MOCK_API_URL}/home/user_playlist`
      let res2 = await fetch(url2)
      if (res2.ok) {
        let user_data2 = await res2.json()
        console.log(user_data2)
        setNumber(user_data2)
      } else {
        alert('error' + res2.status)
      }
      console.log(number?.total)
    }

    userdata(), followed_data(), get_user_playlist()
  }, [])

  return (
    <div>
      <div className="bg-gradient-to-r from-color-active-primary  rounded-lg ">
        <div className="z-10">
          {' '}
          <Nav></Nav>
        </div>
        <div>
          <div className="relative pointer-events-none ml-[30px] h-[30vh] flex z-0">
            <div className="absolute bottom-12  w-[192px] h-[192px] flex">
              <button className=" shadow-2xl mr-[15px]  rounded-full">
                <img className="w-[192px] h-[192px]  rounded-full" />
              </button>{' '}
            </div>
            <div className=" whitespace-nowrap flex flex-col ">
              <div className="absolute left-[245px] top-[85px] text-[14px]  text-color-text-primary ml-2.5">
                {' '}
                프로필
              </div>
              <div className="absolute left-[245px] top-[115px] text-[6rem] text-color-text-primary font-black ">
                {curuser?.display_name}
              </div>
              <div className="flex text-white absolute left-[245px] top-[250px] text-[0.8125rem] items-center">
                <div className="flex">
                  공개 플레이리스트 <div> {number?.total}개</div>
                </div>
                <div>
                  <BsDot></BsDot>
                </div>{' '}
                <a>팔로잉{followed?.artists.total} 명</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contentheader
