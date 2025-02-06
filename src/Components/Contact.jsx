import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "motion/react";
import AnimatedCursor from "react-animated-cursor";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b2b2f059-2237-4f00-979e-be78eb4bd79d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("Congratulation! Successfully Submit");
      event.target.reset();
    }
    // } else {
    //   console.log("Error", data);
    //   setResult(data.message);
    // }
  };
  return (
    <>
      <Navbar />
      <section ClassName="bg-gray-900">
        <div className="text-center ">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className=" text-cyan-400 font-bold text-3xl"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-slate-400 p-3"
          >
            We're here to help—contact us anytime!
          </motion.p>
        </div>
        <form
      onSubmit={onSubmit}
      className="space-y-6 flex flex-col items-center p-6 sm:p-12"
    >
      {/* Email Input */}
      <div className="w-full max-w-md">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-300"
        >
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-2.5 bg-gray-50 text-gray-900 text-sm rounded-lg shadow-sm border border-gray-300 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:border-gray-600"
          placeholder="kartik@xyz.com"
          required
        />
      </div>

      {/* Subject Input */}
      <div className="w-full max-w-md">
        <label
          htmlFor="subject"
          className="block mb-2 text-sm font-medium text-gray-300"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full p-2.5 bg-gray-50 text-gray-900 text-sm rounded-lg shadow-sm border border-gray-300 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:border-gray-600"
          placeholder="Your Subject"
          required
        />
      </div>

      {/* Message Textarea */}
      <div className="w-full max-w-md">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-300"
        >
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="6"
          className="w-full p-2.5 bg-gray-50 text-gray-900 text-sm rounded-lg shadow-sm border border-gray-300 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:border-gray-600"
          placeholder="Leave a comment..."
          required
        ></textarea>
      </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center bg-blue-600 text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </motion.button>
        </form>
        <span>{result}</span>
      </section>
      <AnimatedCursor />
      <Footer />
    </>
  );
};

export default Contact;
