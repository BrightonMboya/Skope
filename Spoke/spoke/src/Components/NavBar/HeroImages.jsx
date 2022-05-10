import React from "react";
import img1 from '../../img/img1.jpg'
import img2 from '../../img/img2.jpg'

const HeroImages = () => {
  return <div className= 'mt-9'>
      <div className="flex justify-center relative">
          <img src={img1} alt="" className="w-40 h-40 rounded-full shadow-2xl"/>
          <img src={img2} alt="" className="w-20 h-20 rounded-full shadow-2xl" />
      </div>
      {/* <div className="block">
          <img src={img2} alt="img3" className="w-15 h-15 rounded-full shadow-2xl" />
      </div> */}
  </div>;
};

export default HeroImages;
