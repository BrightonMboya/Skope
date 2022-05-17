import React from "react";

const ProductCategory = (props) => {
  return (
    <div className="flex justify-center items-center md:overflow-x-scroll">
      <div>
      <div>
        <div className="w-10 h-10 rounded-full bg-white mt-5 flex items-center justify-center ml-[17vh] md:ml-[30vh]">
          <h3 className="absolute mt-2 text-skope-blue font-bold">{props.number}</h3>
        </div>
        <div className="w-60 h-40 mt-7 ml-[10vh] mb-5 md:ml-20 ">
          <img src={props.img} alt="ProductImage"  className="rounded-lg shadow-xl w-full h-full md:object-cover"/>
        </div>
        <div>
        <h3 className="font-light flex justify-center text-center mr-5 ml-5">{props.text} </h3>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductCategory;
