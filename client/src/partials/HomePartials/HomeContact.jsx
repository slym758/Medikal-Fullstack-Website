import React from "react";
import "../../App.css";
function HomeContact() {
  return (
    <div className="HomeContact">
      <div className="title">
        <h2 className="title_content">İletişim</h2>
        <div className="title_information">
          <p>Bizimle E-Mail ile iletişime geçebilirsiniz.</p>
        </div>
      </div>

      <div className="HomeContact_content">
        <form className="HomeContact_form" action="">
          <input
            type="text"
            placeholder="E-mail"
            className="HomeContact_input"
          />
          <button className="HomeContact_button">Gönder</button>
        </form>
      </div>
    </div>
  );
}

export default HomeContact;
