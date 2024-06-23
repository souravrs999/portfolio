"use client";
import Sidebar from "@/components/sidebar/sidebar";
import Link from "next/link";
import Button from "@/components/ui/button";
import Socials from "./socials";
import useIntersectionObserver from "@/hooks/intersection-observer";

const Navigation = () => {
  const activeSection = useIntersectionObserver();
  return (
    <Sidebar>
      <Sidebar.Trigger />
      <Sidebar.Content>
        <Sidebar.Navigation>
          <Sidebar.Section className="mt-0">
            <Sidebar.Header>
              <span className="text-7xl font-black text-[#111] dark:text-gray-200">
                SR.
              </span>
            </Sidebar.Header>
            <Sidebar.List>
              <Sidebar.Item active={activeSection === "home"}>
                <Link href="#home">Home</Link>
              </Sidebar.Item>
              <Sidebar.Item active={activeSection === "about"}>
                <Link href="#about">about</Link>
              </Sidebar.Item>
              <Sidebar.Item active={activeSection === "skills"}>
                <Link href="#skills">skills</Link>
              </Sidebar.Item>
              <Sidebar.Item active={activeSection === "experience"}>
                <Link href="#experience">experience</Link>
              </Sidebar.Item>
              <Sidebar.Item active={activeSection === "works"}>
                <Link href="#works">works</Link>
              </Sidebar.Item>
              <Sidebar.Item active={activeSection === "testimonials"}>
                <Link href="#testimonials">testimonials</Link>
              </Sidebar.Item>
              <Sidebar.Item active={activeSection === "contact"}>
                <Link href="#contact">contact</Link>
              </Sidebar.Item>
            </Sidebar.List>
          </Sidebar.Section>
          <Sidebar.Footer>
            <div className="flex flex-col gap-6 mb-12">
              <Socials />
              <Link href="/api/download">
                <Button className="w-full uppercase">download cv</Button>
              </Link>
            </div>
          </Sidebar.Footer>
        </Sidebar.Navigation>
      </Sidebar.Content>
    </Sidebar>
  );
};
export default Navigation;
