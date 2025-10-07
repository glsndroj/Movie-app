import axios from "axios";

export async function DetailDesc({ id }: { id: string }) {
  const getDesc = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
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

  const description = await getDesc();
  return (
    <>
      <div></div>
    </>
  );
}
