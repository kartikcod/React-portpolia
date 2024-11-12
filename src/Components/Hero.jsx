import React from "react";
import image from "e:/React project/kartik/src/Assets/Image.png";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-center p-4 -mt-96 sm:p-10 ">
      {/* Text Section */}
      <div className="text-center sm:text-left sm:w-1/2 ml-10 font-3xl sm:mb-0 mt-96">
        <p className="text-cyan-50 sm:text-3xl -tracking-wider">
          <span className="text-4xl sm:text-6xl font-semibold tracking-wide text-cyan-400 leading-5">
            Hello &#128075, I'm Kartik
          </span>
          <br />
          And I am a Web Developer
        </p>
        <p className="text-white mt-7 text-xl italic tracking-wider font-sans">
          Frontend developer skilled in React, Tailwind CSS, and Material UI,
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
  );
};

export default Hero;
