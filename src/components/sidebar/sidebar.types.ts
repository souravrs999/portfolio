import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from "react";

export interface SidebarTriggerProps extends ComponentPropsWithRef<"div"> {
  asChild?: boolean;
}
export type SidebarTriggerComponent = ForwardRefExoticComponent<
  PropsWithoutRef<SidebarTriggerProps> & RefAttributes<HTMLDivElement>
> & { displayName?: string };

export interface SidebarHeaderProps extends ComponentPropsWithRef<"div"> {}
export type SidebarHeaderComponent = ForwardRefExoticComponent<
  PropsWithoutRef<SidebarHeaderProps> & RefAttributes<HTMLDivElement>
> & { displayName?: string };

export interface SidebarFooterProps extends ComponentPropsWithRef<"div"> {}
export type SidebarFooterComponent = ForwardRefExoticComponent<
  PropsWithoutRef<SidebarFooterProps> & RefAttributes<HTMLDivElement>
> & { displayName?: string };

export interface SidebarContentProps extends ComponentPropsWithRef<"div"> {}
export type SidebarContentComponent = ForwardRefExoticComponent<
  PropsWithoutRef<SidebarContentProps> & RefAttributes<HTMLDivElement>
> & { displayName?: string };

export interface SidebarNavigationProps extends ComponentPropsWithRef<"div"> {}
export type SidebarNavigationComponent = ForwardRefExoticComponent<
  PropsWithoutRef<SidebarNavigationProps> & RefAttributes<HTMLDivElement>
> & { displayName?: string };

export interface SidebarNavigationSectionProps
  extends ComponentPropsWithRef<"div"> {}
export type SidebarNavigationSectionComponent = ForwardRefExoticComponent<
  PropsWithoutRef<SidebarNavigationSectionProps> & RefAttributes<HTMLDivElement>
> & { displayName?: string };

export interface SidebarNavigationListProps
  extends ComponentPropsWithRef<"ul"> {}
export type SidebarNavigationListComponent = ForwardRefExoticComponent<
  PropsWithoutRef<SidebarNavigationListProps> & RefAttributes<HTMLUListElement>
> & { displayName?: string };

export interface SidebarNavigationItemProps
  extends ComponentPropsWithRef<"li"> {
  active?: boolean;
}
export type SidebarNavigationItemComponent = ForwardRefExoticComponent<
  PropsWithoutRef<SidebarNavigationItemProps> & RefAttributes<HTMLLIElement>
> & { displayName?: string };

export interface SidebarProps extends ComponentPropsWithRef<"aside"> {}
export type SidebarComponent = ForwardRefExoticComponent<
  PropsWithoutRef<SidebarProps> & RefAttributes<HTMLElement>
> & { displayName?: string };
