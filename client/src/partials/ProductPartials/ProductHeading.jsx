import React from "react";
import { Link } from "react-router-dom";
import "../../css/Product.css";

function ProductHeading() {
  return (
    <div className="Product_Heading">
      <div className="Product_Heading_content">
        <h2>Ürünlerimiz</h2>
        <p>
          <Link to="/">Home</Link>/ Product
        </p>
      </div>
    </div>
  );
}

export default ProductHeading;
