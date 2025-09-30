"use client";

import { Movietype } from "@/lib/typeofmovies";
import { ImageCarousel } from "../components/ImageCarousel";
import { Navbar } from "../components/Navbar";
import { GroupMovie } from "../components/GroupMovie";

export default function Home() {
  const testMovies: Movietype[] = [
    {
      name: "Wicked",
      rating: 7.8,
      images: ["www.google.com"],
    },
    {
      name: "Gladiator 2",
      rating: 8,
      images: ["www.google.com"],
    },
    {
      name: "Moana 2",
      rating: 6,
      images: ["www.google.com"],
    },
  ];
  return (
    <>
      <Navbar />
      <ImageCarousel />
      <GroupMovie text="Upcoming" movies={testMovies} />
    </>
  );
}
