import React from "react";
import Image from "next/image";

const Images = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[200px] h-[200px]">
        <Image
          alt=""
          layout="responsive"
          src="/img1.jpg"
          width={80}
          height={80}
          style={{
            boxShadow: "rgba(0,0,0,0.3) 0px 2px 20px",
            borderRadius: "50%"
          }}
        />
      </div>
    </div>
  );
};

export default Images;
