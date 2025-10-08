"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

export const ImageCarousel = () => {
  return (
    <div className="">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className=" w-[2256px] h-200 ">
          <CarouselItem>
            <div className="bg-[url(/wicked-poster.jpg)] bg-cover bg-center w-full h-screen text-white py-[208px] px-[200px] flex flex-col gap-4">
              <div>
                <p>Now playing:</p>
                <h1 className="text-[36px] font-[700]">Wicked</h1>
                <div className="flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M13.9999 2.33337L17.6049 9.63671L25.6666 10.815L19.8333 16.4967L21.2099 24.5234L13.9999 20.7317L6.78992 24.5234L8.16658 16.4967L2.33325 10.815L10.3949 9.63671L13.9999 2.33337Z"
                      fill="#FDE047"
                      stroke="#FDE047"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-[18px]">6.9</p>
                </div>
              </div>
              <div className="w-[380px]">
                Elphaba, a misunderstood young woman because of her green skin,
                and Glinda, a popular girl, become friends at Shiz University in
                the Land of Oz. After an encounter with the Wonderful Wizard of
                Oz, their friendship reaches a crossroads.{" "}
              </div>
              <div className="">
                <div className="bg-white w-[150px] h-[50px] rounded-md flex gap-1 justify-center items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3.33325 2L12.6666 8L3.33325 14V2Z"
                      stroke="#18181B"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p className="text-black">Watch trailer</p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-[url(/gladiator-2.jpg)] bg-cover bg-center w-full h-screen  text-white py-[208px] px-[200px] flex flex-col gap-4">
              <div>
                <p>Now playing:</p>
                <h1 className="text-[36px] font-[700]">Gladiator II</h1>
                <div className="flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M13.9999 2.33337L17.6049 9.63671L25.6666 10.815L19.8333 16.4967L21.2099 24.5234L13.9999 20.7317L6.78992 24.5234L8.16658 16.4967L2.33325 10.815L10.3949 9.63671L13.9999 2.33337Z"
                      fill="#FDE047"
                      stroke="#FDE047"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-[18px]">6.9</p>
                </div>
              </div>
              <div className="w-[380px]">
                After his home is conquered by the tyrannical emperors who now
                lead Rome, Lucius is forced to enter the Colosseum and must look
                to his past to find strength to return the glory of Rome to its
                people.
              </div>
              <div className="">
                <div className="bg-white w-[150px] h-[50px] rounded-md flex gap-1 justify-center items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3.33325 2L12.6666 8L3.33325 14V2Z"
                      stroke="#18181B"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-black">Watch trailer</p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-[url(/moana.jpg)] bg-cover bg-center w-full h-screen  text-white py-[208px] px-[200px] flex flex-col gap-4">
              <div>
                <p>Now playing:</p>
                <h1 className="text-[36px] font-[700]">Moana 2</h1>
                <div className="flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M13.9999 2.33337L17.6049 9.63671L25.6666 10.815L19.8333 16.4967L21.2099 24.5234L13.9999 20.7317L6.78992 24.5234L8.16658 16.4967L2.33325 10.815L10.3949 9.63671L13.9999 2.33337Z"
                      fill="#FDE047"
                      stroke="#FDE047"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-[18px]">6.9</p>
                </div>
              </div>
              <div className="w-[380px]">
                After receiving an unexpected call from her wayfinding
                ancestors, Moana must journey to the far seas of Oceania and
                into dangerous, long-lost waters for an adventure unlike
                anything she's ever faced.
              </div>
              <div className="">
                <div className="bg-white w-[150px] h-[50px] rounded-md flex gap-1 justify-center items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3.33325 2L12.6666 8L3.33325 14V2Z"
                      stroke="#18181B"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-black">Watch trailer</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-5" />
        <CarouselNext className="absolute right-5" />
      </Carousel>
    </div>
  );
};
