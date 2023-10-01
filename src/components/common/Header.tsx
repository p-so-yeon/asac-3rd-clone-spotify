'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { BsChevronLeft } from 'react-icons/bs'
import { BsChevronRight } from 'react-icons/bs'
import { MdOutlinePersonOutline } from 'react-icons/md'

import Dropdown from '@/components/common/Dropdown'
import { useGetCurrentUserProfileQuery } from '@/ducks/service/user-api'

function Header() {
  const router = useRouter()

  const back = () => {
    router.back()
  }
  const forward = () => {
    window.history.forward()
  }
  const [open, setopen] = useState(false)
  const session = useSession()
  const { data, error, isLoading } = useGetCurrentUserProfileQuery(`${session.data?.user?.id}`)
  return (
    <header className="flex justify-between relative h-[64px] items-center bg-transparent rounded-lg z-10">
      <div className="ml-1.5 flex gap-x-2">
        <button className="flex items-center justify-center w-8 h-8 bg-black rounded-full" onClick={back}>
          <BsChevronLeft fontSize="16px;" color="white" />{' '}
        </button>
        <button className="flex items-center justify-center w-8 h-8 bg-black rounded-full" onClick={forward}>
          <BsChevronRight fontSize="16px;" color="white" />
        </button>
      </div>
      <ul
        className="relative"
        onClick={() => {
          setopen(!open)
        }}
      >
        <button className="rounded-full bg-black w-8 h-8 flex justify-center items-center mr-[30px]">
          {session.status === 'authenticated' && data?.images[0] !== undefined ? (
            <Image
              className="mr-2 rounded-full"
              src={`${data?.images[0].url} `}
              width={56}
              height={56}
              alt={`${data?.display_name}`}
            />
          ) : (
            <MdOutlinePersonOutline color="#fff" fontSize="large" alt={data?.display_name} />
          )}
        </button>
        {open && (
          <div className="absolute z-50 top full" style={{ marginLeft: '-165px', marginTop: '8px' }}>
            <Dropdown />
          </div>
        )}
      </ul>
    </header>
  )
}

export default Header
