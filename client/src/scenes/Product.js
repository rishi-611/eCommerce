import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, cleanupProduct } from "../store/actions/productActions";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import Rating from "../components/Rating";

const Product = () => {
  const dispatch = useDispatch();
  const productDetails = useSelector(({ products }) => ({
    product: products.product,
    loading: products.loading,
    error: products.error,
  }));
  const { id } = useParams();

  const { product, loading, error } = productDetails;

  useEffect(() => {
    return () => {
      dispatch(cleanupProduct());
    };
  }, []);

  useEffect(() => {
    if (!productDetails.product) dispatch(getProduct(id));
  }, [dispatch, id, productDetails]);

  if (loading) {
    return <h4>Loading...</h4>;
  }

  if (!loading && (error || !product)) {
    return <h4>Error</h4>;
  }

  return (
    <React.Fragment>
      <Row>
        <Col md="5">
          <Image src={product.image} fluid />
        </Col>
        <Col md="4">
          <ListGroup.Item>
            <h4>{product.name}</h4>
          </ListGroup.Item>
          <ListGroup.Item>
            <Rating rating="4.5" text={`from 10 reviews`} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Description: </strong> {product.description}
          </ListGroup.Item>
          <ListGroup.Item>
            <h3>${product.price}</h3>
          </ListGroup.Item>
        </Col>
        <Col md="3"></Col>
      </Row>
    </React.Fragment>
  );
};

export default Product;
