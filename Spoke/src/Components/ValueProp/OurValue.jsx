import React from "react";
import icon1 from "../../img/icon1.png";
import icon2 from "../../img/icon2.png";
import icon3 from "../../img/icon3.png";

const OurValue = () => {
  return (
    <div>
      <div className="bg-skope-blue rounded-full h-[130vh] w-[40vh] shadow-xl ml-5 mt-8  absolute flex items-stretch">
        <div className="ml-8 text-white py-[10vh]">
          <img src={icon1} alt="icon1" className="px-[13vh]" />
          <p className="mt-5 text-center mr-4">
            As a fashion product manufacturer, you make your products but they
            end up on a landfill after usage after some time. Let's say the
            cloth get stain or it outgrows the consumer.
          </p>
          <br />
          <p className="mt-5 text-center mr-4">
            The consumer can return the item back to you where you will be able
            to use it as a raw material to the next product.
          </p>
          <br />
          <p className="mt-5 text-center mr-4">
            And as a consumer, you can get a discount on your next purchase of
            the product.
          </p>

          <img src={icon2} alt="icon3" className="px-[13vh] mt-[10vh]" />
          <p className="mt-5 text-center mr-4">
            We provide value to both the business owner and the consumer.
          </p>
          <br />
          <p>
            For the business owner, you can easily verify that your consumers
            can receive the exact product you manufactured and not a replica,
            also you get the recycled material of your old product which you can
            then use on your next product.
          </p>

          <img src={icon3} alt="just an icon" className="px-[13vh] mt-[10vh]" />
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
