import React from "react";
import image from "e:/React project/kartik/src/Assets/Image.png";
import Footer from "./Footer";


const Hero = () => {
  return (
    <>
    <div className="flex flex-col-reverse sm:flex-row items-center justify-center -mt-96 p-4 sm:p-10">
      {/* Text Section */}
      <div className="text-center sm:text-left sm:w-1/2  ml-10 font-3xl sm:mb-0 mt-96">
        <p className="text-cyan-50 sm:text-3xl  -tracking-wider">
          <span className="text-4xl sm:text-6xl font-semibold tracking-wide text-cyan-400 leading-5">
          
        Hello,<img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif" alt="👋" width="32" height="32"/> I'm Kartik
          </span>
          <br />
          And I am a <span className="hover:underline hover:text-cyan-400 transition-all ease-in-out">Frontend Developer</span>
        </p>
        <p className="text-white mt-7 text-xl italic tracking-wider font-sans">
          Frontend developer skilled in <span className="hover:bg-cyan-400 hover:text-black hover:rounded transition-all ease-in-out hover:font-bold">React, Tailwind CSS, and Material UI </span>
          creating responsive and visually appealing web interfaces. Passionate
          about delivering high-quality, engaging user experiences.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-1/2 bg-transparent ">
        <img
          src={image}
          alt="Profile"
          className=" bg-transparent sm:mt-44  h-auto sm:w-full rounded-full"
        />
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Hero;
