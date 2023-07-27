import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../App.css";
import "../../css/BestProduct.css";

function BestProduct({ homeproduct }) {
  const [categoryTitle, setCategoryTitle] = useState("Çok Satan");
  const [homefiltered, setHomefiltered] = useState([]);

  useEffect(() => {
    if (categoryTitle === "Çok Satan") {
      setHomefiltered(
        homeproduct.filter((item) => item.category2 === categoryTitle)
      );
    }
  }, [homeproduct, setHomefiltered, categoryTitle]);

  return (
    <div className="Best_Product">
      <div className="title">
        <h2 className="title_content">Çok Satan Ürünlerimiz</h2>
        <div className="title_information">
          <p>Sağlık alanında çok satan ürünlerimiz.</p>
        </div>
      </div>

      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={true}
        rewindWithAnimation={true}
        rtl={true}
        shouldResetAutoplay
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {homefiltered.map((item) => (
          <div key={item._id}>
            <div className="Product_best_wrapper">
              <div className="Product_best_Image">
                <img src={item.img} alt="" />
              </div>
              <hr />
              <div className="Product_best_content">
                <div className="PBcontent">
                  <div className="PBcatagory">
                    <p>{item.category1}</p>
                  </div>
                  <div className="PBname">
                    <a href="">
                      <h3>{item.title}</h3>
                    </a>
                  </div>

                  <div className="PBprice">
                    <h5>{item.price} TL </h5>
                  </div>
                  <div className="PBbutton">
                    <Button variant="primary" size="lg">
                      <Link
                        className="Product_link"
                        to={`/details/${item._id}`}
                      >
                        İncele
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default BestProduct;
