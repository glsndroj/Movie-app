import { Genres } from "@/components/Genres";
import Genredetails from "./_features/Genredetails";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { PaginationDemo } from "./_features/Pagination";

type GenrePageProps = {
  searchParams: { genreId: string; genreName?: string; page?: string };
};

export default async function Home({ searchParams }: GenrePageProps) {
  
  const { genreId, genreName, page } = searchParams;

  return (
    <>
      <div className="px-20 mt-10 text-3xl font-bold">
        <span>Search filter</span>
      </div>
      <div className="flex w-full gap-5 px-20 py-10">
        <div className="flex flex-col w-[600px] h-fit gap-7 rounded-md mt-2">
          <div className="flex flex-col gap-6 border-b-[2px]">
            <p className="text-3xl font-bold">Genres</p>
            <p>See lists of movies by genre</p>
          </div>
          <DropdownMenuSeparator />
          <Genres />
        </div>

        <div>
          <Genredetails searchParams={{ genreId, genreName, page }}/>
        </div>
      </div>

      <div>
        <PaginationDemo />
      </div>
    </>
  );
}
