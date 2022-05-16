import React from "react";
import BookDemo from "./Components/BookDemo/BookDemo";
import Footer from "./Components/BookDemo/Footer";
import HeroSection from "./Components/NavBar/HeroSection";
import NavBar from "./Components/NavBar/NavBar";
import ProductCatalog from "./Components/ProductInfo/ProductCatalog";
import OurPartners from "./Components/ValueProp/OurPartners";
import OurValue from "./Components/ValueProp/OurValue";

// style={{backgroundImage: `url(${bg})`}}

export default function App() {
  return (
    <div className="bg-gradient-to-b from-gradient-1 to-gradient-2 " >
      <NavBar />
      <HeroSection />
      <ProductCatalog/>
      <OurValue/>
      <OurPartners/>
      <BookDemo/>
      <Footer/>
    </div>
  );
}
