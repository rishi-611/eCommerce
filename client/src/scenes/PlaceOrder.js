import React from "react";
import { Row, Col, ListGroup, Card, Image, Button } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";
import Progress from "../components/Progress";

const PlaceOrder = () => {
  const { address, paymentMethod, cartItems } = useSelector(
    (state) => state.cart
  );

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
                      <Image
                        src={item.image}
                        alt={`image of ${item.name}`}
                        fluid
                        thumbnail
                      />
                    </Col>
                    <Col className="col-12 col-sm-4  d-flex justify-content-center  align-items-center py-2 px-sm-2 ">
                      <p className="text-center text-sm-start">{item.name}</p>
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
                <Col className="text-end">
                  $
                  {cartItems
                    .reduce(
                      (acc, item) =>
                        acc + Number(item.qty) * Number(item.price),
                      0
                    )
                    .toFixed(2)}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="py-2">
              <Row>
                <Col>Tax:</Col>
                <Col className="text-end"> $0.00</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="py-2">
              <Row>
                <Col>Delivery:</Col>
                <Col className="text-end"> $0.00</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="py-3">
              {" "}
              <div className="d-grid gap-2 mt-3">
                <button className="btn btn-primary" type="submit">
                  Continue
                </button>
              </div>
            </ListGroup.Item>
          </ListGroup>{" "}
        </Card>
      </div>
    </Row>
  );
};

export default PlaceOrder;
