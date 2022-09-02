import React from "react";

export default function Index() {
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center bg-slate-200 font-Montserrat">
      <div className="flex flex-col ">
        <h3>Sign In</h3>
        <button className="bg-[#5568FE] p-2 rounded-xl text-white cursor-pointer">
          Sign up with Email and Password
        </button>
        <button className="bg-green-300 mt-5 p-2 rounded-xl text-white cursor-pointer">
          Continue With Google
        </button>
        <button className="bg-black mt-5 p-2 rounded-xl text-white cursor-pointer">
          Continue with Apple
        </button>
      </div>
    </div>
  );
}
