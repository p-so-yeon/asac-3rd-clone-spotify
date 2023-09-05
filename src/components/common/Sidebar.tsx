'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
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
  const [followedArtists, setFlollowedArtists] = useState<FollowArtist>()
  useEffect(() => {
    async function fetchFlollowedArtists() {
      const url = `${MOCK_API_URL}/followed-artist`
      const res = await fetch(url)
      const followedArtistsData: FollowArtist = await res.json()
      console.log(followedArtistsData)

      setFlollowedArtists(followedArtistsData)
    }
    fetchFlollowedArtists()
  }, [])

  return (
    <div className="fixed w-[280px] h-screen bg-black flex flex-col gap-2">
      {/* <div className="fixed w-[300px] h-screen bg-black px-2 py-2 flex flex-col gap-2"> */}
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
      <main className="bg-color-box-primary rounded-lg h-fit w-full py-2">
        {/* Library header */}
        <header className="font-black flex items-center justify-between py-2 px-4">
          <div className="inline-flex items-center gap-x-2 px-2 py-1">
            <BiLibrary className="text-color-text-secondary" size={26} />
            <p className=" text-color-text-secondary ">내 라이브러리</p>
          </div>
          <AiOutlinePlus size={20} className="text-neutral-300 hover:text-white cursor-pointer transition" />
        </header>
        {/*Library list*/}
        <div className="flex flex-col gap-2 px-2">
          <div className="flex items-center justify-between px-2 py-0.5">
            <BiSearch size={20} className="m-2 font-black text-color-text-secondary" />
            <p className="font-bold text-xs text-color-text-secondary">Recents</p>
          </div>
          <ul className="h-screen overflow-y-auto flex flex-col gap-2">
            {followedArtists?.artists.items.map((artist) => (
              <li key={`${artist.id}`} className="">
                <div className="grid grid-cols-[auto_1fr] p-2 gap-x-3 gap-y-2">
                  <Image
                    className="rounded-full"
                    src={`${artist.images[2].url}`}
                    width={48}
                    height={48}
                    alt={`${artist.name}`}
                  />
                  <div className="flex flex-col">
                    <span className="text-color-text-primary line-clamp-1 break-all">{`${artist.name}`}</span>
                    <span className="text-color-text-secondary">{`${artist.type}`}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div> */}
        </div>
      </main>
    </div>
  )
}

export default Sidebar
