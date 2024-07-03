import Section from "./section";
import SectionHeading from "./section-heading";
import TechStack from "./tech-stack";

const Skills = () => {
  return (
    <Section id="skills" watermark>
      <SectionHeading>skills</SectionHeading>
      <p className="text-base text-gray-500 dark:text-gray-400 mb-6 text-pretty">
        With a solid foundation in frontend development, I specialize in
        building dynamic and responsive web applications using Next.js,
        React.js, and TypeScript. My expertise extends to backend technologies
        like Node.js and Express.js, as well as database management with MySQL.
        Proficient in modern JavaScript frameworks and libraries, I excel at
        creating seamless user experiences and efficient, scalable codebases.
        <br />
        <br />
        Tools & skill&apos;s I&apos;m really good at
      </p>
      <TechStack size={48} />
    </Section>
  );
};
export default Skills;
