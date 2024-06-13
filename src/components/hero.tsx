import Button from "./ui/button";
import Avatar from "./avatar";
import Socials from "./socials";
import TechStack from "./tech-stack";

const HeroSection = () => {
  return (
    <section className="m-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div className="flex flex-col gap-6">
          <Avatar />
          <h6 className="font-black text-6xl sm:text-9xl text-gray-300 uppercase">
            Hi, my name is <strong className="text-[#111]">sourav</strong>
          </h6>
        </div>
        <div className="flex flex-col justify-end gap-6 max-w-xl">
          <h6 className="text-3xl sm:text-5xl text-gray-700 font-black">
            I build things for the web.
          </h6>
          <p className="text-base text-gray-500 mb-4">
            I&apos;m a software engineer based in Kerala, India. I specialize in
            building & desgining exceptional websites, applications, and
            everything in between
          </p>
          <Socials className="max-w-xs" />
          <div className="w-full flex gap-6">
            <Button className="px-4 sm:px-8 uppercase">Talk with me</Button>
            <Button className="bg-white text-[#111] border border-[#111] px-4 sm:px-8 uppercase hover:bg-gray-200">
              See my work
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h5 className="text-gray-300 text-4xl font-black uppercase">
          My Stack
        </h5>
        <TechStack />
      </div>
    </section>
  );
};
export default HeroSection;
