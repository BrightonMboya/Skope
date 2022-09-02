import React, { useState } from "react";
import { FaBars, FaGoogle } from "react-icons/fa";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="mt-[2rem] flex items-center justify-between max-w-[200px] ">
      <div className="" onClick={() => setShowNav(!showNav)}>
        <FaBars className="w-7 h-7 md:hidden" fill="5568FE" />
      </div>
      {showNav && (
        <div className="w-[200px] h-[200px] bg-white absolute left-0 top-8 rounded-md shadow-md border-[1px] border-slate-300">
          <ul className="flex flex-col items-center gap-3 justify-center">
            <li className="mt-5">About Us</li>
            <li className="flex items-center gap-3">
              <span>
                <FaGoogle />
              </span>
              Sign Up
            </li>
            <li>Book a Demo </li>
          </ul>
        </div>
      )}

      <h3 className="text-2xl font-semibold">
        <span className="text-[#5568FE] ">Sk</span>ope
      </h3>
    </div>
  );
};

export default NavBar;
