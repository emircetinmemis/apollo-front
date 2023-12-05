import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./components/Home";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import UserOrders from "./components/UserOrders";
import GiveOrder from "./components/GiveOrder";
import ConfirmOrder from "./components/ConfirmOrder";
import AddNewProduct from "./components/AddNewProduct";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Container fluid>
        <Row>
          {/* Aside Navbar */}
          <Col md={2} className="bg-light">
            <CustomNavbar />
          </Col>

          {/* Main Content */}
          <Col md={10} style={{ padding: "20px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/user-orders" element={<UserOrders />} />
              <Route path="/give-order" element={<GiveOrder />} />
              <Route path="/confirm-order" element={<ConfirmOrder />} />
              <Route
                path="/admin/add-new-product"
                element={<AddNewProduct />}
              />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
