import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "motion/react";
import AnimatedCursor from "react-animated-cursor";

const About = () => {
  const ScrollAnimation = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };
  return (
    <>
      <div>
        <Navbar />
        <div className="flex text-center justify-center flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-3xl pt-5 text-cyan-400 font-bold"
          >
            About Me
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl pt-5 text-cyan-100"
          >
            Crafting Seamless Interfaces with Modern Technologies
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl p-2 text-cyan-100"
          >
            Transforming Ideas into Interactive Digital Experiences
          </motion.p>
          <div className="blur-3xl bg-cyan-400 w-52 left-72 absolute h-52 opacity-30"></div>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            className="text-gray-600 w-3/4 block text-center mt-4"
          >
            I am a passionate Frontend Developer with expertise in creating
            responsive and user-friendly web applications using React.js,
            Tailwind CSS, and Material UI. I specialize in crafting seamless
            interfaces, leveraging modern technologies, and collaborating to
            deliver impactful projects that meet user needs and align with
            business goals.
          </motion.span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10"
          >
            <a
              className=" p-3 text-sm font-medium text-center bg-blue-700 text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-blue-500 active:bg-cyan-700"
              href="http:/Contact"
            >
              Connect Me
            </a>
          </motion.button>
        </div>
        <Footer />
        <AnimatedCursor />
      </div>
    </>
  );
};

export default About;
