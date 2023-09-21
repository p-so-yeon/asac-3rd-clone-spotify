import AlbumsHandler from "@/mock/api/albums";
import ArtistsHandler from "@/mock/api/artist"
import CategoriesHandler from "@/mock/api/categories";
import genreHandler from "@/mock/api/genre";
import PlayListsHandler from "@/mock/api/playlists";
import TracksHandler from "@/mock/api/tracks";
import UserHandler from "@/mock/api/user";

const handlers = [
  ...ArtistsHandler,
  ...AlbumsHandler,
  ...TracksHandler,
  ...PlayListsHandler,
  ...genreHandler,
  ...CategoriesHandler,
  ...UserHandler
]

export default handlers;