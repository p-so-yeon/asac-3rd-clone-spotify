// import Image from 'next/image'
// import { useSession } from 'next-auth/react'
// import React from 'react'

// import { useGetCurrentUserProfileQuery } from '@/ducks/service/user-api'
// interface Typeprops {
//   type: 'big' | 'small'
// }
// function Userprofile({ type }: Typeprops) {
//   const session = useSession()

//   const { data, error, isLoading } = useGetCurrentUserProfileQuery(`${session.data?.user?.id}`)

//   return (
//     <Image
//       className="rounded-full mr-2"
//       src={`${type === 'big' ? data?.images[1].url : data?.images[0].url} `}
//       // width={56}
//       // height={56}
//       fill
//       alt={`${data?.display_name}`}
//     />
//   )
// }

// export default Userprofile
