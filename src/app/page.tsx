import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import HeroSection from "@/components/hero";
import Skills from "@/components/skills";
import Testimonials from "@/components/testimonials";
import Works from "@/components/works";
import Blogs from "./blogs/page";

const Home = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <About />
      <Skills />
      <Experience />
      <Works />
      <Testimonials />
      <Contact />
    </div>
  );
};
export default Home;
