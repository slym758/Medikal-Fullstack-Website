import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "../../App.css";

import image_1 from "../../assets/banner.png";

function slider({ homeCarousel, setHomeCarousel }) {
  return (
    <div className="slider">
      <Carousel className="">
        {homeCarousel.map((item) => (
          <Carousel.Item key={item._id}>
            <img
              className="d-block w-100 "
              src={item.title}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default slider;
