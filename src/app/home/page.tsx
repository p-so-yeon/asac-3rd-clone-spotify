import { getServerSession } from 'next-auth'
import fetch from 'node-fetch'

import { options } from '@/app/api/auth/[...nextauth]/options'
import ContentCardListItem from '@/components/CardContentListItem'
import ContentCardContainer from '@/components/common/ContentContainer'
import { createContentFromItem } from '@/lib/utils/createContentObject'
import { FollowedArtist } from '@/types/raw-api-data-type/user/followed-artist-data-type'
// 함수 재사용
async function getSessionData() {
  // server component에서 options에서 정의한 session callback의 리턴 값을 사용
  const session = await getServerSession(options)
  // console.log('home :', session)
  return session
}
async function getFollowedAristsData() {
  const session = await getServerSession(options)
  const SPOTIFY_USER_FOLLOWED_ARTISTS_URL = 'https://api.spotify.com/v1/me/following'
  try {
    // url param 생성 방법 직접 객체로 작성 vs URLSearchParams 함수 사용
    const params = new URLSearchParams()
    params.append('type', 'artist')
    params.append('limit', '50')
    const response = await fetch(`${SPOTIFY_USER_FOLLOWED_ARTISTS_URL}?${params}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
      },
    })
    const followedArtistData = await response.json()
    console.log(followedArtistData)

    return followedArtistData
  } catch (error) {
    console.log(error)

    return
  }
}
export default async function Home() {
  const session = await getSessionData()
  const data: FollowedArtist = await getFollowedAristsData()
  // compound component pattern을 사용한 client component는 server component에서 사용할 수 없다
  // => dot notation을 사용할 수 없다.
  return (
    <>
      {session && data && (
        <>
          {/* <span className="">user id : {session?.user?.id}</span>
          <span className="">access token : {session?.accessToken}</span>
          <span className=""></span> */}
          <ContentCardContainer title={'좋아하는 아티스트'} linkPath={'/test'}>
            {data?.artists.items
              .slice(0, 9)
              .map((artist) => <ContentCardListItem key={artist.id} content={createContentFromItem.artist(artist)} />)}
          </ContentCardContainer>
        </>
      )}
    </>
  )
}
