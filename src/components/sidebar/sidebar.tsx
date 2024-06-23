"use client";
import React, { forwardRef, Ref, useContext, Fragment, useState } from "react";
import {
  SidebarComponent,
  SidebarContentComponent,
  SidebarContentProps,
  SidebarFooterComponent,
  SidebarFooterProps,
  SidebarHeaderComponent,
  SidebarHeaderProps,
  SidebarNavigationComponent,
  SidebarNavigationItemComponent,
  SidebarNavigationItemProps,
  SidebarNavigationListComponent,
  SidebarNavigationListProps,
  SidebarNavigationProps,
  SidebarNavigationSectionComponent,
  SidebarNavigationSectionProps,
  SidebarProps,
  SidebarTriggerComponent,
  SidebarTriggerProps,
} from "./sidebar.types";
import { cn } from "@/util/style";
import { SidebarContext } from "./sidebar.context";
import useIsMobile from "@/hooks/use-mobile";

const SidebarTrigger: SidebarTriggerComponent = forwardRef<
  HTMLDivElement,
  SidebarTriggerProps
>((props: SidebarTriggerProps, ref?: Ref<HTMLDivElement>) => {
  const { children, asChild, className, ...rest } = props;
  const context = useContext(SidebarContext);

  function handleTriggerClick(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    if (context?.onToggle) {
      context.onToggle();
    }
  }

  return (
    <div
      ref={ref}
      className="z-50 cursor-pointer absolute h-6 w-6 top-10 right-10 grid place-items-center"
      onClick={handleTriggerClick}
      {...rest}
    >
      <div
        className={cn(
          "w-full h-[2px] bg-[#111] dark:bg-gray-200 rounded-full transition-all duration-300",
          "before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-[#111] dark:before:bg-gray-200 before:rounded-full before:-translate-y-2 before:transition-all before:duration-300",
          "after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#111] dark:after:bg-gray-200 after:rounded-full after:translate-y-2 after:transition-all after:duration-300",
          { hidden: !context?.mobile },
          { "h-0 bg-white": context?.active },
          { "before:translate-y-0 before:rotate-45": context?.active },
          { "after:translate-y-0 after:-rotate-45": context?.active }
        )}
      />
    </div>
  );
});
SidebarTrigger.displayName = "SidebarTrigger";

const SidebarHeader: SidebarHeaderComponent = forwardRef<
  HTMLDivElement,
  SidebarHeaderProps
>((props: SidebarHeaderProps, ref?: Ref<HTMLDivElement>) => {
  const { children, className, ...rest } = props;
  return (
    <div ref={ref} className={cn("mt-12", className)} {...rest}>
      {children}
    </div>
  );
});
SidebarHeader.displayName = "SidebarHeader";

const SidebarFooter: SidebarFooterComponent = forwardRef<
  HTMLDivElement,
  SidebarFooterProps
>((props: SidebarFooterProps, ref?: Ref<HTMLDivElement>) => {
  const { children, className, ...rest } = props;
  return (
    <div ref={ref} className={cn("mt-12", className)} {...rest}>
      {children}
    </div>
  );
});
SidebarFooter.displayName = "SidebarFooter";

const SidebarNavigationItem: SidebarNavigationItemComponent = forwardRef<
  HTMLLIElement,
  SidebarNavigationItemProps
>((props: SidebarNavigationItemProps, ref?: Ref<HTMLLIElement>) => {
  const { children, active, className, ...rest } = props;
  return (
    <li
      ref={ref}
      className={cn(
        "nav-item tracking-widest uppercase relative [&_a]:block [&_a]:py-4 text-lg not-italic font-normal leading-[2 after:-translate-x-20%] border-b border-gray-200 dark:border-[#1e1e1e] cursor-pointer",
        {
          "border-[#111] dark:border-gray-200": active,
          "before:content-[''] before:absolute before:bottom-[-1px] before:left-0 before:h-[1px] before:bg-[#111] dark:before:bg-[#fff] before:w-0 hover:before:w-full before:transition-all before:duration-700":
            true,
        }
      )}
      {...rest}
    >
      {children}
    </li>
  );
});
SidebarNavigationItem.displayName = "SidebarNavigationItem";

const SidebarNavigationList: SidebarNavigationListComponent = forwardRef<
  HTMLUListElement,
  SidebarNavigationListProps
>((props: SidebarNavigationListProps, ref?: Ref<HTMLUListElement>) => {
  const { children, className, ...rest } = props;
  return (
    <ul ref={ref} className={cn("pl-0 list-none mt-12", className)} {...rest}>
      {children}
    </ul>
  );
});
SidebarNavigationList.displayName = "SidebarNavigationList";

const SidebarNavigationSection: SidebarNavigationSectionComponent = forwardRef<
  HTMLDivElement,
  SidebarNavigationSectionProps
>((props: SidebarNavigationSectionProps, ref?: Ref<HTMLDivElement>) => {
  const { children, className, ...rest } = props;
  return (
    <div ref={ref} className={cn("my-12", className)} {...rest}>
      {children}
    </div>
  );
});
SidebarNavigationSection.displayName = "SidebarNavigationSection";

const SidebarNavigation: SidebarNavigationComponent = forwardRef<
  HTMLDivElement,
  SidebarNavigationProps
>((props: SidebarNavigationProps, ref?: Ref<HTMLDivElement>) => {
  const { children, className, ...rest } = props;
  return (
    <div
      ref={ref}
      className={cn("flex flex-col justify-between h-full", className)}
      {...rest}
    >
      {children}
    </div>
  );
});
SidebarNavigation.displayName = "SidebarNavigation";

const SidebarContent: SidebarContentComponent = forwardRef<
  HTMLDivElement,
  SidebarContentProps
>((props: SidebarContentProps, ref?: Ref<HTMLDivElement>) => {
  const { children, className, ...rest } = props;
  const context = useContext(SidebarContext);
  return (
    <div
      ref={ref}
      className={cn(
        "fixed px-12 bg-white dark:bg-[#111] h-full w-[280px] transform transition-all duration-300 z-10",
        { "-translate-x-full": context?.mobile && !context.active },
        { "relative translate-x-0": !context?.mobile },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
});
SidebarContent.displayName = "SidebarContent";

const SidebarRoot: SidebarComponent = forwardRef<HTMLElement, SidebarProps>(
  (props: SidebarProps, ref?: Ref<HTMLElement>) => {
    const { children, ...rest } = props;
    const isMobile = useIsMobile();
    const [active, setActive] = useState<boolean>(false);

    function handleToggleSidebar() {
      setActive((val) => !val);
    }

    return (
      <aside ref={ref} {...rest}>
        <SidebarContext.Provider
          value={{ active, mobile: isMobile, onToggle: handleToggleSidebar }}
        >
          {children}
        </SidebarContext.Provider>
      </aside>
    );
  }
);
SidebarRoot.displayName = "Sidebar";

const Sidebar = Object.assign(SidebarRoot, {
  Content: SidebarContent,
  Header: SidebarHeader,
  Footer: SidebarFooter,
  List: SidebarNavigationList,
  Navigation: SidebarNavigation,
  Section: SidebarNavigationSection,
  Item: SidebarNavigationItem,
  Trigger: SidebarTrigger,
});
export default Sidebar;
