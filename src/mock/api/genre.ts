import { rest } from "msw"

import { MOCK_API_URL } from "@/lib/constant/path";
import { GENRE_DATA } from "@/mock/api/data/genre-data";

const genreHandler = [
  rest.get(`${MOCK_API_URL}/home/genre`, (_, res, ctx) => res(ctx.json(GENRE_DATA)))
]
export default genreHandler