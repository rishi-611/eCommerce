import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllOrders } from "../store/actions/orderActions";
import Spinner from "../components/Spinner";
import Alert from "../components/Alert";
import GoBack from "../components/GoBack";
import { ListGroup, Image, Row, Col, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Orders = () => {
  const { loading, error, orders } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllOrders());
  }, []);
  if (loading)
    return (
      <React.Fragment>
        <GoBack />
        <Spinner />
      </React.Fragment>
    );

  if (!loading && !orders)
    return (
      <React.Fragment>
        <GoBack />
        <Alert variant="danger">
          The page could not be loaded! Please try again later
        </Alert>
      </React.Fragment>
    );

  //from each order item will have an array of orderItems in it, we want to aggregate this array
  // let orderItems = [],
  //   isPaid = [],
  //   isDelivered = [];
  // orders.forEach((order) => {
  //   order.orderItems.forEach((item) => {
  //     orderItems.push(item);
  //     isPaid.push(order.isPaid);
  //     isDelivered.push(order.isDelivered);
  //   });
  // });
  // console.log(orderItems);

  const renderListGroup = (order) => (
    <ListGroup.Item style={{ borderBottom: "1px solid #888" }}>
      {order.orderItems.map((item, i) => (
        <Row className="mb-2" key={i}>
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
          <Col className="col-2">{item.qty}</Col>
          <Col className="col-2 ">${(item.price * item.qty).toFixed(2)}</Col>
          <Col
            className={`col-2 font-weight-bold text-${
              order.isPaid ? "success" : "danger"
            } ${i !== 0 ? "d-none" : ""}`}
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
              ${i !== 0 ? "d-none" : ""}
              `}
          >
            {order.isDelivered ? (
              <i className="fas fa-check text-success"></i>
            ) : (
              <i className="fas fa-times text-danger"></i>
            )}
          </Col>
        </Row>
      ))}
    </ListGroup.Item>
  );

  return (
    <React.Fragment>
      <GoBack />
      <h3 className="order-sub-header text-center">My Orders</h3>
      {loading ? (
        <Spinner></Spinner>
      ) : error ? (
        <Alert variant="danger">
          Page could not be loaded. Please try again later
        </Alert>
      ) : (
        <React.Fragment>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item key={0} className="bg-dark text-light py-4">
                <Row>
                  <Col className="col-4 d-flex justify-content-center align-items-center  ">
                    <h5 className="mb-0">Product</h5>
                  </Col>
                  <Col className="col-2 d-flex justify-content-center align-items-center">
                    <h5 className="mb-0">Qty</h5>
                  </Col>
                  <Col className="col-2 d-flex justify-content-center align-items-center">
                    <h5 className="mb-0">Total Price</h5>
                  </Col>
                  <Col className="col-2 d-flex justify-content-center align-items-center">
                    <h5 className="mb-0">Paid</h5>
                  </Col>
                  <Col className="col-2 d-flex justify-content-center align-items-center">
                    <h5 className="mb-0">Delivered</h5>
                  </Col>
                </Row>
              </ListGroup.Item>
              {/*
                {orderItems.map((item, i) => (
                <ListGroup.Item key={item.productId._id + i} className="py-3">
                  <Row className="text-center">
                    
                  </Row>
                </ListGroup.Item>
              ))}
                */}
              {orders.map((order) => renderListGroup(order))}
            </ListGroup>
          </Card>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Orders;
