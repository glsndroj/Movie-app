import { Movietype } from "@/lib/typeofmovies";
import { axiosInstance } from "@/lib/utils";
import { Movie } from "./Movie";

export async function MorelikeThis({ id }: { id: string }) {
  const getMore = async () => {
    const response = await axiosInstance.get(
      `/movie/${id}/similar?language=en-US&page=1`
    );
    console.log(response.data.results);
    return response.data.results;
  };
  const more = await getMore();

  return (
    <>
      <div className="flex w-full h-fit justify-between py-7">
        <div className="flex">
          <h1 className="text-2xl font-[600] ">More like this</h1>
        </div>
        <div>
          <p className="cursor-pointer">See more → </p>
        </div>
      </div>
      <div className="flex gap-6">
        {more.slice(0, 7).map((movie: any) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
