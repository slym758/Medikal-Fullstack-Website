import React from "react";
import "../../App.css";
import { Container } from "react-bootstrap";
import { GiMedicines, GiMedicalPack, GiMedicalDrip } from "react-icons/gi";
import { RiSurgicalMaskLine } from "react-icons/ri";

function CardAbout() {
  return (
    <div className="About_card">
      <div className="title">
        <h2 className="title_content">Hizmetlerimiz</h2>
        <div className="title_information">
          <p>Sağlık alanında verdiğimiz hizmetlerimiz.</p>
        </div>
      </div>
      <Container className="card_content">
        <div className="card_box">
          <div>
            <i className="card_icon">
              <GiMedicines />
            </i>
          </div>
          <div className="card_information">
            <h1>Tıbbi Ürünleri</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              dolores impedit quidem cum accusamus deleniti?
            </p>
          </div>
        </div>

        <div className="card_box">
          <div>
            <i className="card_icon">
              <RiSurgicalMaskLine />
            </i>
          </div>
          <div className="card_information">
            <h1>Ameliyat Ürünleri</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              dolores impedit quidem cum accusamus deleniti?
            </p>
          </div>
        </div>

        <div className="card_box">
          <div>
            <i className="card_icon">
              <GiMedicalPack />
            </i>
          </div>
          <div className="card_information">
            <h1>Ortopedi Ürünleri</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              dolores impedit quidem cum accusamus deleniti?
            </p>
          </div>
        </div>

        <div className="card_box">
          <div>
            <i className="card_icon">
              <GiMedicalDrip />
            </i>
          </div>
          <div className="card_information">
            <h1>Hasta Bakım Ürünleri</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              dolores impedit quidem cum accusamus deleniti?
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CardAbout;
