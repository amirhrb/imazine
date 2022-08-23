import React from "react";
import { Outlet } from "react-router-dom";

//css
import "./HexaContainer.css";

const HexaContainer = () => {
  return (
    <div
      className="w-full h-[100vh] flex flex-col items-center justify-center sticky z-30 top-0 bg-gradient-to-t from-primary-focus to-neutral"
      dir="ltr"
    >
      <Outlet />
    </div>
  );
};

export default HexaContainer;
