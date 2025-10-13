import { Genredetails } from "@/components/Genredetails";


type genrePageProps = {
    searchParams: {genreId: string; genreName?: string; page?: string}
};

export default async function Home ({searchParams}: genrePageProps) {
    const params = searchParams;
    return (
        <div>
            <Genredetails searchParams={searchParams}/>
        </div>
    )
    }
    
    
    


