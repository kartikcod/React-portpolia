import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="flex text-center justify-center flex-col items-center">
        <p className="text-3xl pt-5 text-cyan-400 font-bold">About Me</p>
        <p className="text-3xl pt-5 text-cyan-100">
          Crafting Seamless Interfaces with Modern Technologies
        </p>
        <p className="text-2xl p-2 text-cyan-100">
          Transforming Ideas into Interactive Digital Experiences
        </p>
        <span className="text-gray-600 w-3/4 block text-center mt-4">
          I am a passionate Frontend Developer with expertise in creating
          responsive and user-friendly web applications using React.js, Tailwind
          CSS, and Material UI. I specialize in crafting seamless interfaces,
          leveraging modern technologies, and collaborating to deliver impactful
          projects that meet user needs and align with business goals.
        </span>
        <a className=" px-5 mt-5 p-3 text-sm font-medium text-center bg-blue-700 text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-blue-500 active:bg-cyan-700"
         href="http:/Contact">Connect Me</a>
       
      </div>
    </div>
  );
};

export default About;
