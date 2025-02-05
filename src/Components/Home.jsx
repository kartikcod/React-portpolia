import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Hero from "./Hero";
import Skill from "./Skill";
import Footer from "./Footer";
import AnimatedCursor from "react-animated-cursor";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AnimatedCursor
        innerSize={20}
        outerSize={10}
        color='130, 110, 101'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={10}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
    </div>
  );
};

export default Home;
