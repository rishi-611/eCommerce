import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./scenes/Products";
import Product from "./scenes/Product";
import Cart from "./scenes/Cart";
import Login from "./scenes/Login";
import Register from "./scenes/Register";
import Logout from "./components/Logout";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <main>
          <Container>
            <Routes>
              <Route exact path="/" element={<Products />} />
              <Route exact path="/products/:id" element={<Product />} />
              <Route exact path="/cart/:id" element={<Cart />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/logout" element={<Logout />} />
              <Route exact path="/register" element={<Register />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
