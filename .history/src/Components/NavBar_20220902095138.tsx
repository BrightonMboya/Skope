import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="mt-[2rem] flex items-center justify-between max-w-[200px] ">
      <div className="" onClick={() => setShowNav(!showNav)}>
        <FaBars className="w-7 h-7 md:hidden" fill="5568FE" />
      </div>
      {showNav && (
        <div className="w-[200px] h-[200px] bg-white absolute left-0 top-0 rounded-md shadow-md"></div>
      )}

      <h3 className="text-2xl font-semibold">
        <span className="text-[#5568FE] ">Sk</span>ope
      </h3>
    </div>
  );
};

export default NavBar;
