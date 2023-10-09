'use client'
import React from 'react'

import { cn } from '@/lib/utils/classNames'
import { convertMilliSecondsToMinutesAndSeconds } from '@/lib/utils/convert'
import { Track } from '@/types/raw-api-data-type/artist/get-artist-top-track-data-type'

import TrackItem from './TrackItem'
interface props {
  className: string
  tracks: Track[]
}
export default function TrackContainer(props: props) {
  return (
    <div className={cn('px-6', props.className)}>
      {props.tracks.slice(0, 5).map((track: Track, index) => (
        <li key={track.id}>
          <TrackItem
            index={index + 1}
            image={track.album?.images[0]?.url}
            trackName={track.name}
            duration={convertMilliSecondsToMinutesAndSeconds(track.duration_ms)}
            popularity={track.popularity}
            uri={track.uri}
          />
        </li>
      ))}
    </div>
  )
}
