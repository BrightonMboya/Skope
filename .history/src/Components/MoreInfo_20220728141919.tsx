import React from "react";
import MoreInfoCard from "./MoreInfoCard";

const MoreInfo = () => {
  return (
    <div className="text-center  mt-[3rem]">
      <h3 className="text-[25px]">More Info</h3>
      <MoreInfoCard
        number={1}
        imageSrc="/img4.png"
        desc="Get a generated QR code that will be attached in the clothing tags"
      />
    </div>
  );
};

export default MoreInfo;
