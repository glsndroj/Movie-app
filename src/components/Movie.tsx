import { Movietype } from "@/lib/typeofmovies";
import Link from "next/link";

export function Movie(props: { movie: Movietype }) {
  const { movie } = props;
  return (
    <>
      <Link href={`/moviedetails/${movie.id}`}>
        <div className="cursor-pointer">
          <div className=" flex flex-col gap-3 w-[230px] h-[439px] shadow-2xl border rounded-md overflow-hidden">
            <img
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              alt={movie.title}
              className="h-[340px]"
            />
            <div className="flex flex-col gap-2 px-3">
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.99967 1.33337L10.0597 5.50671L14.6663 6.18004L11.333 9.42671L12.1197 14.0134L7.99967 11.8467L3.87967 14.0134L4.66634 9.42671L1.33301 6.18004L5.93967 5.50671L7.99967 1.33337Z"
                    fill="#FDE047"
                    stroke="#FDE047"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex items-center">
                  <p>{movie.vote_average} <span className="text-[12px] text-gray-300">/10</span></p>
                  
                </div>
              </div>
              <h3>{movie.title}</h3>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
