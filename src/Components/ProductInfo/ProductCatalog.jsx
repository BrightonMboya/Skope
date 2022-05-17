import React from "react";
import ProductCategory from "./ProductCategory";
import img4 from "../../img/img4.png";
import img5 from "../../img/img5.png";
import img6 from "../../img/img6.png";

const ProductCatalog = () => {
  return (
    <div className="mt-20">
      <h3 className="flex items-center justify-center font-semibold text-xl">How it Works</h3>
      <div className="md:flex items-center justify-center">
        <ProductCategory
          number={1}
          img={img4}
          text="Get a generated QR codes that will be attached in the clothing tags."
        />
        <ProductCategory
          number={2}
          img={img5}
          text="Customers can then Scan the code to verify the item after buying and can return it back to the seller for recycling."
        />
        <ProductCategory
          number={3}
          img={img6}
          text="The returned clothes can be recycled for the next products."
        />
      </div>
    </div>
  );
};

export default ProductCatalog;
