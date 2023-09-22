'use client'

// import StoreProvider from '@/components/provider/StoreProvider'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

import MSWComponent from '@/components/mock-service/MSWComponent'
import ReduxProvider from '@/store/provider'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MSWComponent>
      <ReduxProvider>
        <SessionProvider>{children}</SessionProvider>
      </ReduxProvider>
    </MSWComponent>
  )
}
