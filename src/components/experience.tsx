import Section from "./section";
import SectionHeading from "./section-heading";

const Experience = () => {
  return (
    <Section id="experience" watermark>
      <SectionHeading>Experiences</SectionHeading>
      <div className="-my-6">
        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="font-black text-2xl text-[#111] dark:text-gray-300 mb-1 sm:mb-0">
            Frontend Engineer
          </div>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-200 dark:before:bg-[#1e1e1e] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-gray-600 dark:after:bg-gray-200 after:border-4 after:box-content after:border-gray-100 dark:after:border-[#1e1e1e] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-gray-200 bg-[#111] dark:bg-[#1e1e1e]">
              Apr, 2023
            </time>
            <div className="text-lg font-medium text-gray-500 dark:text-gray-400">
              Equipo Business Solutions Pvt. Ltd
            </div>
          </div>
          <div className="mt-4 text-base text-gray-500 dark:text-gray-400 max-w-6xl text-pretty">
            Developed and maintained high-performance chat applications,
            ensuring real-time communication and a seamless user experience for
            Equipo&apos;s projects.
            <br />
            Utilized Core CSS techniques to create responsive, visually
            appealing, and consistent user interfaces, enhancing overall user
            experience.
            <br />
            Leveraged ReactJS and NextJS to build responsive, server-side
            rendered chat applications, enhancing both SEO and initial load
            times by 40% through server-side rendering and optimized bundle
            sizes.
          </div>
        </div>

        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="font-black text-2xl text-[#111] dark:text-gray-300 mb-1 sm:mb-0">
            Fullstack Developer
          </div>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-200 dark:before:bg-[#1e1e1e] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-gray-600 dark:after:bg-gray-200 after:border-4 after:box-content after:border-gray-100 dark:after:border-[#1e1e1e] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-gray-200 bg-[#111] dark:bg-[#1e1e1e]">
              Oct, 2021
            </time>
            <div className="text-lg font-medium text-gray-500 dark:text-gray-400">
              Coddle Technologies Pvt. Ltd
            </div>
          </div>
          <div className="mt-4 text-base text-gray-500 dark:text-gray-400 max-w-6xl text-pretty">
            Designed and developed Xler8, a fully customizable dashboard library
            for a healthcare management system, akin to a React layout grid. The
            dashboard functions as an admin panel, providing critical metrics
            such as patient numbers, therapist counts, and more.
            <br />
            Designed a modular and scalable architecture, facilitating easy
            addition of new features and customization options, Implemented
            real-time updates for critical metrics using WebSockets, ensuring
            administrators have up-to-date information.
            <br />
            Developed and integrated RESTful APIs using NodeJS, ExpressJS, and
            MySQL to fetch and manage healthcare data efficiently
          </div>
        </div>

        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="font-black text-2xl text-[#111] dark:text-gray-300 mb-1 sm:mb-0">
            Software Developer ML
          </div>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-200 dark:before:bg-[#1e1e1e] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-gray-600 dark:after:bg-gray-200 after:border-4 after:box-content after:border-gray-100 dark:after:border-[#1e1e1e] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-gray-200 bg-[#111] dark:bg-[#1e1e1e]">
              Jun, 2020
            </time>
            <div className="text-lg font-medium text-gray-500 dark:text-gray-400">
              Embright Infotech Pvt. Ltd
            </div>
          </div>
          <div className="mt-4 text-base text-gray-500 dark:text-gray-400 max-w-6xl text-pretty">
            Designed and trained machine learning models using Python and
            PyTorch to develop assistive tools tailored for autistic children.
            <br />
            Performed extensive data preprocessing, analysis, and feature
            engineering to prepare datasets for training robust ML models.
            <br />
            Integrated ML models with the React-based application, ensuring
            seamless interaction between the machine learning backend and
            user-facing features.
            <br />
            Developed innovative assistive technology tools, including real-time
            speech recognition and emotion detection, significantly improving
            communication capabilities for autistic children.
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Experience;
