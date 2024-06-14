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
import Link from "next/link";

const stackItems: { id: string; iconName: string; url: string }[] = [
  { id: "nextdotjs", iconName: "nextdotjs", url: "https://nextjs.org/" },
  { id: "react", iconName: "react", url: "https://reactjs.org/" },
  {
    id: "typescript",
    iconName: "typescript",
    url: "https://www.typescriptlang.org/",
  },
  {
    id: "javascript",
    iconName: "javascript",
    url: "https://www.javascript.com/",
  },
  { id: "redux", iconName: "redux", url: "https://redux.js.org/" },
  { id: "nodedotjs", iconName: "nodedotjs", url: "https://nodejs.org/" },
  { id: "express", iconName: "express", url: "https://expressjs.com/" },
  {
    id: "html5",
    iconName: "html5",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    id: "css3",
    iconName: "css3",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    id: "tailwindcss",
    iconName: "tailwindcss",
    url: "https://tailwindcss.com/",
  },
];

export interface TechStackProps extends ComponentPropsWithRef<"div"> {
  size?: number;
}
export type TeachStackComponent = ForwardRefExoticComponent<
  PropsWithoutRef<TechStackProps> & RefAttributes<HTMLDivElement>
> & { displayName?: string };

const TechStack: TeachStackComponent = forwardRef<
  HTMLDivElement,
  TechStackProps
>((props: TechStackProps, ref?: Ref<HTMLDivElement>) => {
  const { children, size, className, ...rest } = props;
  return (
    <div
      ref={ref}
      className={cn(
        "w-full flex flex-row-reverse flex-wrap justify-end",
        className
      )}
      {...rest}
    >
      {stackItems.map((i) => (
        <Link
          key={i.id}
          href={i.url}
          aria-label={i.id}
          target="_blank"
          referrerPolicy="no-referrer"
          className="p-4"
        >
          <SimpleIcon size={size} iconName={i.iconName} />
        </Link>
      ))}
    </div>
  );
});
TechStack.displayName = "TechStack";
export default TechStack;
