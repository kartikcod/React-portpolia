import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className="flex items-center justify-center   p-5">
      <div className="text-center bg-white w-96 flex items-center bg-red justify-center p-5 rounded-lg">
        <div className="flex items-center content-center gap-5  bg-white text-black">
          <Link to="/Home" className="bg-white text-lg font-medium hover:animate-pulse" >Home</Link>
          <Link to="/Skill" className="bg-white text-lg font-medium hover:animate-pulse">Skill</Link>
          <Link to="/About" className="bg-white text-lg font-medium hover:animate-pulse">About</Link>
          <Link to="/Contact" className="bg-white text-lg font-medium hover:animate-pulse">Contact Us</Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
