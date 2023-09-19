import { rest } from "msw"

import { MOCK_API_URL } from "@/lib/constant/path"
import { CATEGORY_PLAYLIST_DATA, FEATURED_PLAYLIST_DATA, PLAYLIST_DATA } from "@/mock/api/data/playlists-data"

const PlayListsHandler = [

  rest.get(`${MOCK_API_URL}/playlist/recent`, (_, res, ctx) => res(ctx.json(PLAYLIST_DATA))),
  rest.get(`${MOCK_API_URL}/playlist/featured`, (_, res, ctx) => res(ctx.json(FEATURED_PLAYLIST_DATA))),
  rest.get(`${MOCK_API_URL}/playlist/category`, (_, res, ctx) => res(ctx.json(CATEGORY_PLAYLIST_DATA)))
]
export default PlayListsHandler