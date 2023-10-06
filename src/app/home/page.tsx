import ContentCardListItem from '@/components/CardContentListItem'
import ContentCardContainer from '@/components/common/ContentContainer'
import getUsersTopItems from '@/core/api/user/getUsersTopItems'
import { createContentFromItem } from '@/lib/utils/createContentObject'
import { GetUserTopItems, UserTopArtistItem } from '@/types/raw-api-data-type/user/get-user-top-items-data-type'

import LoginButton from '../../components/LoginButton'

export default async function Home() {
  // compound component pattern을 사용한 client component는 server component에서 사용할 수 없다
  // => dot notation을 사용할 수 없다.
  const usersTopItems: GetUserTopItems | undefined = await getUsersTopItems(10)
  return (
    <>
      {/* <ContentCardContainer title={'좋아하는 아티스트'} linkPath={'/test'}>
        {data?.artists.items
        .slice(0, 9)
        .map((artist) => <ContentCardListItem key={artist.id} content={createContentFromItem.artist(artist)} />)}
      </ContentCardContainer> */}
      {usersTopItems ? (
        <ContentCardContainer title={'다시 들어보세요'} linkPath={'/test'}>
          {usersTopItems.items.map((artist) => (
            <ContentCardListItem key={artist.id} content={createContentFromItem.artist(artist as UserTopArtistItem)} />
          ))}
        </ContentCardContainer>
      ) : (
        <LoginButton />
      )}
    </>
  )
}
