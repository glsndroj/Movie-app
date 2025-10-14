import { Genredetails } from "@/app/genreDetails/_features/Genredetails";
import { Genres } from "@/components/Genres";


type genrePageProps = {
    searchParams: {genreId: string; genreName?: string; page?: string}
};

export default async function Home ({searchParams}: genrePageProps) {
    
    return (
        <div>
            <Genres/>
            <Genredetails searchParams={searchParams}/>
        </div>
    )
    }
    
    
    


