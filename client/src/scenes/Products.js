import React from "react";
import productList from "../assets/extras/products";
import ProductSummary from "../components/ProductSummary";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/products.css";

const Products = () => {
  return (
    <Container>
      <Row>
        {productList.map((product) => (
          <Col className="mb-3" key={product._id} xsm={12} sm={6} md={4} lg={3}>
            <ProductSummary product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
