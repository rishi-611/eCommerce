import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./scenes/Products";
import Product from "./scenes/Product";

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
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
