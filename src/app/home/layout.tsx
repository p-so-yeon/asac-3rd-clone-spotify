import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'asac-spotify-clone | home',
  description: 'Generated by create next app',
}

export default async function HomeLayout({ children }: { children: React.ReactNode }) {
  return <section className="flex flex-col h-screen gap-4 p-2 border">{children}</section>
}
