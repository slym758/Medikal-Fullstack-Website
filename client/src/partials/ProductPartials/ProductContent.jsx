// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { BsGridFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { React, useEffect, useState } from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import { Button, Form, Pagination, Select, Input } from "antd";
import { AiFillCaretDown } from "react-icons/ai";

import "../../App.css";
const { Option } = Select;

function ProductContent({ categories, product, total }) {
  const [categoryTitle, setCategoryTitle] = useState("Tümü");
  const [filtered, setFiltered] = useState([]);
  const [page, setPage] = useState(1);
  const [PostPerPage, setPostPerPage] = useState(9);
  const [search, setSearch] = useState("");

  const [form] = Form.useForm();

  useEffect(() => {
    if (categoryTitle === "Tümü") {
      setFiltered(product);
    } else {
      setFiltered(product.filter((item) => item.category1 === categoryTitle));
    }
  }, [product, setFiltered, categoryTitle]);

  const indexOfLastPage = page * PostPerPage;
  const indexOfFirstPage = indexOfLastPage - PostPerPage;
  const currentPost = filtered.slice(indexOfFirstPage, indexOfLastPage);

  return (
    <div className="Product_Content">
      <div className="Product_Context">
        <Row className="row">
          <Col md={3}>
            <div className="product_category">
              <div className="category_title">
                <h4>Kategoriler</h4>
              </div>

              <div className="category_menu">
                <Navbar collapseOnSelect expand="lg">
                  <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    {" "}
                    Kategoriler
                    <AiFillCaretDown />
                  </Navbar.Toggle>
                  <Navbar.Collapse
                    id="responsive-navbar-nav"
                    className="category_list"
                  >
                    <ul>
                      {categories.map((item) => (
                        <li
                          key={item._id}
                          onClick={() => setCategoryTitle(item.title)}
                        >
                          <span>{item.title}</span>
                        </li>
                      ))}
                    </ul>
                  </Navbar.Collapse>
                </Navbar>
                <Outlet />
              </div>
            </div>
          </Col>
          <Col md={9}>
            <div className="products_header">
              <div className="Products_nav">
                <Form>
                  <Form.Item name="soru">
                    <Input
                      className="product_search"
                      placeholder="Ara"
                      onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    />
                  </Form.Item>
                </Form>
              </div>

              <div className="Products">
                {filtered
                  .filter((key) => key.title.toLowerCase().includes(search))
                  .slice(indexOfFirstPage, indexOfLastPage)
                  .map((item) => (
                    <div key={item._id} className="Products_card">
                      <div className="Products_card_img">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="Products_card_details">
                        <h3 className="Products_card_title">{item.title}</h3>
                        <p className="Products_card_price">{item.price} TL</p>
                        <button className="Product_button">
                          <Link
                            className="Product_link"
                            to={`/details/${item._id}`}
                          >
                            İncele
                          </Link>
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <Pagination
              onChange={(value) => setPage(value)}
              pageSize={PostPerPage}
              total={total}
              current={page}
              className="pagination"
              disabled={filtered.length < 9}
            ></Pagination>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ProductContent;
