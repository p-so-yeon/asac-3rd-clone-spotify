import React from 'react'

import useContentCardContext from '@/components/ContentCard/ContentCardContext'

export default function ContentCardDescription() {
  const { data } = useContentCardContext()
  return <div>{data.description}</div>
}
