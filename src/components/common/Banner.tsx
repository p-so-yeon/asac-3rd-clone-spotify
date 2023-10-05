'use client'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { BsDot } from 'react-icons/bs'

import Display_name from '@/components/common/Banner/Disply_name'
import Following from '@/components/common/Banner/Following'
import Userplaylist from '@/components/common/Banner/Public_playlist'
import { useGetCurrentUserProfileQuery } from '@/ducks/service/user-api'
function Banner() {
  const session = useSession()

  const { data, error, isLoading } = useGetCurrentUserProfileQuery(`${session.data?.user?.id}`)

  return (
    <div>
      <div className="rounded-lg bg-gradient-to-r from-color-active-primary">
        <div>
          <div className="relative pointer-events-none ml-[30px] h-[30vh] flex z-0">
            <div className="absolute bottom-12  w-[192px] h-[192px] flex">
              <button className=" shadow-2xl mr-[15px]  rounded-full">
                <Image
                  className="rounded-full mr-2"
                  src={data?.images[1].url}
                  // width={56}
                  // height={56}
                  fill
                  alt={`${data?.display_name}`}
                />
              </button>
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <div className="absolute left-[245px] top-[85px] text-[14px]  text-color-text-primary ml-2.5">프로필</div>
              <div className="absolute left-[245px] top-[115px] text-[6rem] text-color-text-primary font-black ">
                <Display_name></Display_name>
              </div>
              <div className="flex text-white absolute left-[245px] top-[250px] text-[0.8125rem] items-center">
                <div className="flex">
                  <Userplaylist></Userplaylist>
                </div>
                <div>
                  <BsDot></BsDot>
                </div>
                <a>
                  {' '}
                  <Following></Following>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Banner
