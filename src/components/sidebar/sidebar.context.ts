import { createContext } from "react";

interface SidebarContextValue {
  active: boolean;
  mobile: boolean;
  onToggle?: () => void;
}
export const SidebarContext = createContext<SidebarContextValue | null>(null);
