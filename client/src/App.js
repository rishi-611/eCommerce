import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./scenes/Products";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <main>
          <Products />
        </main>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
