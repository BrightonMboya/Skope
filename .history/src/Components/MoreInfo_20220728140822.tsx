import React from "react";
import MoreInfoCard from "./MoreInfoCard";

const MoreInfo = () => {
  return (
    <div className="text-center  mt-[3rem]">
      <h3 className="text-[25px]">More Info</h3>
      <MoreInfoCard number={1} imageSrc="/img4.png" />
    </div>
  );
};

export default MoreInfo;
