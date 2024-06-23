import { cn } from "@/util/style";
import {
  Ref,
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  forwardRef,
} from "react";

export interface SectionHeadingProps extends ComponentPropsWithRef<"h1"> {}
export type SectionHeadingComponent = ForwardRefExoticComponent<
  PropsWithoutRef<SectionHeadingProps> & RefAttributes<HTMLHeadingElement>
> & { displayName?: string };

const SectionHeading: SectionHeadingComponent = forwardRef<
  HTMLHeadingElement,
  SectionHeadingProps
>((props: SectionHeadingProps, ref?: Ref<HTMLHeadingElement>) => {
  const { children, className, ...rest } = props;
  return (
    <h1
      ref={ref}
      className={cn(
        "relative text-6xl font-black text-gray-100 dark:text-[#1e1e1e] uppercase w-fit tracking-widest my-12",
        className
      )}
      {...rest}
    >
      {children}
      <span
        aria-label={children as string}
        className="absolute text-[#111] dark:text-gray-100 text-4xl font-black uppercase bottom-0 left-0 tracking-normal"
      >
        {children}
      </span>
    </h1>
  );
});
SectionHeading.displayName = "SectionHeading";
export default SectionHeading;
