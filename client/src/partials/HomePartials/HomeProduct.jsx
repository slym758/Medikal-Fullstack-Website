import * as React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../../App.css";

import img1 from "../../assets/solunum.png";

import ProductTabOne from "./ProductTabOne";
import ProductTabTwo from "./ProductTabTwo";
import ProductTabThree from "./ProductTabThree";
import ProductTabFour from "./ProductTabFour";
import { TbHealthRecognition } from "react-icons/tb";
import { GiArmBandage, GiMedicalThermometer } from "react-icons/gi";

function HomeProduct({ homeproduct }) {
  return (
    <div className="Home_Product">
      <div className="title">
        <h2 className="title_content">Ürünlerimiz</h2>
        <div className="title_information">
          <p>Sağlık alanındaki ürünlerimiz.</p>
        </div>
      </div>
      <Tabs
        defaultActiveKey="ilaç"
        id="justify-tab-example"
        className="mb-3 container tab "
        justify
      >
        <Tab
          eventKey="ilaç"
          title={
            <div className="icon-remove ">
              <div>
                <TbHealthRecognition className="icons"></TbHealthRecognition>
              </div>

              <h3>KOLOSTOMİ/ÜROSTOMİ </h3>
            </div>
          }
        >
          <ProductTabOne homeproduct={homeproduct} />
        </Tab>
        <Tab
          eventKey="cihaz"
          title={
            <div className="icon-remove">
              {<img className="tab_icon" src={img1}></img>}

              <h3>SOLUNUM CİHAZLARI</h3>
            </div>
          }
        >
          <ProductTabTwo homeproduct={homeproduct} />
        </Tab>
        <Tab
          eventKey="ekipman"
          title={
            <div className="icon-remove">
              <div>
                <GiMedicalThermometer className="icons"></GiMedicalThermometer>
              </div>

              <h3>ELEKTRONİK ÜRÜNLER </h3>
            </div>
          }
        >
          <ProductTabThree homeproduct={homeproduct} />
        </Tab>
        <Tab
          eventKey="malzeme"
          title={
            <div className="icon-remove">
              <div>
                <GiArmBandage className="icons"></GiArmBandage>
              </div>

              <h3>SARF MALZEMLER </h3>
            </div>
          }
        >
          <ProductTabFour homeproduct={homeproduct} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default HomeProduct;
