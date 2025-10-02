import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Theme } from "./Theme";

const genres = [
  "Action >",
  "Comedy >",
  "Crime >",
  "Documentary >",
  "Drama >",
  "Horror >",
  "Sci-Fi >",
  "Thriller >",
  "Romance >",
  "Adventure >",
  "Fantasy >",
  "Animation >",
  "Mystery >",
  "Musical >",
];

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-20 py-5">
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 21"
          fill="none"
        >
          <path
            d="M5.83341 2.16675V18.8334M14.1667 2.16675V18.8334M1.66675 10.5001H18.3334M1.66675 6.33341H5.83341M1.66675 14.6667H5.83341M14.1667 14.6667H18.3334M14.1667 6.33341H18.3334M3.48341 2.16675H16.5167C17.5201 2.16675 18.3334 2.9801 18.3334 3.98341V17.0167C18.3334 18.0201 17.5201 18.8334 16.5167 18.8334H3.48341C2.4801 18.8334 1.66675 18.0201 1.66675 17.0167V3.98341C1.66675 2.9801 2.4801 2.16675 3.48341 2.16675Z"
            stroke="#4338CA"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[#4338CA] text-[16px] font-[700] italic">
          Movie Z
        </span>
      </div>
      <div className="flex gap-5 z-20 relative ">
        <DropdownMenu>
          <DropdownMenuTrigger className="px-2 rounded-md cursor-pointer ">
            Genre
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <div className="flex ml-97 flex-col w-[450px] h-fit gap-4 border-[1px] p-4 rounded-md bg-gray-100 mt-2 dark:bg-black  ">
              <div className="flex flex-col gap-3 border-b-[2px]">
                <p className="text-3xl font-bold">Genres</p>
                <p>See lists of movies by genre</p>
              </div>

              <div className="flex flex-wrap gap-4 py-4 font-[600] border-b-[2px]">
                {genres.map((genre) => (
                  <DropdownMenuItem
                    className="border-[1px] px-1 rounded-md  cursor-pointer"
                    key={genre}
                  >
                    {genre}
                  </DropdownMenuItem>
                ))}
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="relative">
          <Input className="w-[500px] pl-10" placeholder="Search..."></Input>
          <svg
            className="absolute left-[14px] top-[11px] text-gray-700 dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <g opacity="0.5">
              <path
                d="M6.93262 3.1333C9.30738 3.1333 11.2323 5.05837 11.2324 7.43311C11.2324 8.44873 10.8814 9.38107 10.293 10.1167L10.0127 10.4663L13.3564 13.8101C13.3628 13.8166 13.3663 13.825 13.3662 13.8335L13.3564 13.8569C13.3435 13.8698 13.3226 13.8697 13.3096 13.8569L9.96582 10.5132L9.61621 10.7935C8.88058 11.3819 7.94824 11.7329 6.93262 11.7329C4.55788 11.7328 2.63281 9.80786 2.63281 7.43311C2.63292 5.05844 4.55795 3.13341 6.93262 3.1333ZM6.93262 3.19971C4.59476 3.19981 2.69932 5.09525 2.69922 7.43311C2.69922 9.77105 4.5947 11.6664 6.93262 11.6665C9.27063 11.6665 11.166 9.77111 11.166 7.43311C11.1659 5.09519 9.27056 3.19971 6.93262 3.19971Z"
                fill="currentColor"
                stroke="currentColor"
              />
            </g>
          </svg>
        </div>
      </div>
      <div>
        <Theme />
      </div>
    </div>
  );
};
