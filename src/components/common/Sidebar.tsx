/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { BiLibrary } from 'react-icons/bi'
import { GoHome } from 'react-icons/go'
import { HiMusicalNote } from 'react-icons/hi2'

import firebaseDB from '@/core/service/firebase/firebasedb'
import { useGetCurrentUsersPlaylistQuery } from '@/ducks/service/playlist-api'
import { useGetUserFollowedArtistQuery } from '@/ducks/service/user-api'

async function getPlaylists(): Promise<any[]> {
  try {
    const myPlaylists = await getDocs(collection(firebaseDB, 'playlists'))
    const playlistData: any[] = []
    myPlaylists.forEach((playlist) => {
      playlistData.push({ id: playlist.id, data: playlist.data() })
    })
    return playlistData
  } catch (e) {
    console.log('Fail to get user playlists in the library ', e)
    return []
  }
}

function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
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
  // max-width를 screen사이즈별로
  const [minWidth, defualtWidth, mdWidth, lgWidth, maxWidth] = useMemo(() => [72, 280, 420, 584, 1416], [])
  const userFollowedArtist = useGetUserFollowedArtistQuery(50)
  const currentUserPlaylist = useGetCurrentUsersPlaylistQuery(5)
  const [width, setWidth] = useState<number>(
    localStorage.getItem('sidebarWidth') !== null
      ? parseInt(localStorage.getItem('sidebarWidth') as string)
      : defualtWidth,
  )
  const isResized = useRef<boolean>(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResized.current) return

      setWidth((prev) => {
        const newWidth = prev + e.movementX / 2
        const isWidthInRange = newWidth >= minWidth && newWidth <= maxWidth
        // const isSpreadArea = newWidth >= mdWidth && newWidth <= lgWidth
        // const
        return isWidthInRange ? newWidth : prev
      })
    }
    window.addEventListener('mousemove', handleMouseMove)

    const handleMouseUp = () => {
      localStorage.setItem('sidebarWidth', `${width}`)
      isResized.current = false
    }
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [width, minWidth, mdWidth, lgWidth, maxWidth])

  const [playlist, setPlaylists] = useState<any[]>()

  const useGetPlaylists = () => {
    getPlaylists().then((result) => {
      setPlaylists(result)
    })
  }

  useEffect(() => {
    useGetPlaylists()
  }, [])

  async function createPlaylist() {
    const docRef = await addDoc(collection(firebaseDB, 'myPlaylists'), {
      title: '',
      coverImg: '',
      author: '', //유저 아이디를 넣어주기
      tracks: [],
    })
    useGetPlaylists()
    router.push(`/playlist/${docRef.id}`)
  }
  return (
    <aside
      className={`flex bg-black row-span-1 min-w-[${minWidth}px] max-w-[${maxWidth}px]`}
      style={{ width: `${width / 16}rem` }}
    >
      <div className={`gap-2 w-full`}>
        <div className="flex flex-col px-3 py-2 rounded-lg bg-color-box-primary">
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
        <main className="w-full py-2 rounded-lg bg-color-box-primary">
          {/* Library header */}
          <header className="flex items-center justify-between px-4 py-2 font-black">
            <div className="inline-flex items-center px-2 py-1 gap-x-2">
              <BiLibrary className="text-color-text-secondary" size={26} />
              <p className=" text-color-text-secondary">내 라이브러리</p>
            </div>
            <AiOutlinePlus
              onClick={createPlaylist}
              size={20}
              className="transition cursor-pointer text-neutral-300 hover:text-white"
            />
          </header>
          {/*Library list*/}
          <div className="flex flex-col gap-2 px-2 h-[calc(100vh-242px)] overflow-y-auto">
            <div className="flex items-center justify-between px-2 py-0.5">
              <BiSearch size={20} className="m-2 font-black text-color-text-secondary" />
              <p className="text-xs font-bold text-color-text-secondary">Recents</p>
            </div>

            {currentUserPlaylist && (
              <ul className="flex flex-col gap-2">
                {currentUserPlaylist.data?.items.map((playlist) => (
                  <li key={`${playlist.id}`} className="cursor-pointer hover:bg-color-hover-primary">
                    <div className="grid grid-cols-[auto_1fr] p-2 gap-x-3 gap-y-2">
                      {playlist.images.length !== 0 ? (
                        <Image
                          className="rounded-md"
                          src={`${playlist.images[0].url}`}
                          width={48}
                          height={48}
                          alt={`${playlist.name}`}
                        />
                      ) : (
                        <HiMusicalNote className={'text-color-text-secondary'} size={'3rem'} alt={`${playlist.name}`} />
                      )}
                      <div className={`flex flex-col`}>
                        <span className="break-all text-color-text-primary line-clamp-1">{`${playlist.name}`}</span>
                        <span className="text-color-text-secondary">{`${playlist.type}-${playlist.owner.display_name}`}</span>
                      </div>
                    </div>
                  </li>
                ))}
                {userFollowedArtist.data?.artists.items.map((artist) => (
                  <li key={`${artist.id}`} className="cursor-pointer hover:bg-color-hover-primary">
                    <div className="grid grid-cols-[auto_1fr] p-2 gap-x-3 gap-y-2">
                      <Image
                        className="rounded-full"
                        src={`${artist.images[0].url}`}
                        width={48}
                        height={48}
                        alt={`${artist.name}`}
                      />
                      <div className={`flex flex-col`}>
                        <span className="break-all text-color-text-primary line-clamp-1">{`${artist.name}`}</span>
                        <span className="text-color-text-secondary">{`${artist.type}`}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </main>
      </div>
      {/* Resize handle */}
      <div
        className="cursor-col-resize w-[3px] hover:bg-color-hover-primary active:bg-color-active-primary"
        onMouseDown={() => (isResized.current = true)}
      />
    </aside>
  )
}

export default Sidebar
