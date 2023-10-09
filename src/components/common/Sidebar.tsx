/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useMemo, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlinePlus } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { BiLibrary } from 'react-icons/bi'
import { GoHome } from 'react-icons/go'
import { useDispatch } from 'react-redux'

import firebaseDB from '@/core/service/firebase/firebasedb'
import { setSidebarWidth } from '@/ducks/features/library/library'
import { useGetCurrentUsersPlaylistQuery } from '@/ducks/service/playlist-api'
import { useGetUserFollowedArtistQuery } from '@/ducks/service/user-api'
import { cn } from '@/lib/utils/classNames'
import { convertWidthToBoundary } from '@/lib/utils/convert'
import { createContentFromItem } from '@/lib/utils/createContentObject'
import { Item } from '@/types/raw-api-data-type/playlist/current-users-playlist-data-type'

import SidebarItem from './sidebar/SidebarItem'

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
  const [minWidth, shrinkPoint, defaultWidth, mdWidth, lgWidth, maxWidth] = useMemo(
    () => [72, 230, 280, 420, 584, 1024],
    [],
  )

  const userFollowedArtist = useGetUserFollowedArtistQuery(50)
  const currentUserPlaylist = useGetCurrentUsersPlaylistQuery(5)
  const dispatch = useDispatch()
  const [width, setWidth] = useState<number>(
    !localStorage.getItem('sidebarWidth') ? defaultWidth : parseInt(localStorage.getItem('sidebarWidth') as string),
  )

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
        {/* nav */}
        <nav className="flex flex-col px-3 py-2 rounded-lg bg-color-box-primary">
          {routes.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`py-1 px-3 font-black hover:text-white transition duration-500 flex flex-row items-center ${
                item.active && 'text-white'
              } text-color-text-secondary`}
            >
              <item.icon className={cn('mr-3', { 'mr-0': width <= shrinkPoint })} size={26} />
              {width >= shrinkPoint && <p className="w-full">{item.label}</p>}
            </Link>
          ))}
        </nav>
        <main className="w-full py-2 rounded-lg bg-color-box-primary">
          {/* Library header */}
          <header className="flex items-center justify-between px-4 py-2 font-black">
            {width <= shrinkPoint ? (
              <div className="inline-flex items-center px-2 py-1 gap-x-2">
                <button
                  className='className="transition cursor-pointer text-neutral-300 hover:text-white'
                  onClick={() => {
                    setWidth(defaultWidth)
                    dispatch(setSidebarWidth(defaultWidth))
                    localStorage.setItem('sidebarWidth', `${defaultWidth}`)
                  }}
                >
                  <BiLibrary className="text-color-text-secondary" size={26} />
                </button>
              </div>
            ) : (
              <>
                <div className="inline-flex items-center px-2 py-1 gap-x-2">
                  <BiLibrary className="text-color-text-secondary" size={26} />
                  {width > shrinkPoint && <p className=" text-color-text-secondary">내 라이브러리</p>}
                </div>
                <div className={'flex gap-2'}>
                  <AiOutlinePlus
                    onClick={createPlaylist}
                    size={20}
                    className="transition cursor-pointer text-neutral-300 hover:text-white"
                  />
                  {width >= lgWidth ? (
                    <button
                      className='className="transition cursor-pointer text-neutral-300 hover:text-white'
                      onClick={() => {
                        setWidth(defaultWidth)
                        dispatch(setSidebarWidth(defaultWidth))
                        localStorage.setItem('sidebarWidth', `${defaultWidth}`)
                      }}
                    >
                      <AiOutlineArrowLeft size={20} />
                    </button>
                  ) : (
                    <button
                      className='className="transition cursor-pointer text-neutral-300 hover:text-white'
                      onClick={() => {
                        setWidth(lgWidth)
                        dispatch(setSidebarWidth(lgWidth))
                        localStorage.setItem('sidebarWidth', `${lgWidth}`)
                      }}
                    >
                      <AiOutlineArrowRight size={20} />
                    </button>
                  )}
                </div>
              </>
            )}
          </header>

          {/*Library list*/}
          <div className={cn('flex flex-col gap-2 px-2 h-[calc(100vh-242px)] overflow-y-auto')}>
            {width >= shrinkPoint && (
              <div className="flex items-center justify-between px-2 py-0.5">
                <BiSearch size={20} className="m-2 font-black text-color-text-secondary" />
                <p className="text-xs font-bold text-color-text-secondary">Recents</p>
              </div>
            )}

            <ul className="flex flex-col gap-2">
              {currentUserPlaylist &&
                currentUserPlaylist.data?.items.map((playlist) => (
                  <SidebarItem
                    key={playlist.id}
                    content={{
                      ...createContentFromItem.playlist(playlist as Item),
                      type: `${playlist.type} • ${playlist.owner.display_name}`,
                    }}
                    playedAt={0}
                    sidebarWitdh={width}
                    shrinkPoint={shrinkPoint}
                  />
                ))}

              {userFollowedArtist &&
                userFollowedArtist.data?.artists.items.map((artist) => (
                  <SidebarItem
                    key={artist.id}
                    content={{
                      ...createContentFromItem.artist(artist),
                      type: `${artist.type}`,
                    }}
                    playedAt={0}
                    sidebarWitdh={width}
                    shrinkPoint={shrinkPoint}
                  />
                ))}
            </ul>
          </div>
        </main>
      </div>
      {/* Resize handle */}
      <div
        className="cursor-col-resize w-[3px] hover:bg-color-hover-primary active:bg-color-active-primary"
        onMouseDown={() => {
          const mouseMoveHandler = (e: MouseEvent) => {
            const newWidth = convertWidthToBoundary(e.pageX, minWidth, maxWidth)
            dispatch(setSidebarWidth(newWidth >= shrinkPoint ? newWidth : minWidth))
            setWidth(newWidth >= shrinkPoint ? newWidth : minWidth)
          }

          // 3️⃣
          const mouseUpHandler = (e: MouseEvent) => {
            const newWidth = convertWidthToBoundary(e.pageX, minWidth, maxWidth)
            dispatch(setSidebarWidth(newWidth >= shrinkPoint ? newWidth : minWidth))
            localStorage.setItem('sidebarWidth', `${newWidth >= shrinkPoint ? newWidth : minWidth}`)
            document.removeEventListener('mousemove', mouseMoveHandler)
          }

          // 1️⃣
          document.addEventListener('mousemove', mouseMoveHandler)
          document.addEventListener('mouseup', mouseUpHandler, { once: true })
          // mouseup 이벤트는 한번만 실행되면 되기에 { once: true } 옵션을 추가해준다.
        }}
      />
    </aside>
  )
}

export default Sidebar
