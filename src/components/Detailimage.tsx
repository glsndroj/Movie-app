import { axiosInstance } from "@/lib/utils";
import axios from "axios";

export async function DetailImages({ id }: { id: string }) {
  const getImages = async () => {
    const response = await axiosInstance.get(`/movie/${id}?language=en-US`);
    return response.data;
  };

  const movie = await getImages();
  return (
    <div className="w-full  mt-10">
      <div className="flex gap-6 ">
        <img
          className="w-[30%]"
          src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
          alt={movie.title}
        />
        <img
          className="w-[68%]"
          src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
          alt=""
        />
      </div>
    </div>
  );
}
