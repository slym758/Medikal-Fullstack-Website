import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Admin from "./components/Admin";
import Dashboard from "./components/dashboard";
import Details from "./components/ProductDetails";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { RiWhatsappFill } from "react-icons/ri";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Navbar />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
          <Route path="contact" element={<Contact />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
      <div className="whattsap">
        <a
          href="https://wa.me/905068571364?text=Merhaba,%20web%20sitenizden%20ulaşıyorum;%20"
          target="_blank"
        >
          <span>
            <RiWhatsappFill />
          </span>
        </a>
      </div>
    </div>
  );
}

export default App;
