'use client'
import { signIn } from 'next-auth/react'
import { BiLogoSpotify } from 'react-icons/bi'

export default function LoginButton() {
  return (
    <div className="flex items-center justify-center">
      <button
        className="flex px-2 py-1 rounded-md text-color-text-primary bg-color-accent-primary"
        onClick={() => signIn('spotify', { callbackUrl: '/' })}
      >
        <BiLogoSpotify size={'1.5rem'} color={'text-white'} />
        Spotify로 로그인 하기
      </button>
    </div>
  )
}
