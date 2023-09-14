'use client'

import React from 'react'

import MSWComponent from '@/components/mock-service/MSWComponent'
// import StoreProvider from '@/components/provider/StoreProvider'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MSWComponent>
      {children}
      {/* <StoreProvider> */}
      {/* </StoreProvider> */}
    </MSWComponent>
  )
}
