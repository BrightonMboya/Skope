import React from "react";

const ProductCategory = (props) => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <div className="w-10 h-10 rounded-full bg-black relative mt-5 ml-[20vh]">
          <h3 className="absolute text-white mt-2 ml-4">{props.number}</h3>
        </div>
        <div>
          <img src={props.img} alt=""  className="md:w-70 h-70 "/>
          <h3 className="font-light text-center mr-5 ml-5 md: text-lg ">{props.text} </h3>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
