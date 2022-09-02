import React from "react";
import MoreInfoCard from "./MoreInfoCard";

const MoreInfo = () => {
  return (
    <div className="flex items-center justify-center">
      <h3 className="text-[25px]">More Info</h3>
      <MoreInfoCard number={1} />
    </div>
  );
};

export default MoreInfo;
