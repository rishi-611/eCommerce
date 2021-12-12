import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, cleanupProduct } from "../store/actions/productActions";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import Rating from "../components/Rating";
import Alert from "../components/Alert";
import Spinner from "../components/Spinner";

const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productDetails = useSelector(({ products }) => ({
    product: products.product,
    loading: products.loading,
    error: products.error,
  }));
  const { id } = useParams();
  const [qty, setQty] = useState(1);

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
                      {product.countInStock > 0 ? (
                        <p className="text-success">
                          <strong>In Stock</strong>
                        </p>
                      ) : (
                        <p className="text-danger">Out of Stock</p>
                      )}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col className="d-flex align-items-center">Qty: </Col>
                    <Col>
                      <Form>
                        {" "}
                        <Form.Select
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                          className="text-center"
                        >
                          {[...Array(product.countInStock).keys()].map(
                            (key) => (
                              <option key={key + 1} value={key + 1}>
                                {key + 1}
                              </option>
                            )
                          )}
                        </Form.Select>
                      </Form>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Button
                  className="addToCart-btn btn-block"
                  type="button"
                  disabled={product.countInStock <= 0}
                  onClick={() => navigate(`/cart/${id}?qty=${qty}`)}
                >
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
