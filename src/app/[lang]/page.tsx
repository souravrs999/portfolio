import HeroSection from "@/components/hero";
import Testimonials from "@/components/testimonials";
import { getDictionary } from "@/util/i18n";

interface PageProps {
  params: {
    lang: string;
  };
}

export default async function Home({ params: { lang } }: PageProps) {
  const dict = await getDictionary(lang);

  return (
    <div className="flex flex-col gap-12 my-12">
      <HeroSection />
      <Testimonials />
    </div>
  );
}
