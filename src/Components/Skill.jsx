import React from "react";
import Navbar from "./Navbar";
import { motion } from "motion/react"
import Footer from "./Footer";

const Skill = () => {
  const skill = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Bootstrap",
    "Material UI",
    "Canva",
    "Pixellab",
  ];
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };
  return (
    <>
      <Navbar />
      <div className=" py-12">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold text-cyan-400 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Here are some of the technologies and tools I use to build amazing projects.
        </motion.p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skill.map((skill, index) => (
            <motion.div
              key={index}
              className=" border shadow-md hover:shadow-lg transition duration-300 p-4 rounded-md"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-cyan-500 font-medium">{skill}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Skill;
