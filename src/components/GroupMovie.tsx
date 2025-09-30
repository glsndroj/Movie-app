import { Database } from "lucide-react";
import { Movie } from "./Movie";
import { Movietype } from "@/lib/typeofmovies";

export function GroupMovie({
  movies,
  text,
}: {
  movies: Movietype[];
  text: string;
}) {
  return (
    <div>
      <div>
        <p>{text}</p>
        <p></p>
      </div>
      <div className="flex flex-wrap gap-8">
        {movies.map((movie, i) => {
          return <Movie key={i} movie={movie} />;
        })}
      </div>
    </div>
  );
}
