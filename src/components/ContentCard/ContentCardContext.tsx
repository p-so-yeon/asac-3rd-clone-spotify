import { createContext, useContext } from 'react'

import { FeaturedPlaylist } from '@/lib/types/playlist/featured-playlist-mock-data'

const ContentCardContext = createContext<{ data: FeaturedPlaylist } | null>(null)
//여기에 artist라는 데이터나 좀 다양한 데이터들이 들어올 건데, 타입지정을 해줄 때 or로 계속 늘리면 될까요?
export default function useContentCardContext() {
  const context = useContext(ContentCardContext)
  if (!context) {
    throw new Error('ContentCard could not be rendered')
  }
  return context
}
