import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="mt-[2rem] flex items-center justify-between max-w-[200px] ">
      <div className="">
        <FaBars className="w-7 h-7 md:hidden" fill="5568FE" />
      </div>

      <h3 className="text-2xl font-semibold">
        <span className="text-[#5568FE] ">Sk</span>ope
      </h3>
    </div>
  );
};

export default NavBar;
