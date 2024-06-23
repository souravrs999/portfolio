import { cn } from "@/util/style";
import {
  Ref,
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  forwardRef,
} from "react";

export interface SectionProps extends ComponentPropsWithRef<"section"> {
  id: string;
  watermark?: boolean;
}
export type SectionComponent = ForwardRefExoticComponent<
  PropsWithoutRef<SectionProps> & RefAttributes<HTMLElement>
> & { displayName?: string };

const Section: SectionComponent = forwardRef<HTMLElement, SectionProps>(
  (props: SectionProps, ref?: Ref<HTMLElement>) => {
    const { children, id, watermark, className, ...rest } = props;
    return (
      <section
        ref={ref}
        id={id}
        className={cn("relative m-6 sm:m-12 overflow-hidden", className)}
        {...rest}
      >
        {children}
        {watermark && (
          <span className="absolute text-[16rem] font-black uppercase text-gray-100 dark:text-[#1e1e1e] -bottom-24 -right-1/4 -z-[10] opacity-50">
            {id}
          </span>
        )}
      </section>
    );
  }
);
Section.displayName = "Section";
export default Section;
