import axios from "axios";
import { DetailHeader } from "@/components/Detailheader";
import { DetailImages } from "@/components/Detailimage";
import { DetailDesc } from "@/components/Detaildesc";

export default async function Home({ params }: { params: { id: string } }) {
  const { id } = params;
  const getSelectedMovie = async (id: string) => {
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

  return (
    <div className=" w-full flex flex-col items-center">
      <DetailHeader id={id} />
      <DetailImages id={id} />
      <DetailDesc id={id} />
    </div>
  );
}
