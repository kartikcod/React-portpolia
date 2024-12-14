import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className="flex items-center justify-center static p-5">
      <div className="text-center bg-transparent w-96 flex items-center border bg-red justify-center p-5 rounded-lg">
        <div className="flex items-center content-center gap-5  bg-transparent text-cyan-100 ">
          <Link to="/Home" className="bg-transparent text-lg font-xl hover:animate-pulse" >Home</Link>
          <Link to="/Skill" className="bg-transparent text-lg font-xl hover:animate-pulse">Skill</Link>
          <Link to="/About" className="bg-transparenttext-lg  font-xl hover:animate-pulse">About</Link>
          <Link to="/Contact" className="bg-transparent text-lg font-xl hover:animate-pulse ">Contact Us</Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
