import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import about from "../assets/about.jpg";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, Typography } from "antd";
import { BiPlusMedical } from "react-icons/bi";
import "../css/about.css";
import image from "../assets/Soru.jpg";
import Footer from "../components/Footer.jsx";
import { useState, useEffect } from "react";

function About() {
  const [soru, setSoru] = useState([]);

  useEffect(() => {
    const getSoru = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_APP_SERVER_URL}/api/soru/get-soru-all`
        );
        const data = await res.json();
        setSoru(data);
      } catch (error) {
        console.log(error);
      }
    };
    getSoru();
  }, []);
  return (
    <div className="About">
      <div className="Product_Heading">
        <div className="Product_Heading_content">
          <h2>Hakkımızda</h2>
          <p>
            <Link to="/">Anasayfa</Link>/ Hakkımızda
          </p>
        </div>
      </div>

      <div className="About_start">
        <div className="">
          <Row>
            <Col className="about_col_left" md={6}>
              <img src={about} />
            </Col>
            <Col className="about_col_right" md={6}>
              <h2>Biz Kimiz?</h2>
              <p>
                Pol Medikal, tıbbi cihaz, ortopedi ve medikal malzeme
                sektöründeki faaliyetlerine 2018 yılında başlamıştır.
                Kuruluşundan itibaren ilkeli, dürüst ve müşteri memnuniyetini
                benimseyerek sektördeki yerini almıştır. Medikal ürünler
                kategorisinde geniş ürün yelpazesi, kalite, uygun fiyat ve
                alanında uzman personelle hizmetine devam etmektedir. <br />{" "}
                <br />
                <span>Vizyonumuz</span> <br /> <br />
                En yeni teknoloji, ürün ve hizmet sunumu ile sürekli gelişmeyi,
                kalite ve müşteri memnuniyetini esas alan anlayışla sektörüne
                devam etmektedir. Bayisi olduğumuz yenilikçi ürünler ile en
                kaliteli tedavi ve sonuç odalı cözümler sunmak, ürünlerimizi
                kullanan hastaların yaşam kalitesini iyileştirmek ve firmamız
                için sürdürülebilir büyümeyi sağlamak önceliğimizdir
              </p>
              <Button type="primary" danger size="large">
                <Link to="/contact">İletişim</Link>
              </Button>
            </Col>
          </Row>
        </div>

        <div className="title">
          <h2 className="title_content">Hizmetlerimiz</h2>
          <div className="title_information">
            <p>Neler Yapıyoruz ?</p>
          </div>
        </div>

        <div className="about_us container">
          <div className="about_info">
            <div className="info_card">
              <div className="info_icon">
                <BiPlusMedical />
              </div>
              <h4>Hasta alt bezi</h4>
              <p>
                İdrar/gaita kaçırma (inkontinans) sorunu yaşayan, yatarak tedavi
                gören veya tedavisine ayakta devam edilen kişiler için
                kullanılan bir sağlık ürünüdür
              </p>
            </div>
            <div className="info_card">
              <div className="info_icon">
                <BiPlusMedical />
              </div>
              <h4>Kolostomi/Ürostomi Ürünleri</h4>
              <p>
                İleostomi, ince bağırsağın alt tarafının saptırılmasıdır.
                Ürostomi ise, mesaneden idrar taşıyan tüplerin saptırılması
                durumudur. Bir diğer tanımla da kolostomi, bağırsak iletim
                tedavisi olarak da bilinir.
              </p>
            </div>
            <div className="info_card">
              <div className="info_icon">
                <BiPlusMedical />
              </div>
              <h4>Ortopedi Ürünleri</h4>
              <p>
                Ortopedi; hareket sisteminde oluşabilecek her çeşit yaralanma ve
                hastalıklarla ilgilenen tıbbi ana bilim dalıdır. Bu dal
                içerisinde değişik alt dallar bulunmaktadır.
              </p>
            </div>
            <div className="info_card">
              <div className="info_icon">
                <BiPlusMedical />
              </div>
              <h4>Tıbbi Sarf Malzemeleri</h4>
              <p>
                Protez ve ortez tanımına girmeyen, iyileştirmeyi tek başına
                sağlamayan, teşhis, tedavi ve bakım amaçlı işlemlerin yapılması
                esnasında tek sefer ya da sınırlı sayıda kullanılmaya mahsus
                tıbbî malzemelerdir.
              </p>
            </div>
            <div className="info_card">
              <div className="info_icon">
                <BiPlusMedical />
              </div>
              <h4>Tıbbi Cihazlar</h4>
              <p>
                Hastalıklara karşı kullanılması, hastalıkların önlenmesi,
                hastalıkların teşhisi, hastalıkların tedavisi, hastalıkların
                etkilerinin azaltılması, hastalığın seyrinin takibi sağlayan
                Yaralanmalar, yaralanmanın teşhisi, yaralanmanın tedavisi
                yaralanmanın seyrinin takibi gibi tıbbı cihazlar.
              </p>
            </div>
            <div className="info_card">
              <div className="info_icon">
                <BiPlusMedical />
              </div>
              <h4>Hastane Ekipmanları</h4>
              <p>
                Abeslang, antiseptikler, bisturi uçları, cerrahi aletler ve
                setler, malzemeleri, maske, bone, galoş. Oksijen maskeleri,
                önlük ve tulumlar, serum setleri ve kan verme setleri, tıbbi
                atık ürünleri. Tüm bunlar hastane ekipmanları kategorimizde yer
                alır.
              </p>
            </div>
          </div>
        </div>

        <div className="title">
          <h2 className="title_content">Sık Sorulan Sorular</h2>
          <div className="title_information">
            <p>Neler Soruluyor?</p>
          </div>
        </div>

        <div className="question container">
          <div className="row">
            <Row>
              <Col className="collapse_col_left" md={6}>
                <Collapse
                  accordion={true}
                  expandIcon={({ isActive }) => (
                    <CaretRightOutlined rotate={isActive ? 90 : 0} />
                  )}
                >
                  {soru.map((item) => (
                    <Collapse.Panel key={item._id} header={item.soru}>
                      <Typography.Text> {item.cevap} </Typography.Text>
                    </Collapse.Panel>
                  ))}
                </Collapse>
              </Col>
              <Col className="collapse_col_right" md={6}>
                <img src={image} alt="" />
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
