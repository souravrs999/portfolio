import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import { cn } from "@/util/style";
import ThemeProvider from "@/providers/theme";
import Preferences from "@/components/preferences";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toast";
import { siteConfig } from "@/util/site-config";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Sourav R S",
    "Sourav",
    "Portfolio",
  ],
  authors: [{ name: "sourav", url: siteConfig.url }],
  creator: "sourav",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/android-chrome-512x512.png`,
        width: 512,
        height: 512,
        alt: "sourav portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/android-chrome-512x512.png`],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          roboto.className,
          "scroll-smooth antialiased min-h-screen max-w-[1920px] mx-auto dark:bg-[#111]"
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
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
