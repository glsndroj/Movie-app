import axios from "axios";

import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

export async function Genres() {
  const getGenres = async () => {
    const genre = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      {
        headers: {
          Authorization:
            " Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWRhYWU2NjY0MDRhMmE3NzBjOWUyM2FhNmE1Njc0MiIsIm5iZiI6MTc1OTQ2NDA2Ny40NzIsInN1YiI6IjY4ZGY0YTgzYjgzYTdkOThkMWVlNGQwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QSdJhSq1HCl2VQQ-tlwg4SKsYkZYMw1FeqdqkKL9rWs",
        },
      }
    );

    return genre.data.genres;
  };
  const genres = await getGenres();

  return (
    <div className="flex flex-wrap gap-4 py-4 font-[600] border-b-[2px]">
      {genres.map((genre: { name: string }) => {
        return (
          <DropdownMenuItem
            key={Math.random()}
            className="border-[1px] px-1 rounded-md  cursor-pointer"
          >
            {genre.name + " >"}
          </DropdownMenuItem>
        );
      })}
    </div>
  );
}
