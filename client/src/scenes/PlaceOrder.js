import React, { useEffect } from "react";
import { Row, Col, ListGroup, Card, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Progress from "../components/Progress";
import { placeCODOrder } from "../store/actions/orderActions";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { address, paymentMethod, cartItems } = useSelector(
    (state) => state.cart
  );

  const itemPrice = cartItems.reduce(
    (acc, item) => acc + Number(item.qty) * Number(item.price),
    0
  );

  const deliveryPrice = itemPrice > 20 ? 0 : 10;
  const totalPrice = itemPrice + deliveryPrice;

  useEffect(() => {
    if (
      !address ||
      (Object.keys(address).length === 0 && address.constructor === Object)
    ) {
      //in case someone clears localstorage after address page, and refreshes
      navigate("/shipping");
    }
  }, [address]);

  const handlePlaceCODOrder = () => {
    const orderForm = {
      orderItems: cartItems,
      shippingAddress: address,
      paymentMethod,
      shippingPrice: deliveryPrice,
      totalPrice,
    };
    dispatch(placeCODOrder(navigate, orderForm));
  };

  const handlePlaceOrder = () => {
    const orderForm = {
      orderItems: cartItems,
      shippingAddress: address,
      paymentMethod,
      shippingPrice: deliveryPrice,
      totalPrice,
    };
    console.log(orderForm);
  };

  return (
    <Row>
      <Progress step1 step2 step3 step4 />
      <div className="col-12 col-sm-8">
        <ListGroup>
          <ListGroup.Item>
            <h3 className="order-sub-header">Shipping Address</h3>
            <p className="order-address">
              {address.street}, {address.city}, {address.state},
              {address.pincode}, {address.country}
            </p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h3 className="order-sub-header">Payment Method</h3>
            <p>{paymentMethod}</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h3 className="order-sub-header">Order Items</h3>
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item key={item.productId}>
                  <Row>
                    <Col className="col-12 col-sm-2 d-flex justify-content-center align-items-center">
                      <LinkContainer to={`/products/${item.productId}`}>
                        <Image
                          src={item.image}
                          alt={`image of ${item.name}`}
                          fluid
                          thumbnail
                        />
                      </LinkContainer>
                    </Col>
                    <Col className="col-12 col-sm-4  d-flex justify-content-center  align-items-center py-2 px-sm-2 ">
                      <LinkContainer to={`/products/${item.productId}`}>
                        <p className="text-center text-sm-start">{item.name}</p>
                      </LinkContainer>
                    </Col>
                    <Col className="col-12 col-sm-6  d-flex justify-content-center justify-content-sm-end align-items-center">
                      <p className="text-center">
                        {item.qty} x ${item.price} = $
                        {Number(item.qty) * Number(item.price)}
                      </p>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="col-12 col-sm-4">
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>Order Summary</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                {" "}
                <Col>Items:</Col>
                <Col className="text-end">${itemPrice.toFixed(2)}</Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item className="py-2">
              <Row>
                <Col>Delivery:</Col>
                <Col className="text-end"> ${deliveryPrice.toFixed(2)}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="py-2">
              <Row>
                <Col>Total:</Col>
                <Col className="text-end"> ${totalPrice.toFixed(2)}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="py-3">
              {" "}
              <div className="d-grid gap-2 mt-3">
                {paymentMethod === "Cash On Delivery" ? (
                  <button
                    className="btn btn-primary"
                    onClick={handlePlaceCODOrder}
                  >
                    Place Order
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={handlePlaceOrder}
                  >
                    Place Order
                  </button>
                )}
              </div>
            </ListGroup.Item>
          </ListGroup>{" "}
        </Card>
      </div>
    </Row>
  );
};

export default PlaceOrder;
