"use client";

import { Wicked } from "@/app/wicked/_components/Wicked";

import axios, { Axios } from "axios";

export default function Home() {
  axios
    .get("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWRhYWU2NjY0MDRhMmE3NzBjOWUyM2FhNmE1Njc0MiIsIm5iZiI6MTc1OTQ2NDA2Ny40NzIsInN1YiI6IjY4ZGY0YTgzYjgzYTdkOThkMWVlNGQwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QSdJhSq1HCl2VQQ-tlwg4SKsYkZYMw1FeqdqkKL9rWs",
      },
    })
    .then((response) => {
      console.log(response.data);
    });
  return (
    <>
      <div className="w-full h-fit flex px-[400px] mt-[80px]">
        <Wicked />
      </div>
    </>
  );
}
