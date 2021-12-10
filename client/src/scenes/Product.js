import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, cleanupProduct } from "../store/actions/productActions";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import Alert from "../components/Alert";
import Spinner from "../components/Spinner";

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
  }, []);

  if (loading || (!error && !product)) {
    return <Spinner />;
  }

  if (!loading && error) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <React.Fragment>
      <Row>
        <Col md="5">
          <Image src={product.image} fluid />
        </Col>
        <Col md="4">
          <ListGroup.Item className="py-3">
            <h4>{product.name}</h4>
          </ListGroup.Item>
          <ListGroup.Item>
            <Rating rating="4.5" text={`from 10 reviews`} />
          </ListGroup.Item>
          <ListGroup.Item>
            <h4 className="product-price">
              {" "}
              Price: <span className="price">${product.price}</span>
            </h4>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Description: </strong> {product.description}
          </ListGroup.Item>
        </Col>
        <Col md="3">
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className="addToCart-btn btn-block" type="button">
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Product;
