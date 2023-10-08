import React from 'react'

import Genre from '@/components/common/Genre'
import getAuthSession from '@/core/api/auth/getAuthSession'
import getCategories from '@/core/api/category/getUserCategories'
import { Getseveralbrowsecategories } from '@/types/raw-api-data-type/category/get-several-browse-categories-data-type'
export default async function page() {
  const session = await getAuthSession()
  const Categories: Getseveralbrowsecategories | undefined = await getCategories(50)
  return (
    <div>
      <div className="text-white">최근 검색 기록</div> <div className="text-white">모두 둘러보기</div>
      <div className="flex flex-wrap">
        {Categories?.categories?.items?.map((item: any) => (
          <Genre key={item.index} name={item.name} url={item.icons.url}></Genre>
        ))}
      </div>
    </div>
  )
}
