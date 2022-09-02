import React from "react";
import Image from "next/image";

const Images = () => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <Image alt="" layout="fill" src="/img1.jpg" />
      </div>
    </div>
  );
};

export default Images;
