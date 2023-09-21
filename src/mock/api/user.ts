import { rest } from 'msw'

import { MOCK_API_URL } from '@/lib/constant/path'
import { CUR_USER_DATA } from '@/mock/api/data/currentuser-data'
import { User_Playlist } from '@/mock/api/data/user_playlist'

const UserHandler = [
  rest.get(`${MOCK_API_URL}/home/user`, (_, res, ctx) => res(ctx.json(CUR_USER_DATA))),
  rest.get(`${MOCK_API_URL}/home/user_playlist`, (_, res, ctx) => res(ctx.json(User_Playlist))),
]
export default UserHandler
