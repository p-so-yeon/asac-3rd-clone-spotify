import { getServerSession } from 'next-auth'

import ContentCardListItem from '@/components/CardContentListItem'
import ContentCardContainer from '@/components/common/ContentContainer'
import { createContentFromItem } from '@/lib/utils/createContentObject'
import { GetUserTopItems, UserTopArtistItem } from '@/types/raw-api-data-type/user/get-user-top-items-data-type'

import LoginButton from '../../components/LoginButton';
import { options } from '../api/auth/[...nextauth]/options'

const getAuthSession = async () => {
  const session = await getServerSession(options)
  return session
}
const getUsersTopItems = async (): Promise<any> => {
  const session = await getAuthSession()
  if (session) {
    const url = 'https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=9'
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    })
    if (!res.ok) {
      throw new Error(`Fail to fetch data during ${getUsersTopItems.name}`)
    }
    const data = res.json()
    return data
  }
}

export default async function Home() {
  // compound component pattern을 사용한 client component는 server component에서 사용할 수 없다
  // => dot notation을 사용할 수 없다.
  const session = await getServerSession()
  const usersTopItems: GetUserTopItems | undefined = await getUsersTopItems()
  return (
    <>
      {session && usersTopItems ? (
        <ContentCardContainer title={'다시 들어보세요'} linkPath={'/test'}>
          {usersTopItems.items.map((artist) => (
            <ContentCardListItem key={artist.id} content={createContentFromItem.artist(artist as UserTopArtistItem)} />
          ))}
        </ContentCardContainer>
      ) : (
        // <ContentCardContainer title={'좋아하는 아티스트'} linkPath={'/test'}>
        //   {data?.artists.items
        //     .slice(0, 9)
        //     .map((artist) => <ContentCardListItem key={artist.id} content={createContentFromItem.artist(artist)} />)}
        // </ContentCardContainer>
        <LoginButton />
      )}
    </>
  )
}
