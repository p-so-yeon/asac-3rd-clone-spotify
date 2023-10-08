import { getServerSession } from "next-auth"

import { options } from "@/app/api/auth/[...nextauth]/options"

const getAuthSession = async () => {
  const session = await getServerSession(options)
  return session
}

export default getAuthSession