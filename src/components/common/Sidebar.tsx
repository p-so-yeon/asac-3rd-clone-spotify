'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { BiLibrary } from 'react-icons/bi'
import { GoHome } from 'react-icons/go'

import { MOCK_API_URL } from '@/lib/constant/path'
import { FollowArtist } from '@/lib/types/mock-data-type'

function Sidebar() {
  const pathname = usePathname()
  const routes = useMemo(
    () => [
      {
        icon: GoHome,
        label: '홈',
        active: pathname !== '/search',
        href: '/',
      },
      {
        icon: BiSearch,
        label: '검색하기',
        active: pathname === '/search',
        href: '/search',
      },
    ],
    [pathname],
  )
  // 사이드바 브레이크 포인트 72 280 420 584 1416
  const [followedArtists, setFlollowedArtists] = useState<FollowArtist>()
  const [width, setWidth] = useState<number>(295)
  const isResized = useRef<boolean>(false)

  useEffect(() => {
    async function fetchFlollowedArtists() {
      const url = `${MOCK_API_URL}/followed-artist`
      const res = await fetch(url)
      const followedArtistsData: FollowArtist = await res.json()

      setFlollowedArtists(followedArtistsData)
    }
    fetchFlollowedArtists()

    const handleMouseMove = (e: MouseEvent) => {
      if (!isResized.current) return
      setWidth((prev) => prev + e.movementX / 2)
    }
    window.addEventListener('mousemove', handleMouseMove)

    const handleMouseUp = () => {
      isResized.current = false
    }
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])
  // 스크롤 영역 크기
  // (84 50 134) + 88 = 222
  // 100vh - 222
  return (
    <aside className="flex bg-black row-span-1 min-w-[72px]" style={{ width: `${width / 16}rem` }}>
      <div className="gap-2">
        <div className="flex flex-col bg-color-box-primary rounded-lg py-2 px-3">
          {routes.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`py-1 px-3 font-black hover:text-white transition duration-500 flex flex-row items-center ${
                item.active && 'text-white'
              } text-color-text-secondary`}
            >
              <item.icon className="mr-3" size={26} />
              <p className="w-full">{item.label}</p>
            </Link>
          ))}
        </div>
        <main className="bg-color-box-primary rounded-lg w-full py-2">
          {/* Library header */}
          <header className="font-black flex items-center justify-between py-2 px-4">
            <div className="inline-flex items-center gap-x-2 px-2 py-1">
              <BiLibrary className="text-color-text-secondary" size={26} />
              <p className=" text-color-text-secondary ">내 라이브러리</p>
            </div>
            <AiOutlinePlus size={20} className="text-neutral-300 hover:text-white cursor-pointer transition" />
          </header>
          {/*Library list*/}
          <div className="flex flex-col gap-2 px-2 h-[calc(100vh-222px)] overflow-y-auto">
            <div className="flex items-center justify-between px-2 py-0.5">
              <BiSearch size={20} className="m-2 font-black text-color-text-secondary" />
              <p className="font-bold text-xs text-color-text-secondary">Recents</p>
            </div>
            <ul className="flex flex-col gap-2">
              {followedArtists?.artists.items.map((artist) => (
                <li key={`${artist.id}`} className="cursor-pointer hover:bg-color-hover-primary">
                  <div className="grid grid-cols-[auto_1fr] p-2 gap-x-3 gap-y-2">
                    <Image
                      className="rounded-full"
                      src={`${artist.images[2].url}`}
                      width={48}
                      height={48}
                      alt={`${artist.name}`}
                    />
                    <div className={`flex flex-col`}>
                      <span className="text-color-text-primary line-clamp-1 break-all">{`${artist.name}`}</span>
                      <span className="text-color-text-secondary">{`${artist.type}`}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
      {/* Resize handle */}
      <div className="cursor-col-resize w-1 bg-red-500" onMouseDown={() => (isResized.current = true)} />
    </aside>
  )
}

export default Sidebar
