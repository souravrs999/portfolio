import About from "@/components/about";
import Experience from "@/components/experience";
import HeroSection from "@/components/hero";
import Testimonials from "@/components/testimonials";

const Home = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <About />
      <Experience />
      <Testimonials />
    </div>
  );
};
export default Home;
