'use client'

// import StoreProvider from '@/components/provider/StoreProvider'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

import MSWComponent from '@/components/mock-service/MSWComponent'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MSWComponent>
      <SessionProvider>{children}</SessionProvider>
      {/* <StoreProvider> */}
      {/* </StoreProvider> */}
    </MSWComponent>
  )
}
