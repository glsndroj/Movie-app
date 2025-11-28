import { axiosInstance } from "@/lib/utils";
import Link from "next/link";
import { Key } from "react";

export async function Genres() {
  const getGenres = async () => {
    const genre = await axiosInstance.get(`/genre/movie/list?language=en`);

    return genre.data.genres;
  };
  const genres = await getGenres();

  return (
    <div className="flex w-[400px] flex-wrap gap-2">
      {genres.map((genre: { id: Key | null | undefined; name: string }) => {
        return (
          <Link
            key={genre.id}
            href={`/genreDetails?genreId=${genre.id}&genreName=${genre.name}`}
            className="px-4 py-2 font-bold rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            {genre.name + " >"}
          </Link>
        );
      })}
    </div>
  );
}
