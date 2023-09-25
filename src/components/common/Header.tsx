'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { BsChevronLeft } from 'react-icons/bs'
import { BsChevronRight } from 'react-icons/bs'
import { MdOutlinePersonOutline } from 'react-icons/md'

import Dropdown from '@/components/common/Dropdown'

function Header() {
  const router = useRouter()

  const back = () => {
    router.back()
  }
  const forward = () => {
    window.history.forward()
  }
  const [open, setopen] = useState(false)

  return (
    <header className="flex justify-between relative h-[64px] items-center bg-transparent rounded-lg z-10">
      <div className="ml-1.5 flex gap-x-2">
        <button className="rounded-full bg-black w-8 h-8 flex justify-center items-center" onClick={back}>
          <BsChevronLeft fontSize="16px;" color="white" />{' '}
        </button>
        <button className="rounded-full bg-black w-8 h-8 flex justify-center items-center" onClick={forward}>
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
          <MdOutlinePersonOutline color="#fff" fontSize="large" />
        </button>
        {open && (
          <div className="absolute top full z-50" style={{ marginLeft: '-165px', marginTop: '8px' }}>
            <Dropdown />
          </div>
        )}
      </ul>
    </header>
  )
}

export default Header
