import React from "react";
import Image from "next/image";

const Images = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[180px] h-[180px] border-red-500 border-1 relative">
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
      <div className="w-[100px] h-[100px] ml-3">
        <Image
          alt=""
          layout="responsive"
          src="/img2.jpg"
          width={50}
          height={50}
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
