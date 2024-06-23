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
import SectionHeading from "./section-heading";
import Section from "./section";

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

  const onIndicatorClick = useCallback(
    (e: React.MouseEvent<HTMLSpanElement>) => {
      const { id } = e.currentTarget;
      if (!id) return;
      api?.scrollTo(Number(id));
    },
    [api]
  );

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
    <Section watermark id="testimonials">
      <SectionHeading>Testimonials</SectionHeading>
      <p className="text-base text-gray-500 dark:text-gray-400 mb-12 text-justify">
        Don&apos;t just take my word for it here’s what others have to say about
        my work. These testimonials from clients and colleagues highlight my
        dedication, skills, and the positive impact I&apos;ve had on their
        projects and teams.
      </p>
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
                "w-3 h-3 bg-gray-300 dark:bg-[#1e1e1e] transform transition-all duration-300 cursor-pointer",
                {
                  "bg-[#111] dark:bg-gray-200 w-6": selectedIdx === idx,
                }
              )}
              onClick={onIndicatorClick}
              key={idx}
              id={idx.toString()}
            />
          ))}
        </div>
      </Carousel>
    </Section>
  );
};
export default Testimonials;
