import axios from "axios";

export async function DetailImages({ id }: { id: string }) {
  const getImages = async () => {
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

  const movie = await getImages();
  return (
    <>
      <div className="  h-[428px] mt-10">
        <div className="flex gap-6 h-[428px] ">
          <img
            className=""
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            alt={movie.title}
          />
          <img
            className="w-[1000px]"
            src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
