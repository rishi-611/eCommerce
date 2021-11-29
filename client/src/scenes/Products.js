import React from "react";
import productList from "../../../data/products";
import ProductSummary from "../components/ProductSummary";
import { Row, Col } from "react-bootstrap";
import "../assets/css/products.css";

const Products = () => {
  return (
    <Row>
      {productList.map((product) => (
        <Col className="mb-3" key={product._id} xsm={12} sm={6} md={4} lg={3}>
          <ProductSummary product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default Products;
