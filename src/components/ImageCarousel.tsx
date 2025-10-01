"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import Autoplay from "embla-carousel-autoplay";

export const ImageCarousel = () => {
  return (
    <div className="flex justify-center">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
            
          }),
        ]}
      >
        <CarouselContent className="w-[1200px]  h-[666px]">
          <CarouselItem>
            <img src="/wicked.jpg" alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src="/gladiator.png" alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src="/moana.jpg" alt="" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-5" />
        <CarouselNext className="absolute right-5" />
      </Carousel>
    </div>
  );
};
