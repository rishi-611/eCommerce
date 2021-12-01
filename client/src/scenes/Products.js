import React, { useEffect } from "react";
import ProductSummary from "../components/ProductSummary";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import "../assets/css/products.css";

import { getProducts } from "../store/actions/productActions";

const Products = () => {
  const dispatch = useDispatch();
  const { productList, loading, error } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getProducts());
  }, [getProducts]);
  return (
    <Row>
      {productList.length > 0 &&
        productList.map((product) => (
          <Col className="mb-3" key={product._id} xsm={12} sm={6} md={4} lg={3}>
            <ProductSummary product={product} />
          </Col>
        ))}
    </Row>
  );
};

export default Products;
