import { React, useState, useEffect } from "react";
import "../App.css";
import { Form, Input, Select, Button, message, Table, Tabs } from "antd";

const { TextArea } = Input;
const { Option } = Select;

function dashboard() {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState([]);
  const [carousel, setCarousel] = useState([]);
  const [soru, setSoru] = useState([]);
  const [editingItem, setEditingItem] = useState({});

  const [form1] = Form.useForm();
  const [form2] = Form.useForm();
  const [form] = Form.useForm();

  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/categories/get-category-all`
      );
      res.json().then((json) => {
        setCategories(json);
      });
    };
    getCategories();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_APP_SERVER_URL}/api/products/get-product-all`
        );
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getCarousel = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_APP_SERVER_URL}/api/carousel/get-carousel-all`
        );
        const data = await res.json();
        setCarousel(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCarousel();
  }, []);

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

  const onFinish = (values) => {
    try {
      fetch(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/categories/add-category`,
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );
      message.success("Kategori başarıyla eklendi");
      form2.resetFields();
      setCategories([
        ...categories,
        {
          _id: Math.random(),
          title: values.title,
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const onFinish2 = (values) => {
    try {
      fetch(`${import.meta.env.VITE_APP_SERVER_URL}/api/products/add-product`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Ürün başarıyla eklendi");
      form1.resetFields();
      setProduct([
        ...product,
        {
          ...values,
          _id: Math.random(),
          price: Number(values.price),
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const onFinish3 = (values) => {
    try {
      fetch(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/carousel/add-carousel`,
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );
      message.success("Foto eklendi");
      form.resetFields();
      setCarousel([
        ...carousel,
        {
          ...values,
          _id: Math.random(),
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const onFinish4 = (values) => {
    try {
      fetch(`${import.meta.env.VITE_APP_SERVER_URL}/api/soru/add-soru`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Soru eklendi");
      form.resetFields();
      setSoru([
        ...soru,
        {
          ...values,
          _id: Math.random(),
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCategory = (id) => {
    try {
      fetch(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/categories/delete-category`,
        {
          method: "DELETE",
          body: JSON.stringify({ categoryId: id }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );
      message.success("Başarıyla Silindi");
      setCategories(categories.filter((Item) => Item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = (id) => {
    try {
      fetch(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/products/delete-product`,
        {
          method: "DELETE",
          body: JSON.stringify({ productId: id }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );
      message.success("Başarıyla Silindi");
      setProduct(product.filter((Item) => Item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCarousel = (id) => {
    try {
      fetch(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/carousel/delete-carousel`,
        {
          method: "DELETE",
          body: JSON.stringify({ carouselId: id }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );
      message.success("Başarıyla Silindi");
      setCarousel(carousel.filter((Item) => Item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSoru = (id) => {
    try {
      fetch(`${import.meta.env.VITE_APP_SERVER_URL}/api/soru/delete-soru`, {
        method: "DELETE",
        body: JSON.stringify({ soruId: id }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Başarıyla Silindi");
      setSoru(soru.filter((Item) => Item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      title: "Kategori Listesi",
      dataIndex: "title",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <div>
            <Button
              type="link"
              danger
              onClick={() => deleteCategory(record._id)}
            >
              Sil
            </Button>
          </div>
        );
      },
    },
  ];

  const columns2 = [
    {
      title: "Ürün Adı",
      dataIndex: "title",
      width: "8%",
    },
    {
      title: "Ürün Görseli",
      dataIndex: "img",
      width: "20%",
      render: (_, record) => {
        return <img src={record.img} className="tabs_img"></img>;
      },
    },

    {
      title: "Ürün Fiyatı",
      dataIndex: "price",
      width: "8%",
    },
    {
      title: "Kategori-1",
      dataIndex: "category1",
      width: "8%",
    },
    {
      title: "Kategori-2",
      dataIndex: "category2",
      width: "8%",
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "8%",
      render: (text, record) => {
        return (
          <div>
            <Button
              type="link"
              danger
              onClick={() => deleteProduct(record._id)}
            >
              Sil
            </Button>
          </div>
        );
      },
    },
  ];

  const columns3 = [
    {
      title: "Ürün Görseli",
      dataIndex: "title",
      width: "20%",
      render: (_, record) => {
        return <img src={record.title} className="tabs_img"></img>;
      },
    },

    {
      title: "Action",
      dataIndex: "action",
      width: "8%",
      render: (text, record) => {
        return (
          <div>
            <Button
              type="link"
              danger
              onClick={() => deleteCarousel(record._id)}
            >
              Sil
            </Button>
          </div>
        );
      },
    },
  ];

  const columns4 = [
    {
      title: "Sorular",
      dataIndex: "soru",
      width: "8%",
    },

    {
      title: "Cevaplar",
      dataIndex: "cevap",
      width: "8%",
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "8%",
      render: (text, record) => {
        return (
          <div>
            <Button type="link" danger onClick={() => deleteSoru(record._id)}>
              Sil
            </Button>
          </div>
        );
      },
    },
  ];

  const items = [
    {
      key: "1",
      label: `Ürün Ekle`,
      children: (
        <div className="dashboard container dashboard_main">
          <Form onFinish={onFinish2} form={form1} initialValues={editingItem}>
            <label>Fotoğraf Yükle:</label>
            <Form.Item name="img" placeholder="Resim URL'si">
              <Input />
            </Form.Item>

            <label> Detey Fotoğraf-1 Yükle:</label>
            <Form.Item name="img_2" placeholder="Resim URL'si">
              <Input />
            </Form.Item>

            <label>Detey Fotoğraf-2 Yükle:</label>
            <Form.Item name="img_3" placeholder="Resim URL'si">
              <Input />
            </Form.Item>

            <label>Detey Fotoğraf-3 Yükle:</label>
            <Form.Item name="img_4" placeholder="Resim URL'si">
              <Input />
            </Form.Item>

            <label>Ürün İsmi</label>
            <Form.Item
              name="title"
              rules={[
                {
                  required: true,
                  message: "Bu alanı doldurmanız zorunludur!",
                },
              ]}
            >
              <Input placeholder="Ürün İsmi" />
            </Form.Item>

            <label>Ürün Fiyatı</label>
            <Form.Item name="price">
              <Input placeholder="Ürün Fiyatı"></Input>
            </Form.Item>

            <label>Kategori-1 Seç</label>
            <Form.Item name="category1">
              <Select placeholder="Kategori Seç">
                {categories.map((item) => (
                  <Option key={item._id} value={item.title}>
                    {item.title}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <label>Kategori-2 Seç</label>
            <Form.Item name="category2">
              <Select placeholder="Kategori Seç">
                <Option value="Çok Satan">Çok Satan</Option>
              </Select>
            </Form.Item>

            <label>Ürün Açıklaması</label>

            <Form.Item name="text">
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Ürün Ekle
              </Button>
            </Form.Item>
          </Form>

          <div className="dashboard_category">
            <Table
              dataSource={product}
              columns={columns2}
              pagination={{ pageSize: 5 }}
              rowKey={"_id"}
              scroll={{
                x: 1000,
                y: 600,
              }}
            />
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: `Kategori Ekle`,
      children: (
        <div className="dashboard container dashboard_main">
          <Form onFinish={onFinish} form={form2}>
            <label> Kategori İsmi</label>
            <Form.Item
              name="title"
              rules={[
                {
                  required: true,
                  message: "Bu alanı doldurmanız zorunludur!",
                },
              ]}
            >
              <Input placeholder="Kategori İsmi" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Kategori Ekle
              </Button>
            </Form.Item>
          </Form>
          <div className="dashboard_category">
            <Table
              dataSource={categories}
              columns={columns}
              pagination={{ pageSize: 5 }}
              rowKey={"_id"}
            />
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: `Carousel`,
      children: (
        <div className="dashboard container dashboard_main">
          <Form onFinish={onFinish3} form={form}>
            <label> Foto URL</label>
            <Form.Item name="title">
              <Input placeholder="Url" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Foto Ekle
              </Button>
            </Form.Item>
          </Form>

          <div className="dashboard_category">
            <Table
              dataSource={carousel}
              columns={columns3}
              pagination={{ pageSize: 5 }}
              rowKey={"_id"}
              scroll={{
                x: 1000,
                y: 600,
              }}
            />
          </div>
        </div>
      ),
    },

    {
      key: "4",
      label: `Sık Sorulan Sorular`,
      children: (
        <div className="dashboard container dashboard_main">
          <Form onFinish={onFinish4} form={form}>
            <label> Soru</label>
            <Form.Item name="soru">
              <Input placeholder="Soru" />
            </Form.Item>

            <label> Cevap</label>
            <Form.Item name="cevap">
              <Input placeholder="Cevap" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Ekle
              </Button>
            </Form.Item>
          </Form>

          <div className="dashboard_category">
            <Table
              dataSource={soru}
              columns={columns4}
              pagination={{ pageSize: 5 }}
              rowKey={"_id"}
              scroll={{
                x: 1000,
                y: 600,
              }}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="Dashboard">
      <div className="Product_Heading">
        <div className="Product_Heading_content">
          <h2>Admin Paneli</h2>
        </div>
      </div>
      <Tabs defaultActiveKey="1" items={items}></Tabs>
    </div>
  );
}

export default dashboard;
