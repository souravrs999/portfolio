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
        <Link aria-label="My website" href="/">
          <Icons.globe />
        </Link>
        <Link aria-label="My Github" href="https://github.com/souravrs999">
          <SimpleIcon iconName="github" />
        </Link>
        <Link
          aria-label="My Instagram"
          href="https://www.instagram.com/souravraveen"
        >
          <SimpleIcon iconName="instagram" />
        </Link>
        <Link
          aria-label="My LinkedIn"
          href="https://www.linkedin.com/in/sourav-r-s-6868bb191"
        >
          <SimpleIcon iconName="linkedin" />
        </Link>
        <Link
          aria-label="My Stackoverflow"
          href="https://stackoverflow.com/users/14510466/sourav-r-s"
        >
          <SimpleIcon iconName="stackoverflow" />
        </Link>
      </div>
    );
  }
);
Socials.displayName = "Socials";
export default Socials;
