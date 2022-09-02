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
import image from "../public/bg.png";
export default function Home() {
  return (
    <div className="font-Monsterrat bg-[url('../public/bg.png')] object-cover bg-repeat-round  ">
      <div className="ml-[2rem]">
        <NavBar />
        <HeroSection />
        <Images />
        <MoreInfo />
        <ValueProposition />
        <Partners />
        <BookDemo />
      </div>
    </div>
  );
}
