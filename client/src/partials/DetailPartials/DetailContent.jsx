import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useEffect, useState } from "react";
import product from "../../assets/Product-1.jpg";
import Carousel from "react-multi-carousel";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "../../css/detail.css";
import "../../css/BestProduct.css";
import "../../App.css";

function DetailContent({ homeproduct }) {
  const [categoryTitle, setCategoryTitle] = useState("Çok Satan");
  const [homefiltered, setHomefiltered] = useState([]);

  const params = useParams();

  console.log(homeproduct);

  useEffect(() => {
    if (categoryTitle === "Çok Satan") {
      setHomefiltered(
        homeproduct.filter((item) => item.category2 === categoryTitle)
      );
    }
  }, [homeproduct, setHomefiltered, categoryTitle]);

  return (
    <div className="detail_main">
      <div className="detail_content">
        {homeproduct.map((item) =>
          item._id === params.id ? (
            <Row key={item._id} className="detail_row">
              <Col md={6} className="detail_col_1">
                <div className="detail_img">
                  <img src={item.img} />
                </div>
              </Col>
              <Col md={6} className="detail_col_2">
                <div className="detail_info">
                  <div className="detail_title">
                    <h1>{item.title}</h1>
                  </div>

                  <div className="detail_price">
                    <h1>{item.price} TL</h1>
                  </div>

                  <div className="detail_context">
                    <p>{item.text}</p>
                  </div>

                  <div className="detail_carousel_img">
                    <img src={item.img_2} alt="" />
                    <img src={item.img_3} alt="" />
                    <img src={item.img_4} alt="" />
                  </div>
                </div>
              </Col>
            </Row>
          ) : null
        )}

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
                        <Link className="detail_button" to="/details">
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
    </div>
  );
}

export default DetailContent;
