import Button from "./ui/button";
import Avatar from "./avatar";
import Socials from "./socials";
import Section from "./section";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Section id="home" className="flex flex-col">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 mb-12">
        <div className="flex flex-col gap-6">
          <Avatar />
          <h6
            aria-label="Hi, my name is Sourav"
            className="font-black text-6xl sm:text-9xl text-gray-300 dark:text-[#1e1e1e] contrast-more:text-gray-500 uppercase"
          >
            Hi, my name is{" "}
            <strong className="text-[#111] dark:text-gray-200">sourav</strong>
          </h6>
        </div>
        <div className="flex flex-col justify-end gap-6 max-w-xl">
          <h6 className="text-3xl sm:text-5xl text-gray-700 dark:text-gray-300 font-black">
            I build things for the web.
          </h6>
          <p className="text-base text-gray-500 dark:text-gray-400 mb-4 text-justify">
            I&apos;m a software engineer based in Kerala, India. I specialize in
            building & desgining exceptional websites, applications, and
            everything in between
          </p>
          <Socials className="max-w-xs" />
          <div className="w-full flex flex-col sm:flex-row gap-6">
            <Button className="px-4 sm:px-8 uppercase dark:bg-white dark:text-[#111] dark:hover:bg-gray-200">
              Talk with me
            </Button>
            <Button className="bg-white dark:bg-[#111] text-[#111] dark:text-gray-200 border border-[#111] dark:border-gray-400 px-4 sm:px-8 uppercase hover:bg-gray-200 dark:hover:bg-[#1e1e1e]">
              <Link href="#works">See my work</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default HeroSection;
