import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import { cn } from "@/util/style";
import ThemeProvider from "@/providers/theme";
import Preferences from "@/components/preferences";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sourav's Portfolio",
  description:
    "Welcome to my portfolio website! I&apos;m Sourav, a passionate front-end developer specializing in React and Next.js. 🚀",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          roboto.className,
          "scroll-smooth antialiased max-w-[1920px] mx-auto dark:bg-[#111]"
        )}
      >
        <ThemeProvider>
          <div className="w-full h-screen flex">
            <Navigation />
            <div className="w-full px-4 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-300">
              {children}
            </div>
          </div>
          <Preferences />
        </ThemeProvider>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return [{ lang: "en-US" }, { lang: "nl-NL" }];
}
