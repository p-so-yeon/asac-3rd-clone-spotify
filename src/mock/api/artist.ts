import { rest } from 'msw'

import { MOCK_API_URL } from '@/lib/constant/path'
import { ARTIST_TOP_TRACK_DATA, ARTISTS_DATA, RELATED_ARTIST_DATA } from '@/mock/api/data/artists-data'

const ArtistsHandler = [
  rest.get(`${MOCK_API_URL}/artist/get-artist`, (_, res, ctx) => res(ctx.json(ARTISTS_DATA))),
  rest.get(`${MOCK_API_URL}/artist/top-track`, (_, res, ctx) => res(ctx.json(ARTIST_TOP_TRACK_DATA))),
  rest.get(`${MOCK_API_URL}/artist/related`, (_, res, ctx) => res(ctx.json(RELATED_ARTIST_DATA))),
]
export default ArtistsHandler
