import { Movie } from "@/components/Movie";
import { Movietype } from "@/lib/typeofmovies";
import { axiosInstance } from "@/lib/utils";

type genrePageProps = {
    searchParams: {genreId: string; genreName?: string; page?: string}
};

export async function Genredetails ({searchParams}: genrePageProps)  {
    
    const {genreId, genreName, page = "1"}= searchParams;
    const safePage = Math.max(1, Math.min(500, parseInt(page)));
    

    const getMoviesByGenre = async () => {
        const response = await axiosInstance.get(`/discover/movie?language=en&with_genres=${genreId}&page=${page}`);
        console.log(response.data)
        return response.data;
    }
    
    const movies = await getMoviesByGenre()
    
    return(

        <>
        <div >
            <h4 className="p-2 font-bold text-[24px]">
            {movies.total_results} Titles{genreName ? ` in "${genreName}"` : ""}</h4>
            
           <div className="flex gap-5 flex-wrap">
           {movies.results.map((movie: Movietype) => {
                return (
                <Movie key={movie.id} 
               movie={movie}  
                />
            );
                
            })} 
           </div>
        </div>
        </>
        
    )
}
