import React, { useEffect, useState } from "react";
import DetailContent from "../partials/DetailPartials/DetailContent";
import DetailHeading from "../partials/DetailPartials/DetailHeading";

import Footer from "./Footer";
import Navbar from "./Navbar";

function ProductDetails() {
  const [homeproduct, setHomeroduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_APP_SERVER_URL}/api/products/get-product-all`
        );
        const data = await res.json();
        setHomeroduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="Product_main">
      <Navbar />
      <DetailHeading />
      <DetailContent homeproduct={homeproduct} />
      <Footer />
    </div>
  );
}

export default ProductDetails;
