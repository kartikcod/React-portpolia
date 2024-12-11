import React from "react";
import Navbar from "./Navbar";
import Swal from "sweetalert2";

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
          <h2 className=" text-white text-3xl">Contact Us</h2>
          <p className="text-slate-400 p-3">
            We're here to help—contact us anytime!
          </p>
        </div>
        <form
          onSubmit={onSubmit}
          className="space-y-5 flex justify-center items-center flex-col p-9"
        >
          <div>
            <label
              forhtml="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@xyz.com"
              required
            />
          </div>
          <div>
            <label
              forhtml="subject"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="subject"
              id="email"
              name="subject"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 max-w-xl text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Your Subject"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              name="message"
              className="block p-2.5 w-96 text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center bg-blue-500 text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
        <span>{result}</span>
      </section>
    </>
  );
};

export default Contact;
