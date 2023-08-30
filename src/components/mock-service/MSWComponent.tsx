'use client'

import React from 'react'
import { useEffect, useState } from 'react'

// const isMocking = process.env.NEXT_PUBLIC_MOCKING_API === "enabled";

const isMocking = process.env.NODE_ENV === 'development'
// ? process.env.NEXT_PUBLIC_MOCKING_API === 'enabled'
// : process.env.NEXT_PUBLIC_MOCKING_API !== 'enabled'

function MSWComponent({ children }: { children: React.ReactNode }) {
  const [mswReady, setMSWReady] = useState(() => !isMocking)

  useEffect(() => {
    const init = async () => {
      if (isMocking) {
        const initMSW = await import('@/mock/index').then((res) => res.initMSW)
        await initMSW()
        setMSWReady(true)
      }
    }
    if (!mswReady) {
      init()
    }
  }, [mswReady])

  if (!mswReady) {
    return null
  }

  return <>{children}</>
}
export default React.memo(MSWComponent)
