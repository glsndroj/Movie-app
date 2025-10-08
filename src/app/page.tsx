import { ImageCarousel } from "../components/ImageCarousel";
import * as Homemovies from "@/components/Homemovies";

export default function Home() {
  return (
    <>
      <ImageCarousel />
      <Homemovies.UpComingMovies />
      <Homemovies.PopularMovies />
      <Homemovies.TopRatedMovies />
    </>
  );
}
