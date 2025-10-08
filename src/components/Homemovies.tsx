import { GroupMovie } from "./GroupMovie";
import { axiosInstance } from "@/lib/utils";

export async function UpComingMovies() {
  const getupcomingMovies = async () => {
    const response = await axiosInstance.get(
      `/movie/upcoming?language=en-US&page=1`
    );
    return response.data.results;
  };
  const upcomingMovies = await getupcomingMovies();

  return <GroupMovie text={"Upcoming"} movies={upcomingMovies} />;
}

export async function PopularMovies() {
  const getPopularMovies = async () => {
    const response = await axiosInstance.get(
      `/movie/popular?language=en-US&page=1`
    );
    return response.data.results;
  };
  const PopularMovies = await getPopularMovies();

  return <GroupMovie text={"Popular"} movies={PopularMovies} />;
}

export async function TopRatedMovies() {
  const getTopRatedMovies = async () => {
    const response = await axiosInstance.get(
      `/movie/top_rated?language=en-US&page=1`
    );
    return response.data.results;
  };
  const topRatedMovies = await getTopRatedMovies();

  return <GroupMovie text={"Top Rated"} movies={topRatedMovies} />;
}
