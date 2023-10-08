'use client'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { BsDot } from 'react-icons/bs'

import { Userprofile } from '@/app/user/page'
import { useGetCurrentUserProfileQuery } from '@/ducks/service/user-api'

interface Typeprops {
  type: 'profile' | 'playlist'
  inform: Userprofile
}
function Banner({ type, inform }: Typeprops): React.ReactElement {
  const session = useSession()

  const { data, error, isLoading } = useGetCurrentUserProfileQuery(`${session.data?.user?.id}`)
  const { display_name, following, playlist, img } = inform
  console.log(display_name, following, playlist, img)

  return (
    <div>
      <div className="rounded-lg bg-gradient-to-b from-black to-color-active-primary">
        <div>
          <div className="relative pointer-events-none ml-[30px] h-[30vh] flex z-0">
            <div className="absolute bottom-12  w-[192px] h-[192px] flex">
              {type === 'profile' && (
                <div className=" shadow-2xl mr-[15px] ">
                  <Image className="rounded-full" fill src={img} alt="프로필" />
                </div>
              )}
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <div className="absolute left-[245px] top-[160px] text-[14px]  text-color-text-primary ml-2.5">
                {type === 'profile' ? '프로필' : '플레이리스트'}
              </div>
              <div className="absolute left-[245px] top-[200px] text-[6rem] text-color-text-primary font-black ">
                {' '}
                <div className="flex">{display_name}</div>
              </div>
              <div className="flex text-white absolute left-[250px] top-[340px] text-[0.8125rem] items-center">
                <a>{type === 'profile' ? `공개 플레이리스트 ${playlist}개` : ''}</a>
                <div>
                  <BsDot></BsDot>
                </div>

                <a>{type === 'profile' ? `팔로잉 ${following}명` : ''}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Banner
