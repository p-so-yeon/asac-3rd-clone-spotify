import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from '@/components/common/Header'
import Player from '@/components/common/Player'
import Sidebar from '@/components/common/Sidebar'
import Providers from '@/components/provider/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'asac-spotify-clone',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="bg-color-background-primary w-full h-screen grid grid-cols-[max-content_auto] grid-rows-[1fr_auto] p-2 gap-2">
            <Sidebar />
            <div className="flex flex-col">
              <Header />
              {children}
            </div>
            <div className="fixed bottom-0 col-span-2 h-[72px]">
              <Player />
            </div>
          </main>
          {/* <main className="bg-color-background-primary">
            <section className="grid h-screen gap-2 p-2 grid-areas-desktop grid-rows-layout grid-cols-layout">
              <aside className="flex w-[280px] grid-in-left-sidebar">
                <Sidebar />
              </aside>
              <div className="flex flex-col grid-in-main">
                <Nav></Nav>
                {children}
              </div>
              <div className="grid-in-now-playing-bar h-[72px]">
                <Player />
              </div>
            </section>
          </main> */}
        </Providers>
      </body>
    </html>
  )
}
