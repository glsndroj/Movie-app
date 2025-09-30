
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
    <>
      <div className="flex justify-around p-8">
        <p className="text-2xl font-[600] text-[#09090B]">{text}</p>
        <p>See more → </p>
      </div>

      <div className=" flex justify-center">
        <div className="flex flex-wrap gap-8 w-[1300px]">
          {movies.map((movie, i) => {
            return <Movie key={i} movie={movie} />;
          })}
        </div>
      </div>
    </>
  );
}
