import Section from "./section";
import SectionHeading from "./section-heading";
import { Icons } from "./icons/lucide-icon";
import SimpleIcon from "./icons/simple-icon";
import Link from "next/link";

const Works = () => {
  return (
    <Section id="works" watermark>
      <SectionHeading>my recent works</SectionHeading>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-[#111] p-6 border dark:border-[#1e1e1e] pl-12">
          <p className="font-black text-2xl uppercase">Tody</p>
          <ul className="mt-2 text-base text-gray-500 dark:text-gray-400 text-pretty list-disc">
            <li>
              Worked on the chat section for Tody, a user facing care management
              platform.
            </li>
            <li>supports p2p & group chats over websockets.</li>
            <li>
              global redux store for chat room facilitation & realtime
              connection switching.
            </li>
            <li>RTK query used for data fetching & caching.</li>
            <li>SSR & partial rerendering using NextJS app router.</li>
          </ul>
          <div className="flex items-center gap-4 text-xs mt-4 text-gray-400 dark:text-gray-500 font-mono">
            <span>NextJS</span>
            <span>Typescript</span>
            <span>Tailwind CSS</span>
            <span>Redux</span>
            <span>Context</span>
            <span>sockets</span>
          </div>
          <span className="text-xs mt-2 text-gray-400 dark:text-gray-500">
            * unable to provide additional information due to client
            confidentiality.
          </span>
        </div>
        <div className="relative bg-white dark:bg-[#111] p-6 border dark:border-[#1e1e1e] pl-12 pr-24">
          <p className="font-black text-2xl uppercase">LEARNNEXTJS</p>
          <ul className="mt-2 text-base text-gray-500 dark:text-gray-400 text-pretty list-disc">
            <li>
              An educational blog website aimed at empowering new developers in
              the next.js/react ecosystem.{" "}
            </li>
            <li>
              leveraged advanced frontend techniques such as redux, server side
              rendering, and incremental static generation to create a dynamic
              learning platform
            </li>
            <li>
              MDX files parsing using mdx-bundler, Google analytics & mailchimp
              subscription setup.
            </li>
          </ul>
          <div className="flex items-center gap-4 text-xs mt-4 text-gray-400 dark:text-gray-500 font-mono">
            <span>NextJS</span>
            <span>Typescript</span>
            <span>Tailwind CSS</span>
            <span>Context</span>
            <span>MDX</span>
          </div>
          <div className="absolute top-0 right-0 flex flex-col gap-4 py-6 px-6">
            <Link
              target="_blank"
              referrerPolicy="no-referrer"
              href="https://learnnext-blog.vercel.app/"
            >
              <Icons.globe />
            </Link>
            <Link
              target="_blank"
              referrerPolicy="no-referrer"
              href="https://github.com/souravrs999/LEARNNEXTJS"
            >
              <SimpleIcon iconName="github" />
            </Link>
          </div>
        </div>
        <div className="relative bg-white dark:bg-[#111] p-6 border dark:border-[#1e1e1e] pl-12 pr-24">
          <p className="font-black text-2xl uppercase">Controller playground</p>
          <ul className="mt-2 text-base text-gray-500 dark:text-gray-400 text-pretty list-disc">
            <li>
              A web application built using React and Next.js, designed to
              interact with the underlying Gamepad API. This application allows
              users to connect their game controllers and test various
              functionalities such as button presses, stick alignment, and
              haptic feedback. The aim is to provide a comprehensive tool for
              gamers and developers to ensure their gamepads are functioning
              correctly and to experiment with the capabilities of their
              devices.
            </li>
          </ul>
          <div className="flex items-center gap-4 text-xs mt-4 text-gray-400 dark:text-gray-500 font-mono">
            <span>Nextjs</span>
            <span>Tailwind CSS</span>
            <span>Context</span>
          </div>
          <div className="absolute top-0 right-0 flex flex-col gap-4 py-6 px-6">
            <Link
              target="_blank"
              referrerPolicy="no-referrer"
              href="https://github.com/souravrs999/controller-playground"
            >
              <SimpleIcon iconName="github" />
            </Link>
          </div>
        </div>
        <div className="relative bg-white dark:bg-[#111] p-6 border dark:border-[#1e1e1e] pl-12 pr-24">
          <p className="font-black text-2xl uppercase">ALPHR</p>
          <ul className="mt-2 text-base text-gray-500 dark:text-gray-400 text-pretty list-disc">
            <li>
              A Pytorch implementation of a darknet trained YOLOV4-Tiny model
              that can detect number plates & helmets, If a number plate is
              detected it is passed through an OCR to recognize the number.
            </li>
          </ul>
          <div className="flex items-center gap-4 text-xs mt-4 text-gray-400 dark:text-gray-500 font-mono">
            <span>Pytorch</span>
            <span>Python</span>
            <span>YOLOV4</span>
          </div>
          <div className="absolute top-0 right-0 flex flex-col gap-4 py-6 px-6">
            <Link
              target="_blank"
              referrerPolicy="no-referrer"
              href="https://github.com/souravrs999/License-Plate-Recognition"
            >
              <SimpleIcon iconName="github" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Works;
