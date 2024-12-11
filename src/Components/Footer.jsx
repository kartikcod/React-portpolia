import React from "react";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className=" rounded text-black text-center pl-4" >
        <span className="bg-lime-200 rounded w-2"><FaLinkedin/>122</span>
        <span className="bg-lime-500">2</span>
        <span className="bg-lime-500">3</span>
        <span className="bg-lime-500">4</span>
      </div>
    </>
  );
};

export default Footer;
