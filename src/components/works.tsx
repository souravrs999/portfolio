import Image from "next/image";
import Section from "./section";
import SectionHeading from "./section-heading";

const Works = () => {
  return (
    <Section id="works" watermark>
      <SectionHeading>my recent works</SectionHeading>
      <div className="grid gap-12 grid-cols-1 2xl:grid-cols-2">
        <div className="w-full h-full relative">
          <div className="relative w-full min-h-64 md:max-w-[48rem] md:min-h-[32rem] md:ml-auto">
            <Image src="/images/works-tody-chat.jpg" fill alt="tody chat app" />
          </div>
          <div className="flex bg-white dark:bg-[#111] gap-6 items-start py-6 md:p-12 md:absolute md:top-1/2 md:max-w-lg">
            <span className="text-7xl font-black">01</span>
            <div className="w-full">
              <h4 className="font-black text-2xl uppercase">Tody</h4>
              <p className="text-gray-500 dark:text-gray-400 text-justify mt-4">
                Developed a real-time chat application for Tody with
                peer-to-peer and group messaging capabilities, featuring
                real-time message updates.
              </p>
              <div className="flex items-center gap-2 text-xs mt-4 text-white uppercase [&_span]:bg-[#111] dark:[&_span]:bg-[#1e1e1e] [&_span]:px-3 [&_span]:py-1">
                <span>NextJS</span>
                <span>Typescript</span>
                <span>sockets</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Works;
