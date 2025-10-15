

import { axiosInstance } from "@/lib/utils";
import { Trailer } from "./Trailer";


export async function DetailImages({ id }: { id: string }) {
  const getImages = async () => {
    const response = await axiosInstance.get(`/movie/${id}?language=en-US`);
    return response.data;
  };

  const movie = await getImages();
  return (
    <div className="w-full  mt-10">
      <div className="flex gap-6 relative ">
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
          <div className=" absolute flex items-center z-10 gap-5 left-6 bottom-6 cursor-pointer">
           
          </div>
          <div className="absolute bottom-11 left-10">
           <Trailer id={id}/>
         </div>
          
        </div>
        
        
        
      </div>
    </div>
  );
}

