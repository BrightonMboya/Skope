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

      <MoreInfoCard
        number={2}
        imageSrc="/img5.png"
        desc="Customers can then send QR code to verify the item after buying and can return it back to the seller for recycling "
      />

      <MoreInfoCard
        number={3}
        imageSrc="/img6.png"
        desc="The returned clothes can be recycled for the next products"
      />
    </div>
  );
};

export default MoreInfo;
