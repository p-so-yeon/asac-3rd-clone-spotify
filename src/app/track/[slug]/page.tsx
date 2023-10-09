import React from 'react'

import getTrack from '@/core/api/track/getTrack'
import { GetTrack } from '@/types/raw-api-data-type/track/get-track-data-type'

export default async function page({ params }: { params: { slug: string } }) {
  const Track: GetTrack = await getTrack(params.slug)
  return <div className="text-color-text-primary">{Track?.name}</div>
}
