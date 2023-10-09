'use client'
import React from 'react'

import useContentCardContext from '@/components/ContentCard/ContentCardContext'

export default function ContentCardName() {
  const data = useContentCardContext()
  return <span className="font-semibold break-all text-color-text-primary line-clamp-1">{data.name}</span>
}
