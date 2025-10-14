import { Movie } from "@/components/Movie";
import { Movietype } from "@/lib/typeofmovies";
import { axiosInstance } from "@/lib/utils";

type genrePageProps = {
    searchParams: {genreId: string; genreName?: string; page?: string}
};

export async function Genredetails ({searchParams}: genrePageProps)  {
    
    const {genreId, genreName, page = 1}= searchParams;

    const getMoviesByGenre = async () => {
        const response = await axiosInstance.get(`/discover/movie?language=en&with_genres=${genreId}&page=${page}`);
        return response.data.results;
    }
    
    
    const movies = await getMoviesByGenre()
    
    
    return(
        <div>
            
            {movies.map((movie: Movietype) => {
                return (
                <Movie 
               movie={movie}  
                />
            );
                
            })}
        </div>
    )
}
