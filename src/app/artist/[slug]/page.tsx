import React from 'react'

import getArtist from '@/core/api/artist/getArtist'
import { GetArtist } from '@/types/raw-api-data-type/artist/get-artist-data-type'

export default async function page({ params }: { params: { slug: string } }) {
  const artist: GetArtist = await getArtist(params.slug)
  return <div className="text-color-text-primary">{artist?.name}</div>
}
