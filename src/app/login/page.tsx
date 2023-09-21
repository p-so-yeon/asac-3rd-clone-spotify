'use client'

import { signIn } from 'next-auth/react'
import React from 'react'
import { BiLogoSpotify } from 'react-icons/bi'

export default function page() {
  return (
    <div className="flex items-center justify-center">
      <BiLogoSpotify color={'bg-color-accent-primary text-color-background-base-primary'} />
      <button
        className="text-color-text-primary bg-color-accent-primary "
        onClick={() => signIn('spotify', { callbackUrl: '/' })}
      >
        Spotify로 로그인 하기
      </button>
    </div>
  )
}
