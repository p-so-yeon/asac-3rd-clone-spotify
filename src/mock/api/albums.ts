import { rest } from "msw"

import { MOCK_API_URL } from "@/lib/constant/path";
import { ALBUM_DATA, ALBUM_TRACK_DATA } from '@/mock/api/data/albums-data';

const AlbumsHandler = [
  rest.get(`${MOCK_API_URL}/album/get-album`, (_, res, ctx) => res(ctx.json(ALBUM_DATA))),
  rest.get(`${MOCK_API_URL}/album/album-track`, (_, res, ctx) => res(ctx.json(ALBUM_TRACK_DATA)))
]
export default AlbumsHandler