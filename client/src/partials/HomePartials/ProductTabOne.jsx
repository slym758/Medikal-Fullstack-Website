import React, { useEffect, useState } from "react";
import "../../css/HomeProduct.css";
import Button from "react-bootstrap/Button";
import { Link, Outlet } from "react-router-dom";

import img_1 from "../../assets/Product-1.jpg";
import { Pagination } from "antd";
import "../../App.css";

function ProductTabOne({ homeproduct }) {
  const [categoryTitle, setCategoryTitle] = useState("Kolostomi/Ürostomi");
  const [homeProductFiltered, setHomeProductFiltered] = useState([]);
  const [page, setPage] = useState(1);
  const [PostPerPage, setPostPerPage] = useState(12);

  useEffect(() => {
    if (categoryTitle === "Kolostomi/Ürostomi") {
      setHomeProductFiltered(
        homeproduct.filter((item) => item.category1 === categoryTitle)
      );
    }
  }, [homeproduct, setHomeProductFiltered, categoryTitle]);

  const indexOfLastPage = page * PostPerPage;
  const indexOfFirstPage = indexOfLastPage - PostPerPage;
  const currentPost = homeProductFiltered.slice(
    indexOfFirstPage,
    indexOfLastPage
  );

  return (
    <div>
      <div className="Product_home">
        {currentPost.map((item) => (
          <div key={item._id} className="Product_home_wrapper">
            <div className="Product_home_Image">
              <a href="">
                <div className="PHımage">
                  <img src={item.img} alt="" />
                </div>
              </a>
            </div>
            <hr />
            <div className="Product_home_content">
              <div className="PHcontent">
                <div className="PHcatagory">
                  <p>{item.category1}</p>
                </div>
                <div className="PHname">
                  <a href="">
                    <h3>{item.title}</h3>
                  </a>
                </div>

                <div className="PHprice">
                  <h5>{item.price}</h5>
                </div>
                <div className="PHbutton">
                  <Button variant="primary" size="lg">
                    <Link className="Product_link" to={`/details/${item._id}`}>
                      İncele
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        onChange={(value) => setPage(value)}
        pageSize={PostPerPage}
        total={homeproduct.length}
        current={page}
        className="pagination"
        disabled={homeProductFiltered.length < 12}
      ></Pagination>
    </div>
  );
}

export default ProductTabOne;
