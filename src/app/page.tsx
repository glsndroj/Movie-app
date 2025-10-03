"use client";

import { Movietype } from "@/lib/typeofmovies";
import { ImageCarousel } from "../components/ImageCarousel";

import { GroupMovie } from "../components/GroupMovie";

import { UpcomingMovies, PopularMovies, TopRatedMovies } from "@/lib/movielist";

export default function Home(props: { movie: Movietype[] }) {
  return (
    <>
      <ImageCarousel />
      <GroupMovie text={"Upcoming"} movies={UpcomingMovies} />
      <GroupMovie text="Popular" movies={PopularMovies} />
      <GroupMovie text="Top Rated" movies={TopRatedMovies} />
    </>
  );
}
