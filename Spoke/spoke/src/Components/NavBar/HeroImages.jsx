import React from "react";
import img1 from '../../img/img1.jpg'
import img2 from '../../img/img2.jpg'
import img3 from '../../img/img3.jpg'

const HeroImages = () => {
  return <div className= 'mt-9'>
      <div className=" grid grid-cols-2 md:flex justify-center relative items-stretch">
          <img src={img1} alt="" className="w-40 h-40 rounded-full shadow-2xl md:w-60 h-60"/>
          <img src={img2} alt="" className="w-20 h-20 rounded-full shadow-2xl md:w-30" />
      </div>
      {/* <div className="ml-[40vh] hidden">
          <img src={img3} alt="img3" className="w-20 h-20 rounded-full shadow-2xl" />
      </div> */}
  </div>;
};

export default HeroImages;
