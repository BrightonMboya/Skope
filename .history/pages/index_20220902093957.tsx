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
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div className="relative">
      <div className="font-Monsterrat relative h-[100vh]">
        <div className="ml-[2rem] relative">
          <NavBar />
          <HeroSection />
          <Images />
          <MoreInfo />
          <ValueProposition />
          <Partners />
          <BookDemo />
        </div>
      </div>
    </div>
  );
}
