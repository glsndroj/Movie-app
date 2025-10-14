import { axiosInstance } from "@/lib/utils";
import ReactPlayer from 'react-player'

export async function Trailer({ id }: { id: string }) {
  const getTrailer = async () => {
    const response = await axiosInstance.get(`/movie/${id}/videos?language=en-US`);
    return response.data;
    
  };
 
  const movie = await getTrailer();
  console.log("this is movie",movie)
  return (
    <div>
      
      <ReactPlayer src={`https://www.youtube.com/watch?v=${movie.results[0].key}`}/>
        
    </div>
  );
}
