import React from "react";
import HeroImages from "./HeroImages";


const HeroSection = () => {
  return (
    <React.Fragment>
      <div className="mt-5 px-5">
        <h3 className="text-xl font-medium">
          Reducing Fashion Waste through <br />
          <span className="text-skope-blue text-4xl font-semibold">
            Recycling.
          </span>
        </h3>
        <h2 className="mt-2 text-xl font-light">
          Here at Skope, we believe that a good design product shouldn't produce
          waste.
        </h2>
      </div>
      <HeroImages/>
    </React.Fragment>
  );
};

export default HeroSection;
