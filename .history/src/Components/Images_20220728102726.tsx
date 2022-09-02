import React from "react";
import Image from "next/image";

const Images = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[100px] h-[100px]">
        <Image
          alt=""
          layout="responsive"
          src="/img1.jpg"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default Images;
