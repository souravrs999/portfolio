import { cn } from "@/util/style";
import {
  Ref,
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  forwardRef,
} from "react";

export interface ButtonProps extends ComponentPropsWithRef<"button"> {}
export type ButtonComponent = ForwardRefExoticComponent<
  PropsWithoutRef<ButtonProps> & RefAttributes<HTMLButtonElement>
> & { displayName?: string };

const Button: ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref?: Ref<HTMLButtonElement>) => {
    const { children, className, ...rest } = props;
    return (
      <button
        ref={ref}
        className={cn(
          "bg-[#111] hover:bg-[#424649] text-white px-3 py-4",
          className
        )}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
export default Button;
