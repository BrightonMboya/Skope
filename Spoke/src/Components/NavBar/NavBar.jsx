import React from "react";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex mt-9 py-4 px-5 ">
        <FaBars className="flex-initial w-7 h-7 fill-skope-blue md:hidden" />
        <h3 className="text-skope-blue font-semibold text-2xl  flex-initial px-4">
          Sk<span className="font-semibold text-black">ope</span>
        </h3>
        </div>

        <div className="hidden md:flex mr-7 text-lg gap-6 grid-cols-3 mt-8">
        
            <button className="shadow-2xl px-5 py-1 bg-btn-color text-white rounded-3xl">About</button>

            <button>Contact Us</button>

            <button>Request a Demo</button>
          
        </div>
      
    </div>
  );
};

export default NavBar;
