import React, { useEffect } from "react";
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
import Profile from "./scenes/Profile";
import AlertFloat from "./components/AlertFloat";
import Shipping from "./scenes/Shipping";
import PlaceOrder from "./scenes/PlaceOrder";
import OrderScreen from "./scenes/OrderScreen";
import Orders from "./scenes/Orders";

import store from "./store/store";
import { loadUser } from "./store/actions/userActions";
import setAuthToken from "./config/setAuthToken";
import Payment from "./scenes/Payment";

// this avoids bugs caused by profile getting loaded before user
// useEffect of child comes before useEffect of parent
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <main>
          <Container>
            <AlertFloat></AlertFloat>
            <Routes>
              <Route exact path="/" element={<Products />} />
              <Route exact path="/products/:id" element={<Product />} />
              <Route exact path="/cart/:id" element={<Cart />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/logout" element={<Logout />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/shipping" element={<Shipping />} />
              <Route exact path="/payment" element={<Payment />} />
              <Route exact path="/placeOrder" element={<PlaceOrder />} />
              <Route exact path="/order/:id" element={<OrderScreen />} />
              <Route exact path="/orders" element={<Orders />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
