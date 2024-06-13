import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import Navigation from "@/components/navigation";
import { cn } from "@/util/style";

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
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={params.lang}>
      <body
        className={cn(
          roboto.className,
          "scroll-smooth antialiased max-w-[1920px]"
        )}
      >
        <div className="w-full h-screen flex">
          <Navigation />
          <div className="w-full px-4">{children}</div>
        </div>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return [{ lang: "en-US" }, { lang: "nl-NL" }];
}
