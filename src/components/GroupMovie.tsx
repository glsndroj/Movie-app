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
      <div className="flex justify-between py-5 px-[480px]">
        <p className="text-2xl font-[600] ">{text}</p>
        <p className="cursor-pointer">See more → </p>
      </div>

      <div className=" flex justify-center">
        <div className="flex flex-wrap gap-8 w-[1280px]">
          {movies.splice(0, 10).map((movie, i) => {
            return <Movie key={i} movie={movie} />;
          })}
        </div>
      </div>
    </>
  );
}
