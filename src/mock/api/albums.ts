import { rest } from "msw"

import { MOCK_API_URL } from "@/lib/constant/path";
import { ALBUMS_DATA } from '@/mock/api/data/albums-data';

const AlbumsHandler = [
  rest.get(`${MOCK_API_URL}/home/album`, (_, res, ctx) => res(ctx.json(ALBUMS_DATA)))
]
export default AlbumsHandler