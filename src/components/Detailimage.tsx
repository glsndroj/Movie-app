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
          className="w-[30%] h-[800px] "
          src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
          alt={movie.title}
        />
        <div className="relative">
          <img
          className="w-full h-[800px]"
          src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
          alt=""
         />
          <div className=" absolute flex items-center gap-5 left-6 bottom-6 z-10">
           <svg className="bg-white p-6 rounded-full z-10" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
             <path d="M3.33301 2L12.6663 8L3.33301 14V2Z" stroke="black"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"/>
           </svg>
            <span className="text-white text-2xl">Play Trailer</span>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}
