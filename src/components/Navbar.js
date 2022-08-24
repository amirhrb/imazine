import React from "react";
import { Link } from "react-router-dom";
//img
import logo from "../sources/images/logo.PNG";

const Navbar = () => {
  return (
    <div className="min-h-[4rem] w-full flex justify-center bg-primary text-primary-content fixed top-0 z-30">
      <div className="h-full max-w-3xl w-full p-2 grid grid-cols-3 items-center justify-items-center ">
        <img
          src={logo}
          alt="logo imazine"
          className="h-12 justify-self-start"
        />
        <Link
          to="/"
          className="w-32 btn btn-ghost normal-case text-3xl leading-3 font-[Aquire]"
        >
          Amozine
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
