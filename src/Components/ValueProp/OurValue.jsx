import React from "react";
import icon1 from "../../img/icon1.png";
import icon2 from "../../img/icon2.png";
import icon3 from "../../img/icon3.png";
import valueImg from "../../img/valueImg.png";

const OurValue = () => {
  return (
    <div className="mt-9 relative">
      <h3 className="flex items-center justify-center text-2xl font-semibold">
        Our Value Proposition
      </h3>
      <div className="absolute lg:ml-[30vh]">
        <img src={valueImg} alt="valueImg" className="object-cover mt-[15vh]" />
      </div>

      <div className="bg-white rounded-[5vh] w-[35vh] ml-[8vh] mt-10 shadow-2xl md:flex w-[65vh] lg:w-[90vh] ml-[40vh]">
          <div className="ml-8 py-[5vh] mr-5 text-black">
            <img src={icon1} alt="icon1" className="ml-[10vh]" />
            <p className="mt-5 text-center mr-4">
              As a fashion product manufacturer, you make your products but they
              end up on a landfill after usage after some time. Let's say the
              cloth get stain or it outgrows the consumer.
            </p>
         

            <p className="mt-5 text-center mr-4">
              The consumer can return the item back to you where you will be
              able to use it as a raw material to the next product.
            </p>
            <p className="mt-5 text-center mr-4">
              And as a consumer, you can get a discount on your next purchase of
              the product.
            </p>
          </div>

          <div className="ml-8 py-[5vh] mr-5 text-black">
          <img src={icon2} alt="icon3" className="ml-[10vh]" />
          <p className="mt-5 text-center mr-4">
            We provide value to both the business owner and the consumer.
          </p>
       
          <p>
            For the business owner, you can easily verify that your consumers
            can receive the exact product you manufactured and not a replica,
            also you get the recycled material of your old product which you can
            then use on your next product.
          </p>

          <img src={icon3} alt="just an icon" className="ml-[10vh] mt-[10vh]" />
          <p className="mt-5 text-center mr-4">
            On a business owner, you can easily verify that your consumers get
            the exact product you made and not a replica made by another
            business.
          </p>
          </div>
        
      </div>
    </div>
  );
};

export default OurValue;
