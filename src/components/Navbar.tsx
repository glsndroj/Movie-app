"use client";

import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Theme } from "./Theme";
import { Genres } from "./Genres";
import { useState } from "react";
import { axiosInstance } from "@/lib/utils";
import { Divide } from "lucide-react";

export const Navbar = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const page = 1;

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (!value) {
      setResult([]);
      return;
    }

    setLoading(true);

    try {
      const res = await axiosInstance.get(
        `/search/movie?query=${query}&language=en-US&page=${page}`
      );
      setResult(res.data.result || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-between items-center px-20 py-5">
      <a href="/" className="flex items-center gap-2">
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
      </a>
      <div className="flex gap-5 z-20 relative ">
        <DropdownMenu>
          <DropdownMenuTrigger className=" flex items-center gap-1 px-2 border rounded-md cursor-pointer ">
            <svg
              className="text-gray-700 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M4 6.5L8 10.5L12 6.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Genre</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <div className="flex flex-col w-[450px] h-fit gap-4 border-[1px] p-4 rounded-md bg-gray-100 mt-2 dark:bg-black">
              <div className="flex flex-col gap-3 border-b-[2px]">
                <p className="text-3xl font-bold">Genres</p>
                <p>See lists of movies by genre</p>
              </div>
              <DropdownMenuSeparator />
              <Genres />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="relative w-[500px]">
          <Input
            placeholder="Search..."
            value={query}
            onChange={handleSearch}
            className="w-full pl-10"
          />
          {/* Search icon */}
          <svg
            className="absolute left-3 top-3 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            fill="none"
            viewBox="0 0 16 17"
          >
            <g opacity="0.5">
              <path
                d="M6.93262 3.1333C9.30738 3.1333 11.2323 5.05837 11.2324 7.43311C11.2324 8.44873 10.8814 9.38107 10.293 10.1167L10.0127 10.4663L13.3564 13.8101C13.3628 13.8166 13.3663 13.825 13.3662 13.8335L13.3564 13.8569C13.3435 13.8698 13.3226 13.8697 13.3096 13.8569L9.96582 10.5132L9.61621 10.7935C8.88058 11.3819 7.94824 11.7329 6.93262 11.7329C4.55788 11.7328 2.63281 9.80786 2.63281 7.43311C2.63292 5.05844 4.55795 3.13341 6.93262 3.1333Z"
                fill="currentColor"
                stroke="currentColor"
              />
            </g>
          </svg>

          {/* Dropdown results */}
          {result.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg mt-2 rounded-md z-50 max-h-80 overflow-y-auto">
              {result.map((movie) => (
                <div
                  key={movie.id}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                >
                  {movie.title}
                </div>
              ))}
            </div>
          )}
          {loading && (
            <div className="absolute top-full left-0 w-full bg-white p-2">
              Loading...
            </div>
          )}
        </div>
      </div>
      <div>
        <Theme />
      </div>
    </div>
  );
};
