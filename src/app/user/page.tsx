'use client'
import Banner from '@/components/common/Banner'
import Display_name from '@/components/common/Banner/Display_name'
import Following from '@/components/common/Banner/Following'
import Userimg from '@/components/common/Banner/Profile_img'
import Userplaylist from '@/components/common/Banner/Public_playlist'
export type Userprofile = {
  banner_name: string
  display_name: string
  playlist: number
  following: number
  img: string
}
export default function page() {
  const display_name = Display_name() || ''
  const following = Following()
  const playlist = Userplaylist()
  const img = Userimg()
  console.log(following)
  console.log(display_name)
  console.log(playlist)
  console.log(img)
  if (display_name) {
    return (
      <div>
        <Banner inform={{ display_name, following, playlist, img }} type="profile"></Banner>
      </div>
    )
  }
}
