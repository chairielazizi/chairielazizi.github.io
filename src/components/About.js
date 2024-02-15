import React from "react";

//countup
import CountUp from "react-countup";

//intersection observer hook
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about1 bg-contain bg-no-repeat h-[440px] mix-blend-lighten bg-top sm:hidden"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent1">About me...</h2>
            <h3 className="h3 mb-4">
              I'm a Software Test Engineer with experience about 1 year plus.
            </h3>
            <p className="mb-6">
              Just living life like everybody else do. Love networking, play
              with raspberry pi and docker, and of course test any applications
              or website as that what I usually do. Sometimes code.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-secondary text-gradient1 mb-2">
                  {inView ? <CountUp start={0} end={1} duration={1} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-secondary text-gradient1 mb-2">
                  {inView ? <CountUp start={0} end={5} duration={2} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-secondary text-gradient1 mb-2">
                  {inView ? <CountUp start={0} end={30} duration={3} /> : null}
                  {""}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Websites/Apps <br />
                  Tested
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center drop-shadow-[100px]">
              <button className="btn btn-lg">Contact Me</button>
              <a href="#" className="text-gradient1 btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
