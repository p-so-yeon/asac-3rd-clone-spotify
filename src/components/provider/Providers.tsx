// import StoreProvider from '@/components/provider/StoreProvider'
import React from 'react'

// import MSWComponent from '@/components/mock-service/MSWComponent'
import AuthProvider from '@/components/provider/AuthProvider'
import ReduxProvider from '@/components/provider/ReduxProvider'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ReduxProvider>{children}</ReduxProvider>
    </AuthProvider>
  )
}
