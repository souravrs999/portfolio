import Section from "./section";
import SectionHeading from "./section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Button from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  return (
    <Section id="contact me" watermark>
      <SectionHeading>contact me</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="text-[#111]">
          <h2 className="font-bold text-2xl">Frequently Asked Questions</h2>
          <div className="flex flex-col mt-6 gap-4 h-full">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What experience do you have in my industry?
                </AccordionTrigger>
                <AccordionContent>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What experience do you have in my industry?
                </AccordionTrigger>
                <AccordionContent>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What experience do you have in my industry?
                </AccordionTrigger>
                <AccordionContent>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="">
          <h2 className="font-bold text-2xl">
            Feel free to send me a message.
          </h2>
          <div className="flex flex-col gap-2 mt-6">
            <Input placeholder="Your Full Name" />
            <Input placeholder="Your Email Address" />
            <Textarea placeholder="Your Message" />
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Contact;
