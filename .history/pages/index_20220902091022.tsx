import React from "react";
import Image from "next/image";
import {
  NavBar,
  HeroSection,
  Images,
  MoreInfo,
  ValueProposition,
  Partners,
  BookDemo
} from "../src/Components/index";
import { Styles } from "../styles/Home.modules.css";

export default function Home() {
  return (
    <div className="ml-[2rem] font-Monsterrat">
      {/* <Image src="/bg.png" layout="fill" alt="" className="object-cover" /> */}
      <NavBar />
      <HeroSection />
      <Images />
      <MoreInfo />
      <ValueProposition />
      <Partners />
      <BookDemo />
    </div>
  );
}
