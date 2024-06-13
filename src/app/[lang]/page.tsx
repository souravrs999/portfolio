import HeroSection from "@/components/hero";
import { getDictionary } from "@/util/i18n";

interface PageProps {
  params: {
    lang: string;
  };
}

export default async function Home({ params: { lang } }: PageProps) {
  const dict = await getDictionary(lang);
  return (
    <div className="h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-300">
      <HeroSection />
    </div>
  );
}
