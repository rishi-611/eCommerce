import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import qs from "query-string";
import {
  Row,
  Col,
  Card,
  Image,
  ListGroup,
  Button,
  Form,
} from "react-bootstrap";
import { addToCart, removeFromCart } from "../store/actions/cartActions";
import Alert from "../components/Alert";
import GoBack from "../components/GoBack";
import { LinkContainer } from "react-router-bootstrap";

const Cart = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const dispatch = useDispatch();
  const { cartItems, error, loading } = useSelector((state) => state.cart);
  const { isLoggedIn } = useSelector((state) => state.user);
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
      <React.Fragment>
        <Alert>
          Your Cart is empty. Add products to cart to view them here.
        </Alert>
        <GoBack />
      </React.Fragment>
    );
  }
  //else show cart
  return (
    <React.Fragment>
      <GoBack />

      <Row>
        <Col md="8">
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.productId} className="mb-sm-0 mb-2">
                <Row>
                  <Col className="col-12 col-sm-3">
                    <Image
                      src={item.image}
                      alt={`image of ${item.name}`}
                      fluid
                    />
                  </Col>
                  <Col className="d-flex justify-content-center align-items-center py-2 px-sm-2 col-12 col-sm-3">
                    <h4 className="text-center text-sm-left">{item.name}</h4>
                  </Col>
                  <Col className="d-flex justify-content-center align-items-center col-6 col-sm-3">
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
                  <Col className="d-flex justify-content-center align-items-center col-6 col-sm-3">
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
        <Col md="4">
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3 className="cart-subtotal py-2">
                  Subtotal for{" "}
                  {parseInt(
                    cartItems.reduce((acc, item) => acc + Number(item.qty), 0),
                    10
                  )}{" "}
                  items
                </h3>
              </ListGroup.Item>
              <ListGroup.Item className="py-1">
                $
                {cartItems
                  .reduce(
                    (acc, item) => acc + Number(item.qty) * Number(item.price),
                    0
                  )
                  .toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item className="py-3">
                <LinkContainer
                  to={isLoggedIn ? "/shipping" : "/login?to=shipping"}
                  style={{ width: "100%" }}
                >
                  <Button
                    className="btn-block"
                    disabled={cartItems.length === 0}
                  >
                    Proceed to Check Out
                  </Button>
                </LinkContainer>
              </ListGroup.Item>
            </ListGroup>{" "}
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Cart;
