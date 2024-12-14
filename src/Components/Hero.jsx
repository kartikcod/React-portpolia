import React from "react";
import image from "e:/React project/kartik/src/Assets/Image.png";
import Footer from "./Footer";
import { motion } from "motion/react";




const Hero = () => {
  return (
    <>
    <div className="flex flex-col-reverse sm:flex-row items-center justify-center -mt-96 p-4 sm:p-10">
      {/* Text Section */}
      <motion.div
        className="text-center sm:text-left sm:w-1/2 ml-10 font-3xl sm:mb-0 mt-96"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-cyan-50 sm:text-3xl -tracking-wider">
          <span className="text-4xl sm:text-6xl font-semibold tracking-wide text-cyan-400 leading-5">
            Hello, <br /> I'm Kartik
          </span>
          <br />
          And I am a <span className="hover:underline hover:text-cyan-400 transition-all ease-in-out">
            <Typed
           strings= {["Frontend Developer", "Thumbnail Designer"]}
           typeSpeed={50}
           backSpeed={30}
           loop
            />
            </span>
        </p>
        <p className="text-white mt-7 text-xl italic tracking-wider font-sans">
          Frontend developer skilled in <span className="hover:bg-cyan-400 hover:text-black hover:rounded hover:transition-all hover:ease-in-out hover:font-bold">React, Tailwind CSS, and Material UI </span>
          creating responsive and visually appealing web interfaces. Passionate
          about delivering high-quality, engaging user experiences.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-1/2 bg-transparent"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={image}
          alt="Profile"
          className="bg-transparent sm:mt-44 h-auto sm:w-full rounded-full"
        />
      </motion.div>
    </div>
    <Footer/>
    </>
  );
};

export default Hero;
