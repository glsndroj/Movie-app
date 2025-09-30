import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export const Navbar = () => {
  const { setTheme } = useTheme();
  return (
    <div className="flex justify-between items-center px-20">
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
      <div className="flex gap-5 z-20 ">
        <DropdownMenu>
          <DropdownMenuTrigger className="border-[1px] px-2 rounded-md cursor-pointer">
            Genre
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex flex-col gap-2 cursor-pointer border-[1px] px-4 rounded-md bg-gray-100 ">
            <DropdownMenuItem>Action</DropdownMenuItem>
            <DropdownMenuItem>Comedy</DropdownMenuItem>
            <DropdownMenuItem>Crime</DropdownMenuItem>
            <DropdownMenuItem>Documentary</DropdownMenuItem>
            <DropdownMenuItem>Drama</DropdownMenuItem>
            <DropdownMenuItem>Horror</DropdownMenuItem>
            <DropdownMenuItem>Sci-Fi</DropdownMenuItem>
            <DropdownMenuItem>Thriller</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Input placeholder="Search..."></Input>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
