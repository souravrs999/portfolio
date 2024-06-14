import { cn } from "@/util/style";
import {
  Ref,
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  forwardRef,
} from "react";
import { Icons } from "@/components/icons/lucide-icon";
import Image from "next/image";

export interface TestimonialCardProps extends ComponentPropsWithRef<"div"> {
  author: string;
  image: string;
  designation: string;
  content: string;
}
export type TestimonialCardComponent = ForwardRefExoticComponent<
  PropsWithoutRef<TestimonialCardProps> & RefAttributes<HTMLDivElement>
> & { displayName?: string };

const TestimonialCard: TestimonialCardComponent = forwardRef<
  HTMLDivElement,
  TestimonialCardProps
>((props: TestimonialCardProps, ref?: Ref<HTMLDivElement>) => {
  const { author, image, designation, content, className, ...rest } = props;
  return (
    <div
      ref={ref}
      className={cn(
        "w-full gap-12 flex flex-wrap items-center border py-8 px-12",
        className
      )}
      {...rest}
    >
      <div className="w-20 h-20 relative overflow-hidden rounded-full outline-4 outline-[#111] outline-dashed outline-offset-8 ring-4 ring-gray-300 shrink-0">
        <Image fill src={image} alt="testimonial image" />
      </div>
      <div className="flex md:flex-1 flex-col gap-4 items-end">
        <p className="relative text-base text-gray-700 font-medium p-2">
          <Icons.quote className="absolute rotate-180 top-0 -left-6 fill-gray-300 stroke-gray-300" />
          {content}
          <Icons.quote className="absolute bottom-0 right-0 stroke-gray-300 fill-gray-300" />
        </p>
        <div className="flex flex-col text-gray-700">
          <p className="font-bold">{author}</p>
          <p className="text-xs text-gray-500">{designation}</p>
        </div>
      </div>
    </div>
  );
});
TestimonialCard.displayName = "TestimonialCard";
export default TestimonialCard;
