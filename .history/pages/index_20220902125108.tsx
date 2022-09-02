import React from "react";
import { useRouter } from "next/router";
import { NavBar } from "../src/Components";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Index() {
  const router = useRouter();
  const { data: session } = useSession();
  if (session) {
    router.push("/home");
  }
  const handleSignIn = (e: any) => {
    e.preventDefault();
    signIn();
  };
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center bg-slate-200 font-Montserrat">
      <div className="absolute top-0">
        <h3 className="text-2xl font-semibold mt-5">
          <span className="text-[#5568FE] ">Sk</span>ope
        </h3>
      </div>
      <div className="flex flex-col ">
        <h3 className="text-center">Sign In</h3>
        <button className="bg-green-300 mt-5 p-2 rounded-xl text-white cursor-pointer">
          Sign up with Email and Password
        </button>
        <button
          className="bg-[#5568FE] mt-5 p-2 rounded-xl text-white cursor-pointer"
          onClick={handleSignIn}
        >
          Continue With Google
        </button>
        <button className="bg-black mt-5 p-2 rounded-xl text-white cursor-pointer">
          Continue with Apple
        </button>
      </div>
    </div>
  );
}
