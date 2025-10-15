// pages/genreDetails.tsx эсвэл app/genreDetails/page.tsx
import { Genres } from "@/components/Genres";
import { Genredetails } from "./_features/Genredetails";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { Pagination } from "./_features/Pagination";


type genrePageProps = {
  searchParams: { genreId: string; genreName?: string; page?: string };
};

export default function Home({ searchParams }: genrePageProps) {
    
  return (
    <>
     <div className="px-20 mt-10 text-3xl font-bold">
        <span>Search filter</span>
     </div>
    <div className="flex w-full gap-5 px-20 py-10">
        
     
      <div className="flex flex-col w-[600px] h-fit gap-7  rounded-md mt-2 dark:bg-black">
              <div className="flex flex-col gap-6 border-b-[2px]">
                <p className="text-3xl font-bold">Genres</p>
                <p>See lists of movies by genre</p>
              </div>
              <DropdownMenuSeparator />
              <Genres />
        </div>

     
      
      <div>
         <Genredetails searchParams={searchParams} />
      </div>
        
    </div>
   
    </>
   
  );
}
