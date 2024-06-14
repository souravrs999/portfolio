"use client";
import TestimonialCard from "@/components/testimonial-card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useRecursiveTimeout from "@/hooks/use-recursive-timeout";
import { AUTOPLAY_INTERVAL } from "@/util/constants";
import { useCallback, useEffect, useState } from "react";
import { testimonialsData } from "../../data/testimonials";
import { cn } from "@/util/style";

const Testimonials = () => {
  const SLIDE_COUNT: number = testimonialsData?.length;
  const SLIDES = testimonialsData;

  const [api, setApi] = useState<CarouselApi>();
  const [selectedIdx, setSelectedIdx] = useState<number>();
  const [scrollSnaps, setScrollSnaps] = useState<number[]>();

  const autoplay = useCallback(() => {
    if (!api) return;
    if (api.canScrollNext()) {
      api.scrollNext();
    } else {
      api.scrollTo(0);
    }
  }, [api]);

  const { play, stop } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);

  const onInit = useCallback((api: CarouselApi) => {
    setScrollSnaps(api?.scrollSnapList());
  }, []);

  const onSelect = useCallback((api: CarouselApi) => {
    setSelectedIdx(api?.selectedScrollSnap());
  }, []);

  useEffect(() => {
    play();
    return () => stop();
  }, [play, stop]);

  useEffect(() => {
    if (!api) return;

    onInit(api);
    onSelect(api);
    api.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [api, onInit, onSelect]);

  return (
    <>
      <div className="flex flex-col gap-6 mx-12">
        <h1 className="text-4xl font-black text-gray-700 uppercase">
          Testimonials
        </h1>
      </div>
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {SLIDES.map((s) => (
            <CarouselItem className="xl:basis-1/2" key={s.id}>
              <TestimonialCard
                author={s.author}
                image={s.image}
                designation={s.designation}
                content={s.content}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="w-full mx-auto justify-center flex gap-2 my-4">
          {Array.from({ length: SLIDE_COUNT }).map((_, idx) => (
            <span
              className={cn(
                "w-2 h-2 rounded-full bg-gray-300 transform transition-all duration-300",
                {
                  "bg-[#111] w-4": selectedIdx === idx,
                }
              )}
              key={idx}
            />
          ))}
        </div>
      </Carousel>
    </>
  );
};
export default Testimonials;
