import { rest } from "msw"

import { MOCK_API_URL } from "@/lib/constant/path"
import { ARTISTS_DATA, FOLLOWED_ARTISTS_DATA } from "@/mock/api/data/artists-data"

const ArtistsHandler = [
  rest.get(`${MOCK_API_URL}/home/artist`, (_, res, ctx) => res(ctx.json(ARTISTS_DATA))),
  rest.get(`${MOCK_API_URL}/followed-artist`, (_, res, ctx) => res(ctx.json(FOLLOWED_ARTISTS_DATA)))
]
export default ArtistsHandler