import React from 'react'

import useContentCardContext from '@/components/ContentCard/ContentCardContext'

export default function ContentCardName() {
  const { data } = useContentCardContext()
  return <div>{data.name}</div>
}
