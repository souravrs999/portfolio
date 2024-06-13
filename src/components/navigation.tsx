"use client";
import Sidebar from "@/components/sidebar/sidebar";
import Link from "next/link";
import Button from "@/components/ui/button";
import Socials from "./socials";

const Navigation = () => {
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
              <Sidebar.Item active>
                <Link href="#home">Home</Link>
              </Sidebar.Item>
              <Sidebar.Item>
                <Link href="#home">About</Link>
              </Sidebar.Item>
              <Sidebar.Item>
                <Link href="#home">Experience</Link>
              </Sidebar.Item>
              <Sidebar.Item>
                <Link href="#home">Works</Link>
              </Sidebar.Item>
              <Sidebar.Item>
                <Link href="#home">Contact</Link>
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
