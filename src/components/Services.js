import React from "react";

import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Automation Testing",
    description:
      "Write automation scripts following your requirements and user story. Tools used are inluding Java, Selenium, Cucumber and Eclispe",
    link: "Learn More",
  },
  {
    name: "Manual Testing",
    description:
      "Come out with the test conditions and test coverage from the user requirements. From there, we can proceed to write the test cases and run the tests.",
    link: "Learn More",
  },
  {
    name: "Functional Testing",
    description: "Non-functional tests can also be created and tested.",
    link: "Learn More",
  },
  {
    name: "Development",
    description: "Sometimes still do development projects in my free time.",
    link: "Learn More",
  },
  {
    name: "Photo Editing",
    description:
      "I'm a photographer too, and love editing using Lightroom and Snapseed. My main gear is a mirrorless camera Canon R50",
    link: "Learn More",
  },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text and image  */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent1 mb-6">What I Do...</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Software Test Engineer with experience about 1 year plus.
            </h3>
            <a href="https://github.com/chairielazizi" target="blank">
              <button className="btn btn-sm">See My Work</button>
            </a>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      {/* <a href="#" className="text-gradient1 text-sm">
                        {link}
                      </a> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
