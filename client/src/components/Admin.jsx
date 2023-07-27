import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, message } from "antd";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import "../css/admin.css";

function Admin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/auth/login`,
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );
      if (res.status === 200) {
        message.success("Giriş Başarılı");
        navigate("/dashboard");
      } else if (res.status === 404) {
        message.error("Kullanıcı Bulunamadı!");
      } else if (res.status === 403) {
        message.error("Şifre Yanlış!");
      }
      setLoading(false);
    } catch (error) {
      message.error("Bir şeyler yanlış gitti");
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className=" gradient-form">
      <MDBRow>
        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{ width: "185px" }}
                alt="logo"
              />
              <h4 className="mt-1 mb-5 pb-1">Polat Medikal</h4>
            </div>

            <p>Lütfen hesabınıza giriş yapın</p>

            <Form onFinish={onFinish} form={form}>
              <Form.Item name="username">
                <Input placeholder="Kullanıcı Adı" />
              </Form.Item>
              <Form.Item name="password">
                <Input.Password placeholder="Şifre" />
              </Form.Item>

              <div className=" text-center pt-1 mb-5 pb-1">
                <Button
                  htmlType="submit"
                  loading={loading}
                  className=" mb-4 w-100 gradient-custom-2 "
                >
                  Giriş Yap
                </Button>
              </div>
            </Form>
          </div>
        </MDBCol>

        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">Biz bir şirketten daha fazlasıyız.</h4>
              <p className="small mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default Admin;
