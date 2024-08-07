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
            className="font-black text-6xl sm:text-9xl text-gray-400 dark:text-[#1e1e1e] contrast-more:text-gray-500 uppercase"
          >
            Hi, my name is{" "}
            <strong className="text-[#111] dark:text-gray-200">sourav</strong>
          </h6>
        </div>
        <div className="flex flex-col justify-end gap-6 max-w-xl">
          <h6 className="text-3xl sm:text-5xl text-gray-700 dark:text-gray-300 font-black">
            I build things for the web.
          </h6>
          <p className="text-base text-gray-500 dark:text-gray-400 mb-4 text-pretty">
            I&apos;m a software engineer based in Kerala, India. I specialize in
            building & desgining exceptional websites, applications, and
            everything in between
          </p>
          <Socials className="max-w-xs" />
          <div className="w-full flex flex-col sm:flex-row gap-6">
            <Link
              href="#contact me"
              className="grid place-items-center text-gray-200 bg-[#111] px-4 py-4 sm:px-8 uppercase dark:bg-white dark:text-[#111] dark:hover:bg-gray-200 hover:bg-[#424649]"
            >
              Talk with me
            </Link>
            <Link
              href="#works"
              className="grid py-4 place-items-center bg-white dark:bg-[#111] text-[#111] dark:text-gray-200 border border-[#111] dark:border-[#1e1e1e] px-4 sm:px-8 uppercase hover:bg-gray-200 dark:hover:bg-[#1e1e1e]"
            >
              See my work
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default HeroSection;
