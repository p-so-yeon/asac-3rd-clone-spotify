import { rest } from "msw"

import { MOCK_API_URL } from "@/lib/constant/path";
import { ALBUM_DATA, ALBUMS_DATA } from '@/mock/api/data/albums-data';

const AlbumsHandler = [
  rest.get(`${MOCK_API_URL}/home/album`, (_, res, ctx) => res(ctx.json(ALBUM_DATA))),
  rest.get(`${MOCK_API_URL}/home/albums`, (_, res, ctx) => res(ctx.json(ALBUMS_DATA)))
]
export default AlbumsHandler