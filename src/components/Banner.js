import React from "react";

import Image from "../assets/riel1.png";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row items-center">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              CHAIRIEL <span>AZIZI</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-whit mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Automation Tester",
                  2000,
                  "Developer",
                  2000,
                  "Tinkerer",
                  2000,
                  "Software Developer",
                  2000,
                ]}
                speed={150}
                className="text-accent1"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Just living life like everybody else do.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex gap-x-6 items-center mb-12 max-w-max mx-auto lg:mx-0"
            >
              <Link activeClass="active" smooth={true} spy={true} to="contact">
                <button className="btn btn-lg">Hit Me Up</button>
              </Link>
              {/* <a
                href="https://github.com/chairielazizi"
                target="blank"
                className="text-gradient1 btn-link"
              >
                My Portfolio
              </a> */}
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[27px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              {/* social */}
              <a href="https://github.com/chairielazizi" target="blank">
                <FaGithub className="text-5xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/chairielazizi/"
                target="blank"
              >
                <FaLinkedin className="text-5xl" />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[480px]"
          >
            <img src={Image} alt="" className="image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
