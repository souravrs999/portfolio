"use client";
import Sidebar from "@/components/sidebar/sidebar";
import Link from "next/link";
import Button from "@/components/ui/button";
import Socials from "./socials";
import useIntersectionObserver from "@/hooks/intersection-observer";

const Navigation = () => {
  const activeSection = useIntersectionObserver();
  console.log(activeSection);
  return (
    <Sidebar>
      <Sidebar.Trigger />
      <Sidebar.Content>
        <Sidebar.Navigation>
          <Sidebar.Section className="mt-0">
            <Sidebar.Header>
              <span className="text-7xl font-black text-[#111]">SR.</span>
            </Sidebar.Header>
            <Sidebar.List>
              <Link href="#home">
                <Sidebar.Item active={activeSection === "home"}>
                  Home
                </Sidebar.Item>
              </Link>
              <Link href="#about">
                <Sidebar.Item active={activeSection === "about"}>
                  about
                </Sidebar.Item>
              </Link>
              <Link href="#experience">
                <Sidebar.Item active={activeSection === "experience"}>
                  experience
                </Sidebar.Item>
              </Link>
              <Link href="#works">
                <Sidebar.Item active={activeSection === "works"}>
                  works
                </Sidebar.Item>
              </Link>
              <Link href="#testimonials">
                <Sidebar.Item active={activeSection === "testimonials"}>
                  testimonials
                </Sidebar.Item>
              </Link>
              <Link href="#contact">
                <Sidebar.Item active={activeSection === "contact"}>
                  contact
                </Sidebar.Item>
              </Link>
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
