"use client";

import { useEffect, useState } from "react";
import GenreSkeleton from "./genreSkeleton";
import { Movie } from "@/components/Movie";
import { axiosInstance } from "@/lib/utils";

type GenrePageProps = {
  searchParams: {
    genreId: string;
    genreName?: string;
    page?: string;
  };
};

export default function Genredetails({ searchParams }: GenrePageProps) {
  const { genreId, genreName, page = "1" } = searchParams;
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const response = await axiosInstance.get(
        `/discover/movie?language=en&with_genres=${genreId}&page=${page}`
      );
      setMovies(response.data.results);
      setLoading(false);
    };
    fetchMovies();
  }, [genreId, page]);

  if (loading) return <GenreSkeleton />;

  return (
    <div>
      <h4 className="p-2 font-bold text-[24px]">
        {movies.length} Titles {genreName ? ` in "${genreName}"` : ""}
      </h4>
      <div className="flex gap-5 w-[1300px] flex-wrap">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
