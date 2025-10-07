import axios from "axios";

export async function DetailHeader({ id }: { id: string }) {
  const getSelectedMovie = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWRhYWU2NjY0MDRhMmE3NzBjOWUyM2FhNmE1Njc0MiIsIm5iZiI6MTc1OTQ2NDA2Ny40NzIsInN1YiI6IjY4ZGY0YTgzYjgzYTdkOThkMWVlNGQwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QSdJhSq1HCl2VQQ-tlwg4SKsYkZYMw1FeqdqkKL9rWs",
        },
      }
    );
    console.log(response.data);
    return response.data;
  };

  const selectedMovie = await getSelectedMovie();
  return (
    <>
      <div className="flex w-[1300px] justify-between">
        <div className="">
          <h1 className="text-4xl font-[700]">{selectedMovie.title}</h1>
          <div className="flex gap-1">
            <p>{selectedMovie.release_date}</p>
            <p>•</p>
            {!selectedMovie.adult && <p>PG •</p>}
            <p>{Math.floor(selectedMovie.runtime / 60)}h</p>
            <p>{selectedMovie.runtime % 60}m</p>
          </div>
        </div>
        <div className="">
          <p className="text-[12px]">Rating</p>
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="25"
              viewBox="0 0 26 25"
              fill="none"
            >
              <path
                d="M12.9997 1.33325L16.6047 8.63659L24.6663 9.81492L18.833 15.4966L20.2097 23.5233L12.9997 19.7316L5.78967 23.5233L7.16634 15.4966L1.33301 9.81492L9.39467 8.63659L12.9997 1.33325Z"
                fill="#FDE047"
                stroke="#FDE047"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-[18px] font-[600]">
              {selectedMovie.vote_average}
              <span className="text-[16px] text-gray-500 font-[400]">/10</span>
            </p>
          </div>
          <div>
            <p className="text-[12px] text-gray-500 ml-8">
              {Math.floor(selectedMovie.vote_count)}k
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
