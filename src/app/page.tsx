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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import Autoplay from "embla-carousel-autoplay";

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
