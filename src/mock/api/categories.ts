import { rest } from "msw"

import { MOCK_API_URL } from "@/lib/constant/path"
import { SEVERAL_BROWSE_CATEGORIES } from "@/mock/api/data/categories-data"

const CategoriesHandler = [
  rest.get(`${MOCK_API_URL}/categories/several-browse-categories`, (_, res, ctx) => res(ctx.json(SEVERAL_BROWSE_CATEGORIES))),
]
export default CategoriesHandler