import React from "react";
import { ListGroup, Image, Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Moment from "react-moment";

const OrderListItem = ({ order }) => {
  return (
    <ListGroup.Item style={{ borderWidth: "0 0 2px" }}>
      {order.orderItems.map((item, i) => (
        <Row className="mb-2 text-center" key={item.productId._id}>
          <Col className="col-1">
            <LinkContainer to={`/products/${item.productId._id}`}>
              <Image
                fluid
                src={item.productId.image}
                alt="product image"
              ></Image>
            </LinkContainer>
          </Col>
          <Col className="col-3 text-start">{item.name}</Col>
          {/*
                    <Col className="col-2">{item.qty}</Col>
                    <Col className="col-2 ">${(item.price * item.qty).toFixed(2)}</Col>
          */}
          <Col className="col-2">
            <Moment format="DD-MM-YYYY">{order.createdAt}</Moment>
          </Col>
          <Col
            className={`col-2 font-weight-bold text-${
              order.isPaid ? "success" : "danger"
            } ${i == 0 ? "visibe" : "invisible"}`}
          >
            {order.isPaid ? (
              <i className="fas fa-check text-success"></i>
            ) : (
              <i className="fas fa-times text-danger"></i>
            )}
          </Col>
          <Col
            className={`col-2 font-weight-bold text-${
              order.isDelivered ? "success" : "danger"
            }
              ${i == 0 ? "visibe" : "invisible"}
              `}
          >
            {order.isDelivered ? (
              <i className="fas fa-check text-success"></i>
            ) : (
              <i className="fas fa-times text-danger"></i>
            )}
          </Col>
          <Col className="col-2">
            <LinkContainer to={`/orders/${order._id}`}>
              <Button>Details</Button>
            </LinkContainer>
          </Col>
        </Row>
      ))}
    </ListGroup.Item>
  );
};

export default OrderListItem;
