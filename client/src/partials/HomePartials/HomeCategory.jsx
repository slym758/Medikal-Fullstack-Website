import React from "react";
import "../../App.css";
import foto_1 from "../../assets/foto_1.jpg";
import foto_2 from "../../assets/foto_2.jpg";
import foto_3 from "../../assets/foto_3.jpg";
import foto_4 from "../../assets/foto_4.jpg";
import { Link, Outlet } from "react-router-dom";

function HomeCategory() {
  return (
    <div className="home_category">
      <div className="title">
        <h2 className="title_content">Kategoriler</h2>
        <div className="title_information">
          <p>Sağlık alanındaki hizmetlerimiz</p>
        </div>
      </div>

      <div className="category_home container">
        <div className="categoryHome_contact">
          <img className="categoryHome_img" src={foto_1} />

          <div className="categoryHome_title">
            <h1>Dezenfektan </h1>
            <h3>Çeşitleri</h3>

            <button className="categoryHome_button">
              {" "}
              <Link className="Product_link" to={`/product`}>
                İncele
              </Link>
            </button>
          </div>
        </div>

        <div className="categoryHome_contact">
          <img className="categoryHome_img" src={foto_2} />

          <div className="categoryHome_title">
            <h1>Muayene</h1>
            <h3>Elidivenleri</h3>

            <button className="categoryHome_button">
              <Link className="Product_link" to={`/product`}>
                İncele
              </Link>
            </button>
          </div>
        </div>

        <div className="categoryHome_contact">
          <img className="categoryHome_img" src={foto_3} />

          <div className="categoryHome_title">
            <h1>Laboratuvar</h1>
            <h3>Malzemeleri</h3>

            <button className="categoryHome_button">
              <Link className="Product_link" to={`/product`}>
                İncele
              </Link>
            </button>
          </div>
        </div>

        <div className="categoryHome_contact">
          <img className="categoryHome_img" src={foto_4} />

          <div className="categoryHome_title">
            <h1>Forma</h1>
            <h3>ve Örnük</h3>

            <button className="categoryHome_button">
              <Link className="Product_link" to={`/product`}>
                İncele
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCategory;
