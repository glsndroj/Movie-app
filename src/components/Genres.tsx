
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { axiosInstance } from "@/lib/utils";

export async function Genres() {
  const getGenres = async () => {
    const genre = await axiosInstance.get(`/genre/movie/list?language=en`)

    return genre.data.genres;
  };
  const genres = await getGenres();

  return (
    <div className="flex flex-wrap gap-4 py-4 font-[600] border-b-[2px]">
      {genres.map((genre: { name: string }) => {
        return (
          <DropdownMenuItem
            key={Math.random()}
            className="border-[1px] px-1 rounded-md  cursor-pointer"
          >
            {genre.name + " >"}
          </DropdownMenuItem>
        );
      })}
    </div>
  );
}
