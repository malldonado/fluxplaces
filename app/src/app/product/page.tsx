import React from "react";
import Navbar from "../components/navbar/navbar";
import ProductBanner from "../components/product/productBanner";
// import ProductDescription from "../components/product/productDescription";
import CaseBestSellers from "../components/showcases/caseBestSellers";
import Footer from "../components/footer/footer";

const Product: React.FC = () => {
  return (
    <>
      <Navbar />
      <ProductBanner />
      {/* <ProductDescription /> */}
      {/* <CaseBestSellers /> */}
      <Footer />
    </>
  );
}

export default Product;
