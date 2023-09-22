import Image from 'next/image'
import { SlOptions } from 'react-icons/sl'

import SearchTrack from '@/app/playlist/SearchTrack'

const test_data = {
  cover_img: '',
  title: '내 플레이리스트 #20',
  author: '승효',
  author_profile: '',
}

export default function page() {
  return (
    <div className="bg-color-background-base-primary h-full">
      <section className="relative px-4 flex w-full h-72 bg-gradient-to-b from-transparent to-color-card-primary">
        <button className="shadow-xl mr-5 relative top-16 text-white w-52 h-52 hover:bg-color-hover-primary">
          <Image
            fill={true}
            src={test_data.cover_img ? test_data.cover_img : '/img/playlistDefault.png'}
            alt="playlist cover image"
          />
        </button>
        <div className="text-white pt-36 flex flex-col gap-4  ">
          <span className="text-sm">플레이리스트</span>
          <button className="text-5xl font-extrabold">{test_data.title}</button>
          <div className="flex gap-2">
            <div className=" overflow-hidden rounded-full relative w-6 h-6">
              <Image
                fill={true}
                src={test_data.author_profile ? test_data.author_profile : '/img/userDefaultProfile.jpeg'}
                alt="author profile image"
              />
            </div>
            <p>{test_data.author}</p>
          </div>
        </div>
      </section>
      {/*Tracks */}
      <div>
        <div className="w-full min-h-14 h-14 px-6 py-6 ">
          <SlOptions size={24} className="text-color-text-secondary" />
        </div>
        <div>
          <div className="bg-slate-400 w-full h-24"></div>
        </div>
      </div>
      <section>
        <SearchTrack />
      </section>
    </div>
  )
}
