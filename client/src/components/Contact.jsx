import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { ImLocation } from "react-icons/im";
import { Ri24HoursFill } from "react-icons/ri";
import { Input, Alert, Space } from "antd";
import { useForm, ValidationError } from "@formspree/react";

import "../css/contact.css";
import Footer from "../components/Footer.jsx";
const { TextArea } = Input;

function Contact() {
  const [state, handleSubmit] = useForm("xoqoavzp");

  if (state.succeeded) {
    return (
      <Space direction="vertical" style={{ width: "100%" }}>
        <Alert message="Mesajınız Gönderildi" type="success" showIcon />
      </Space>
    );
  }
  return (
    <div className="contact">
      <div className="Product_Heading">
        <div className="Product_Heading_content">
          <h2>İletişim</h2>
          <p>
            <Link to="/">Anasayfa</Link>/ İletişim
          </p>
        </div>
      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d378.31992158454534!2d35.84811067878609!3d40.66164240486846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1689322258918!5m2!1str!2str"
          width="600"
          height="450"
          style={{ border: "0" }}
          loading="lazy"
          className="iframe"
        ></iframe>
      </div>

      <div className="contact_info ">
        <div className="container">
          <Row>
            <Col className="contact_col_left" md={6}>
              <div className="contact_title">
                <h2>İletişim Bilgileri</h2>
                <p>
                  Telefon ve mail ile ulabilirsiniz. Adresimiz ve çalışma
                  saatlerimiz aşağıda yazmaktadır.
                </p>
              </div>

              <div className="grid_main">
                <div className="contact_grid">
                  <span className="contact_grid_icon">
                    <FaPhone />
                  </span>
                  <h6>TELEFON NUMARASI</h6>
                  <p>0541 632 52 58</p>
                </div>
                <div className="contact_grid">
                  <span className="contact_grid_icon">
                    <GrMail />
                  </span>
                  <h6>mail adresi</h6>
                  <p>polmedikal@hotmail.com</p>
                </div>
                <div className="contact_grid">
                  <span className="contact_grid_icon">
                    <ImLocation />
                  </span>
                  <h6>Adres</h6>
                  <p>Pol Medikal Kirazlıdere mah. Dilara sk. no:4/A </p>
                </div>
                <div className="contact_grid">
                  <span className="contact_grid_icon">
                    <Ri24HoursFill />
                  </span>
                  <h6>çalışma saatleri</h6>
                  <p>Sabah 8:30 - Akşam 18:00 arası çalışmaktayız.</p>
                </div>
              </div>
            </Col>
            <Col className="contact_col_right" md={6}>
              <div className="contact_title">
                <h2>Bize ulaşın</h2>
                <p>
                  Adınızı ve numaranızı yazarak bize mail atın size geri
                  dönelim.
                </p>
              </div>

              <div className="contact_form">
                <form onSubmit={handleSubmit}>
                  <label htmlFor="name">Adınız ve Soyadınız</label>
                  <input id="name" type="name" name="name" />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />

                  <label htmlFor="email">Email Addresi</label>
                  <input id="email" type="email" name="email" />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />

                  <label htmlFor="phone">Telefoon Numarası</label>
                  <input id="phone" type="phone" name="phone" />
                  <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                  />

                  <label htmlFor="message">Konu ve Açıklama</label>
                  <textarea id="message" name="message" />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                  <button type="submit" disabled={state.submitting}>
                    Submit
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
