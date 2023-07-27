import { React, useState, useEffect } from "react";
import ProductHeading from "../partials/ProductPartials/ProductHeading";
import "../css/Product.css";
import ProductContent from "../partials/ProductPartials/ProductContent";
import Footer from "../components/Footer";

function Product() {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState([]);
  const [total, setTotal] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch(
          `${
            import.meta.env.VITE_APP_SERVER_URL
          }/api/categories/get-category-all`
        );
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_APP_SERVER_URL}/api/products/get-product-all`
        );
        const data = await res.json();
        setProduct(data);
        setTotal(data.length);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="Product_main">
      <ProductHeading />
      <ProductContent categories={categories} product={product} total={total} />
      <Footer />
    </div>
  );
}

export default Product;
