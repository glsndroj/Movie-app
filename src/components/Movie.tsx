import { Movietype } from "@/lib/typeofmovies";

export function Movie(props: { movie: Movietype }) {
  const { movie } = props;
  return (
    <>
      <div className="">
        <div className=" flex flex-col gap-3 w-[230px] h-[439px] bg-[#F4F4F5] rounded-md overflow-hidden">
          <img
            src={movie.images[0]}
            alt={movie.name}
            className="w-fit h-[340px]"
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
              <p>{movie.rating}</p>
            </div>
            <h3>{movie.name}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
