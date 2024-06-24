import { cn } from "@/util/style";
import {
  Ref,
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  forwardRef,
} from "react";

export interface SectionHeadingProps extends ComponentPropsWithRef<"div"> {}
export type SectionHeadingComponent = ForwardRefExoticComponent<
  PropsWithoutRef<SectionHeadingProps> & RefAttributes<HTMLHeadingElement>
> & { displayName?: string };

const SectionHeading: SectionHeadingComponent = forwardRef<
  HTMLHeadingElement,
  SectionHeadingProps
>((props: SectionHeadingProps, ref?: Ref<HTMLHeadingElement>) => {
  const { children, className, ...rest } = props;
  return (
    <div ref={ref} className={cn("relative my-12", className)} {...rest}>
      <span
        aria-hidden
        aria-disabled
        className="text-6xl font-black text-gray-100 dark:text-[#1e1e1e] uppercase w-fit tracking-widest"
      >
        {children}
      </span>
      <h1 className="absolute text-[#111] dark:text-gray-100 text-4xl font-black uppercase bottom-0 left-0 tracking-normal">
        {children}
      </h1>
    </div>
  );
});
SectionHeading.displayName = "SectionHeading";
export default SectionHeading;
