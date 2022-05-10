import React from "react";
import Partners from "../../img/Partners.png";

const OurPartners = () => {
  return (
    <div className="mt-7 flex justify-center items-center">
      <div>
        <h3 className="text-lg font-semibold ml-5">Partners Who Trust Us</h3>
        <img src={Partners} alt="hey mma" />
      </div>
    </div>
  );
};

export default OurPartners;
