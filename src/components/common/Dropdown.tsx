'use client'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'

function Dropdown() {
  // function Navigate() {}
  return (
    <>
      <div className="relative justify-center font-sans w-[196px] h-[248px] rounded-md bg-[#282828]  content-center text-white z-10">
        <ul className="p-1">
          <li className="text-center ">
            <button>
              <div className=" hover:bg-color-hover-primary hover:border-2px rounded w-[188px] h-[40px] justify-between flex py-3  pb-3 pl-3 items-center">
                <span className="text-[0.8125rem]">계정</span>
                <BiLinkExternal />
              </div>
            </button>
          </li>
          <li className="text-center">
            <Link href={'/user'}>
              <button>
                <div className=" hover:bg-color-hover-primary hover:border-2px rounded justify-between w-[188px] h-[40px] flex py-3 pr-2 pb-3 pl-3 items-center">
                  <span className="text-[0.8125rem]">프로필 </span>
                </div>
              </button>
            </Link>
          </li>
          <li className="text-center">
            <button>
              <div className=" hover:bg-color-hover-primary hover:border-2px rounded w-[188px] h-[40px] justify-between flex py-3  pb-3 pl-3 items-center">
                <span className="text-[0.8125rem]">지원</span>
                <BiLinkExternal />
              </div>
            </button>
          </li>
          <li className="text-center">
            <button>
              <div className=" hover:bg-color-hover-primary hover:border-2px rounded w-[188px] h-[40px] justify-between flex py-3  pb-3 pl-3 items-center">
                <span className="text-[0.8125rem]">다운로드 하기</span> <BiLinkExternal />
              </div>
            </button>
          </li>
          <li className="text-center">
            <button>
              <span className="text-[0.8125rem] hover:border-2px rounded hover:bg-color-hover-primary w-[188px] h-[40px] flex py-3 pr-2 pb-3 pl-3 items-center">
                설정
              </span>
            </button>
          </li>
          <div className="h-[1.5px] bg-color-hover-primary"></div>
          <li className="text-center">
            <button onClick={() => signOut()}>
              <span className=" text-[0.8125rem] hover:border-2px rounded hover:bg-color-hover-primary w-[188px] h-[40px] flex py-3 pr-2 pb-3 pl-3 items-center">
                로그아웃
              </span>
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Dropdown
