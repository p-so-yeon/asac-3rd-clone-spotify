import React from 'react'

import useContentCardContext from '@/components/ContentCard/ContentCardContext'

export default function ContentCardDescription() {
  const { data } = useContentCardContext()
  return <div className="text-[14px] font-medium text-color-text-secondary">{data.description}</div>
}
