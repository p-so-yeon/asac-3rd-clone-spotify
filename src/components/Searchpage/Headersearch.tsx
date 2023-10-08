import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

import { useGetSearchItemsQuery } from '@/ducks/service/search-api'
function Headersearch() {
  const session = useSession()
  const [searchitem, setSearchitem] = useState<string>('')

  const { data } = useGetSearchItemsQuery(searchitem)
  console.log(data)

  return (
    <div>
      <div className="grow">
        <form>
          <div className="relative ">
            {' '}
            <input
              placeholder="어떤 것을 듣고 싶으세요?"
              className="bg-[#242424] rounded-[500px] px-9 py-[6px] h-[48px] w-[364px]"
              onChange={(e) => setSearchitem(e.target.value)}
            ></input>{' '}
            <button className="absolute top-[31.5%] left-3 hover:text-white">
              <FiSearch color="#b3b3b3" />
            </button>
          </div>
        </form>{' '}
      </div>
    </div>
  )
}
export default Headersearch
