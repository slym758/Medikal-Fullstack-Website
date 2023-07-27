import React from "react";

import "../css/footer.css";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_context">
        <div className="footer__content">
          <h5>Pol Medikal © 2023</h5>
          <img src={logo} alt="" />
        </div>

        <div className="p-2 flex-fill bd-highlight mb-3 mb-md-0 hidden footer_firma">
          <h5 className="places">BAYİSİ OLDUĞUMUZ FİRMALAR</h5>
          <div className="col-md-6">
            <h5 className="mb-0">- Wingmed</h5>
            <h5 className="mb-0">- Vizor</h5>
            <h5 className="mb-0">- Coloplast</h5>
            <h5 className="mb-0">- Eruslu</h5>
            <h5 className="mb-0">- Convatec</h5>
          </div>

          <div className="col-md-6">
            <h5 className="mb-0">- Canped</h5>
            <h5 className="mb-0">- Demersan</h5>
            <h5 className="mb-0">- Respirox</h5>
            <h5 className="mb-0">- İron </h5>
            <h5 className="mb-0">- DS Sağlık</h5>
          </div>
        </div>

        <div className="p-2 flex-fill bd-highlight mb-3 mb-md-0 hidden">
          <h5 className="places">ÇALIŞMA SAATLERİMİZ</h5>
          <div className="d-flex">
            <div className="col-md-6">
              <h5 className="mb-0">Pazartesi</h5>
              <h5 className="mb-0">Salı</h5>
              <h5 className="mb-0">Çarşamba</h5>
              <h5 className="mb-0">Perşembe</h5>
              <h5 className="mb-0">Cuma</h5>
              <h5 className="mb-0">Cumartesi</h5>
              <h5 className="mb-0">Pazar</h5>
            </div>
            <div className="col-md-6 justify-content-center">
              <p className="mb-0">: 08:30 / 18:00</p>
              <p className="mb-0">: 08:30 / 18:00</p>
              <p className="mb-0">: 08:30 / 18:00</p>
              <p className="mb-0">: 08:30 / 18:00</p>
              <p className="mb-0">: 08:30 / 18:00</p>
              <p className="mb-0">: 09:30 / 18:00</p>
              <p className="mb-0">: Kapalı</p>
            </div>
          </div>
        </div>

        <div className="p-2 flex-fill bd-highlight mb-3 mb-md-0">
          <h5 className="places">ADRES</h5>
          <h5 className="mb-0">Amasya / Merkez</h5>
          <h5 className="mb-0">Kirazlıdere Mah. Dilara Sok. 4/A</h5>
          <h5 className="mb-0">Sabuncuoğlu Devlet Hastanesi</h5>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
