import React from "react";
import image from "e:/React project/kartik/src/Assets/Image.png";
import Footer from "./Footer";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
import AnimatedCursor from "react-animated-cursor";
const Hero = () => {
  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row items-center justify-center sm:-mt-40 p-6 sm:p-12 gap-10">
        {/* Text Section */}
        <div className="blur-3xl bg-cyan-400 w-52 left-44 animate-pulse absolute h-52 opacity-40"></div>
        <motion.div
          className="text-center sm:text-left sm:w-1/2 font-3xl mt-10 sm:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-50 text-xl sm:text-3xl tracking-wide pt-44">
            <span className="text-4xl sm:text-5xl font-semibold tracking-wide text-cyan-400 leading-tight">
              Hello, <br /> I'm Kartik
            </span>
            <br />
            And I'm
            <span className="hover:underline hover:#000000 transition-all ease-in-out">
              <Typewriter
                words={[" Frontend Developer", " Thumbnail Designer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
          <p className="text-white mt-6 text-base sm:text-lg italic tracking-wide font-sans">
            Frontend developer skilled in React,Tailwind CSS, and Material UI ,
            creating responsive and visually appealing web interfaces.
            Passionate about delivering high-quality, engaging user experiences.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full sm:w-1/2 flex justify-center sm:justify-end bg-transparent mix-blend-screen"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={image}
            alt="Profile"
            className="h-1/2 w-auto sm:h-1/3 sm:w-auto rounded-full object-cover shadow-lg"
          />
        </motion.div>
      </div>
    

      <Footer />
      <AnimatedCursor/>
    </>
  );
};

export default Hero;
