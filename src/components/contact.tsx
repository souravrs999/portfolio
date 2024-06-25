import ContactForm from "./contact-form";
import Section from "./section";
import SectionHeading from "./section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

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
                  What technologies do you specialize in?
                </AccordionTrigger>
                <AccordionContent>
                  I specialize in HTML, CSS, JavaScript, Typescript, React,
                  NextJS, Node.js, etc. I&apos;m always learning and staying
                  up-to-date with the latest technologies to provide the best
                  solutions for my clients.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>What services do you offer?</AccordionTrigger>
                <AccordionContent>
                  I offer a range of services including web development, mobile
                  app development, software consulting, etc. If you have a
                  project in mind, feel free to reach out and we can discuss how
                  I can help you achieve your goals.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How long does a typical project take?
                </AccordionTrigger>
                <AccordionContent>
                  The timeline for a project can vary greatly depending on its
                  scope and complexity. A small website might take a few weeks,
                  while a more complex application could take several months.
                  After our initial consultation, I can give you a more accurate
                  estimate based on your specific project.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="">
          <h2 className="font-bold text-2xl">
            Feel free to send me a message.
          </h2>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
};
export default Contact;
