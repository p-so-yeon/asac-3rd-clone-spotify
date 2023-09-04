import AlbumsHandler from "@/mock/api/albums";
import ArtistsHandler from "@/mock/api/artist"
import genreHandler from "@/mock/api/genre";
import PlayListsHandler from "@/mock/api/playlists";
import TracksHandler from "@/mock/api/tracks";

const handlers = [
  ...ArtistsHandler,
  ...AlbumsHandler,
  ...TracksHandler,
  ...PlayListsHandler,
  ...genreHandler
]

export default handlers;