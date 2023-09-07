import { rest } from "msw"

import { MOCK_API_URL } from "@/lib/constant/path"
import { PLAYLIST_DATA } from "@/mock/api/data/playlists-data"
import {FEATURED_PLAYLIST_DATA} from "@/mock/api/data/playlists-data"

const PlayListsHandler = [

  rest.get(`${MOCK_API_URL}/recent-playlist`, (_, res, ctx) => res(ctx.json(PLAYLIST_DATA))),
  rest.get(`${MOCK_API_URL}/featured-playlist`,(_,res,ctx)=> res(ctx.json(FEATURED_PLAYLIST_DATA))),
]
export default PlayListsHandler