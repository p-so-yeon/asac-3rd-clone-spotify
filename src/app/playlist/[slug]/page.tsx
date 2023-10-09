import React from 'react'

function page({ params }: { params: { slug: string } }) {
  return (
    <>
      <Banner/> 
      <PlaylistSetting/>
      <Tracks/>
    </>
  )
}

export default page
