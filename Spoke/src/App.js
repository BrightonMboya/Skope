import React from "react";
import BookDemo from "./Components/BookDemo/BookDemo";
import Footer from "./Components/BookDemo/Footer";
import HeroSection from "./Components/NavBar/HeroSection";
import NavBar from "./Components/NavBar/NavBar";
import ProductCatalog from "./Components/ProductInfo/ProductCatalog";
import OurPartners from "./Components/ValueProp/OurPartners";

export default function App() {
  return (
    <React.Fragment>
      <NavBar />
      <HeroSection />
      <ProductCatalog/>
      <OurPartners/>
      <BookDemo/>
      <Footer/>
    </React.Fragment>
  );
}
