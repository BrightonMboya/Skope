import React from "react";
import Partners from "../../img/Partners.png";

const OurPartners = () => {
  return (
    <div className="mt-7 flex justify-center items-center">
      <div>
        <h3 className="text-lg font-semibold ml-5 md:text-2xl mt-[8vh]">
          Partners Who Trust Us
        </h3>
        <div className="md:w-70 h-40">
          <img src={Partners} alt="hey mma" className="md:h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
