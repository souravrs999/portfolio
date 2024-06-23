import About from "@/components/about";
import Experience from "@/components/experience";
import HeroSection from "@/components/hero";
import Skills from "@/components/skills";
import Testimonials from "@/components/testimonials";
import Works from "@/components/works";

const Home = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <About />
      <Skills />
      <Experience />
      <Works />
      <Testimonials />
    </div>
  );
};
export default Home;
