import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  const [state, handleSubmit] = useForm("xovjegay");

  if (state.succeeded) {
    return <p>Thanks for contacting!</p>;
  }

  return (
    <section id="contact" className="py-16 lg:section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl text-accent1 uppercase font-medium mb-2 tracking-wide">
                Let's Work Together
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-2">
                Get In <br /> Touch!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              name="name"
              className="bg-transparent border-b py-0 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              className="bg-transparent border-b py-0 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              className="bg-transparent border-b py-0 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="btn btn-lg"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
