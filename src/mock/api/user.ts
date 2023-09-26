import { rest } from 'msw'

import { MOCK_API_URL } from '@/lib/constant/path'
import { CUR_USER_DATA } from '@/mock/api/data/currentuser-data'
import { User_Playlist } from '@/mock/api/data/user_playlist'
import {
  CURRENT_USERS_PROFILE,
  FOLLOWED_ARTISTS_DATA,
  USER_TOP_ITEM_ARTIST,
  USER_TOP_ITEM_TRACK,
} from '@/mock/api/data/user-data'

const UserHandler = [
  rest.get(`${MOCK_API_URL}/user/profile`, (_, res, ctx) => res(ctx.json(CURRENT_USERS_PROFILE))),
  rest.get(`${MOCK_API_URL}/user/followed-artist`, (_, res, ctx) => res(ctx.json(FOLLOWED_ARTISTS_DATA))),
  rest.get(`${MOCK_API_URL}/user/top-item`, (_, res, ctx) => res(ctx.json(USER_TOP_ITEM_ARTIST))),
  rest.get(`${MOCK_API_URL}/user/top-track`, (_, res, ctx) => res(ctx.json(USER_TOP_ITEM_TRACK))),
  rest.get(`${MOCK_API_URL}/home/user`, (_, res, ctx) => res(ctx.json(CUR_USER_DATA))),
  rest.get(`${MOCK_API_URL}/home/user_playlist`, (_, res, ctx) => res(ctx.json(User_Playlist))),
]
export default UserHandler
