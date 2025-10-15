"use client";

import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/utils";
import Link from "next/link";

export function Genres() {
  const [genres, setGenres] = useState<{ id: number; name: string }[]>([]);
  

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await axiosInstance.get("/genre/movie/list?language=en");
        setGenres(res.data.genres);
      } catch (err) {
        
      }
    };
    fetchGenres();
  }, []);
  

  return (
    <div className="flex flex-wrap gap-2">
      {genres.map((genre) => (
        <Link
          key={genre.id}
          href={`/genreDetails?genreId=${genre.id}&genreName=${genre.name}`}
          className="px-4 py-2 font-bold rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        >
          {genre.name + " >"}
        </Link>
      ))}
    </div>
  );
}
