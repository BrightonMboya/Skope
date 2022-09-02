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

export default function Home() {
  return (
    <div className="ml-[2rem] font-Monsterrat relative">
      <Image src="/bg.png" layout="fill" alt="" className="object-cover" />
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
