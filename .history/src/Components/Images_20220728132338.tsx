import React from "react";
import Image from "next/image";

const Images = () => {
  return (
    <div>
      <div className="flex justify-center relative items-start gap-[2rem]">
        <div className="w-[180px] h-[180px] border-red-500 border-1 relative">
          <Image
            alt=""
            layout="responsive"
            src="/img1.jpg"
            width={80}
            height={80}
            style={{
              boxShadow: "rgba(0,0,0,0.3) 0px 2px 10px",
              borderRadius: "50%"
            }}
          />
        </div>
        <div className="w-[100px] h-[100px]">
          <Image
            alt=""
            layout="responsive"
            src="/img2.jpg"
            width={50}
            height={50}
            style={{
              boxShadow: "rgba(0,0,0,0.3) 0px 1px 10px",
              borderRadius: "50%"
            }}
          />
        </div>
      </div>

      <div className="w-[150px] h-[150px] inline-block ml-[250px] -mt-[60px]">
        <Image
          alt=""
          layout="responsive"
          src="/img3.jpg"
          width={50}
          height={50}
          style={{
            boxShadow: "rgba(0,0,0,0.3) 0px 2px 10px",
            borderRadius: "50%"
          }}
        />
      </div>
    </div>
  );
};

export default Images;
