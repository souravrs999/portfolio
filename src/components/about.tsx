import Image from "next/image";
import Section from "./section";
import SectionHeading from "./section-heading";

const About = () => {
  return (
    <Section id="about" watermark>
      <SectionHeading>about me</SectionHeading>
      <div className="my-6 flex flex-col lg:flex-row gap-24">
        <div className="relative ml-6 w-[240px] md:w-[320px] h-[320px] md:h-[427px] shrink-0 outline outline-gray-100 dark:outline-[#1e1e1e] outline-offset-8">
          <div className="absolute w-[240px] md:w-[320px] h-[320px] md:h-[427px] bg-gray-100 dark:bg-[#1e1e1e] -bottom-6 -right-6" />
          <div className="relative w-[240px] h-[320px] md:w-[320px] md:h-[427px]">
            <Image fill src="/images/about-me-cover.jpg" alt="about me image" />
          </div>
        </div>
        <p className="max-w-4xl text-base text-gray-500 dark:text-gray-400 text-justify">
          Hi there! I&apos;m a passionate Frontend Developer from
          Thiruvananthapuram, Kerala, India. I hold a Bachelor&apos;s degree in
          B.Voc Computer Science and have been honing my skills in the tech
          industry for the past four years.
          <br />
          <br />
          In my professional journey, I have specialized in building dynamic and
          responsive web applications using a variety of modern technologies,
          including Next.js, React.js, Express.js, Node.js, TypeScript,
          JavaScript, MySQL, and Redux. Among these, I have a particular
          expertise in Next.js, which has allowed me to create seamless and
          efficient web solutions.
          <br />
          <br />
          One of my proudest achievements is single-handedly developing a chat
          application using React and Next.js. This project not only showcased
          my technical skills but also my ability to manage and execute a
          complete project from start to finish.
          <br />
          <br />
          What drives me the most is my unending desire to learn and grow. I am
          constantly exploring new technologies and methodologies to improve my
          craft. Currently, I am focused on deepening my expertise in React to
          further enhance my development capabilities.
          <br />
          <br />
          Outside of the coding world, I&apos;m an avid gamer. Gaming has always
          been a great way for me to unwind and stay sharp.
          <br />
          <br />I am excited about the future and the opportunities to create
          innovative and impactful web applications. Thank you for taking the
          time to learn a bit about me!
        </p>
      </div>
    </Section>
  );
};
export default About;
