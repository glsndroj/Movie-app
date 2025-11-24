import { ImageCarousel } from "../components/ImageCarousel";
import * as Homemovies from "@/components/Homemovies";
import { Suspense } from "react";
import HomeLoadingPage from "./homeSkeleton";

export default function Home() {
  return (
    <>
      <ImageCarousel />
      <Suspense fallback={<HomeLoadingPage/>}>
        <Homemovies.UpComingMovies />
      </Suspense>

      <Suspense fallback={<HomeLoadingPage/>}>
        <Homemovies.PopularMovies />
      </Suspense>

      <Suspense fallback={<HomeLoadingPage/>}>
        <Homemovies.TopRatedMovies />
      </Suspense>
    </>
  );
}
