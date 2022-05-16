import React from "react";
import HeroImages from "./HeroImages";

const HeroSection = () => {
  return (
    <React.Fragment>
      <div className="mt-5 px-5 md:flex flex-row-reverse items-center justify-center gap-[10vh]">
        <div className="mb-[10vh]">
          <h3 className="text-2xl font-medium md:text-4xl">
            Reducing Fashion Waste through <br />
            <span className="text-skope-blue text-5xl font-semibold">
              Recycling.
            </span>
          </h3>
          <h2 className="mt-2 text-2xl font-light">
            Here at Skope, we believe that a good design product shouldn't
            produce waste.
          </h2>
        </div>

        <HeroImages className="" />
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
