import { cn } from "@/util/style";
import {
  Ref,
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  forwardRef,
} from "react";
import SimpleIcon from "@/components/icons/simple-icon";
import { Icons } from "@/components/icons/lucide-icon";
import Link from "next/link";

export interface SocialsProps extends ComponentPropsWithRef<"div"> {}
export type SocialsComponent = ForwardRefExoticComponent<
  PropsWithoutRef<SocialsProps> & RefAttributes<HTMLDivElement>
> & { displayName?: string };

const Socials: SocialsComponent = forwardRef<HTMLDivElement, SocialsProps>(
  (props: SocialsProps, ref?: Ref<HTMLDivElement>) => {
    const { children, className, ...rest } = props;
    return (
      <div
        ref={ref}
        className={cn("w-full flex justify-between", className)}
        {...rest}
      >
        <Link href="/">
          <Icons.globe />
        </Link>
        <Link href="https://github.com/souravrs999">
          <SimpleIcon iconName="github" />
        </Link>
        <Link href="https://www.instagram.com/souravraveen">
          <SimpleIcon iconName="instagram" />
        </Link>
        <Link href="www.linkedin.com/in/sourav-r-s-6868bb191">
          <SimpleIcon iconName="linkedin" />
        </Link>
        <Link href="https://stackoverflow.com/users/14510466/sourav-r-s">
          <SimpleIcon iconName="stackoverflow" />
        </Link>
      </div>
    );
  }
);
Socials.displayName = "Socials";
export default Socials;
