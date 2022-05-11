import React from "react";
import Partners from "../../img/Partners.png";

const OurPartners = () => {
  return (
    <div className="mt-7 flex justify-center items-center">
      <div>
        <h3 className="text-lg font-semibold ml-5 md:text-2xl">
          Partners Who Trust Us
        </h3>
        <img src={Partners} alt="hey mma" className="md:h-full w-full" />
      </div>
    </div>
  );
};

export default OurPartners;
