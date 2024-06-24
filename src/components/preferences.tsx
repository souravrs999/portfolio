"use client";
import { useTheme } from "next-themes";
import { Icons } from "./icons/lucide-icon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { cn } from "@/util/style";
import Button from "./ui/button";

const Preferences = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          aria-label="preferences"
          className="absolute bottom-12 right-0 w-12 h-12 p-2 shadow-2xl border dark:border-[#1e1e1e] bg-white dark:bg-[#1e1e1e] hover:bg-white dark:hover:bg-[#1e1e1e]"
        >
          <Icons.cog className="w-full h-full text-gray-400" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-screen overflow-y-auto">
        <DialogTitle className="text-2xl font-black uppercase">
          Preferences
        </DialogTitle>
        <DialogDescription className="text-base text-gray-500 dark:text-gray-400">
          Select how you would like your interface to look. Select a theme or
          sync for automatic theme switching.
        </DialogDescription>
        <h4 className="uppercase font-semibold mt-6 text-[#111] dark:text-gray-300">
          Appearence
        </h4>
        <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div
            className="relative cursor-pointer"
            onClick={() => setTheme("light")}
          >
            <div className="relative w-full min-h-24 bg-gray-200 overflow-hidden border dark:border-[#1e1e1e]">
              <div className="absolute w-full min-h-24 top-6 left-6 bg-white p-4 shadow-lg">
                <p className="font-bold text-[#111]">Aa</p>
              </div>
            </div>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Light</p>
            <Icons.check
              className={cn(
                "absolute w-6 h-6 p-1 top-2 right-2 bg-[#111] text-gray-200",
                {
                  hidden: theme !== "light",
                }
              )}
            />
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() => setTheme("dark")}
          >
            <div className="relative w-full min-h-24 bg-[#1e1e1e] overflow-hidden border dark:border-[#1e1e1e]">
              <div className="absolute w-full min-h-24 top-6 left-6 bg-[#111] p-4 shadow-lg">
                <p className="font-bold text-white">Aa</p>
              </div>
            </div>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Dark</p>
            <Icons.check
              className={cn(
                "absolute w-6 h-6 p-1 top-2 right-2 bg-gray-200 text-[#111]",
                { hidden: theme !== "dark" }
              )}
            />
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() => setTheme("system")}
          >
            <div className="flex border dark:border-[#1e1e1e]">
              <div className="relative w-full min-h-24 bg-gray-200 overflow-hidden">
                <div className="absolute w-full min-h-24 top-6 left-6 bg-white p-4 shadow-lg">
                  <p className="font-bold text-[#111]">Aa</p>
                </div>
              </div>
              <div className="relative w-full min-h-24 bg-[#1e1e1e] overflow-hidden">
                <div className="absolute w-full min-h-24 top-6 left-6 bg-[#111] p-4 shadow-lg">
                  <p className="font-bold text-white">Aa</p>
                </div>
              </div>
            </div>
            <p className="mt-2 text-gray-500 dark:text-gray-400">System</p>
            <Icons.check
              className={cn(
                "absolute w-6 h-6 p-1 top-2 right-2 bg-gray-200 text-[#111]",
                { hidden: theme !== "system" }
              )}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default Preferences;
