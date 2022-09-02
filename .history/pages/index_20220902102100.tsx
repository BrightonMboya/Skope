import React from "react";

export default function Index() {
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center bg-slate-200 font-Montserrat">
      <div className="flex flex-row ">
        <h3>Sign In</h3>
        <button>Sign up with Email and Password</button>
        <button>Continue With Google</button>
        <button>Continue with Apple</button>
      </div>
    </div>
  );
}
