"use client";

import { Movietype } from "@/lib/typeofmovies";
import { ImageCarousel } from "../components/ImageCarousel";
import { Navbar } from "../components/Navbar";
import { GroupMovie } from "../components/GroupMovie";

import {
  UpcomingMovies,
  PopularMovies,
  TopRatedMovies,
} from "@/components/movielist";

export default function Home(props: { movie: Movietype[] }) {
  return (
    <>
      <Navbar />
      <ImageCarousel />
      <GroupMovie text="Upcoming" movies={UpcomingMovies} />
      <GroupMovie text="Popular" movies={PopularMovies} />
    </>
  );
}
