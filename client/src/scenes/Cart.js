import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import qs from "query-string";
import { Row, Col, Image, ListGroup, Button, Form } from "react-bootstrap";
import { addToCart, removeFromCart } from "../store/actions/cartActions";
import Alert from "../components/Alert";

const Cart = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const dispatch = useDispatch();
  const { cartItems, error, loading } = useSelector((state) => state.cart);
  useEffect(() => {
    //get qty from query, default quantity is 1
    const { qty } = qs.parse(search) || 1;
    if (!qty || !id) return;
    // add product to cart
    dispatch(addToCart(id, qty));

    console.log(cartItems);
  }, []);

  //handle empty cart
  if (cartItems.length === 0 && !loading) {
    return (
      <Alert>Your Cart is empty. Add products to cart to view them here.</Alert>
    );
  }

  //else show cart
  return (
    <React.Fragment>
      <Row>
        <Col md="8">
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.productId}>
                <Row>
                  <Col sm="12" md="3">
                    <Image
                      src={item.image}
                      alt={`image of ${item.name}`}
                      fluid
                    />
                  </Col>
                  <Col
                    className="d-flex justify-content-center align-items-center py-2"
                    sm="4"
                    md="3"
                  >
                    <h4>{item.name}</h4>
                  </Col>
                  <Col
                    className="d-flex justify-content-center align-items-center"
                    sm="4"
                    md="3"
                  >
                    <Form>
                      {" "}
                      <Form.Select
                        // as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(addToCart(item.productId, e.target.value))
                        }
                        className="text-center"
                      >
                        {[...Array(item.countInStock).keys()].map((key) => (
                          <option key={key + 1} value={key + 1}>
                            {key + 1}
                          </option>
                        ))}
                      </Form.Select>
                    </Form>
                  </Col>
                  <Col
                    className="d-flex justify-content-center align-items-center"
                    sm="4"
                    md="3"
                  >
                    <Button
                      onClick={() => dispatch(removeFromCart(item.productId))}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md="4"></Col>
      </Row>
    </React.Fragment>
  );
};

export default Cart;
