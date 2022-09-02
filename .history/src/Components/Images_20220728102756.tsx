import React from "react";
import Image from "next/image";

const Images = () => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <Image
          alt=""
          layout="responsive"
          src="/img1.jpg"
          width={80}
          height={80}
        />
      </div>
    </div>
  );
};

export default Images;
