import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../App.css";

import logo from "../../assets/wingmed.webp";
import vizor from "../../assets/vizor.png";
import coloplast from "../../assets/coloplast.webp";
import eruslu from "../../assets/eruslu.png";
import convatec from "../../assets/convatec.webp";
import demersan from "../../assets/demersan.png";
import respirox from "../../assets/respirox.png";

function Firm() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="firm">
      <div className="title">
        <h2 className="title_content">Çalıştığımız Firmalar</h2>
        <div className="title_information">
          <p>Sağlık alanında çalıştığımız firmalar.</p>
        </div>
      </div>

      <Carousel
        responsive={responsive}
        className="firm_carousel"
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        partialVisible
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        <div className="firm_img">
          <img className="wingmed" src={logo} />
        </div>

        <div className="firm_img">
          <img src={vizor} />
        </div>

        <div className="firm_img">
          <img src={coloplast} />
        </div>

        <div className="firm_img">
          <img src={eruslu} />
        </div>

        <div className="firm_img">
          <img src={convatec} />
        </div>

        <div className="firm_img">
          <img src={demersan} />
        </div>

        <div className="firm_img">
          <img src={respirox} />
        </div>
      </Carousel>
    </div>
  );
}

export default Firm;
