import Carousel from "../partials/HomePartials/Carousel";
import CardAbout from "../partials/HomePartials/CardAbout";

import React, { useEffect, useState } from "react";
import HomeProduct from "../partials/HomePartials/HomeProduct";
import BestProduct from "../partials/HomePartials/BestProduct";
import Footer from "./Footer";
import Firm from "../partials/HomePartials/Firm";
import HomeContact from "../partials/HomePartials/HomeContact";
import HomeCategory from "../partials/HomePartials/HomeCategory";

function Home() {
  const [homeproduct, setHomeroduct] = useState([]);
  const [homeCarousel, setHomeCarousel] = useState([]);

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

  useEffect(() => {
    const getCarousel = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_APP_SERVER_URL}/api/carousel/get-carousel-all`
        );
        const data = await res.json();
        setHomeCarousel(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCarousel();
  }, []);

  return (
    <div>
      <Carousel homeCarousel={homeCarousel} setHomeCarousel={setHomeCarousel} />
      {/* <CardAbout /> */}
      <HomeProduct homeproduct={homeproduct} />
      <Firm />
      <HomeCategory />
      <BestProduct homeproduct={homeproduct} />
      <HomeContact />
      <Footer />
    </div>
  );
}

export default Home;
