import { axiosInstance } from "@/lib/utils";
import ReactPlayer from 'react-player'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export async function Trailer({ id }: { id: string }) {
  const getTrailer = async () => {
    const response = await axiosInstance.get(`/movie/${id}/videos?language=en-US`);
    return response.data;
    
  };
 
  const movie = await getTrailer();
  
 
  return(
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="cursor-pointer" variant="outline">Watch Trailer</Button>
        </DialogTrigger>
        <DialogTitle></DialogTitle>
        <DialogContent className="sm:max-w-[70%]">
        <ReactPlayer width={"100%"} height={800} src={`https://www.youtube.com/watch?v=${movie.results[0].key}`}/>
        </DialogContent>
      </form>
    </Dialog>
  )
}
