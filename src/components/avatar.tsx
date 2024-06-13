import { cn } from "@/util/style";
import {
  Ref,
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  forwardRef,
} from "react";
import Image from "next/image";

export interface AvatarProps extends ComponentPropsWithRef<"div"> {}
export type AvatarComponent = ForwardRefExoticComponent<
  PropsWithoutRef<AvatarProps> & RefAttributes<HTMLDivElement>
> & { displayName?: string };

const Avatar: AvatarComponent = forwardRef<HTMLDivElement, AvatarProps>(
  (props: AvatarProps, ref?: Ref<HTMLDivElement>) => {
    const { children, className, ...rest } = props;
    return (
      <div
        ref={ref}
        className={cn("relative w-24 h-24 bg-gray-200 rounded-full", className)}
        {...rest}
      >
        <div className="w-full h-full relative overflow-hidden rounded-full">
          <Image
            fill
            src="/images/avatar-image.jpg"
            alt="avatar image"
            className="overflow-hidden"
          />
        </div>
        <span className="absolute w-3 h-3 bg-green-500 bottom-2 right-2 rounded-full animate-ping" />
        <span className="absolute w-3 h-3 bg-green-500 bottom-2 right-2 rounded-full ring-1 ring-white" />
      </div>
    );
  }
);
Avatar.displayName = "Avatar";
export default Avatar;
