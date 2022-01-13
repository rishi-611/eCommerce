import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllOrders } from "../store/actions/orderActions";
import Spinner from "../components/Spinner";
import Alert from "../components/Alert";
import GoBack from "../components/GoBack";
import { ListGroup, Image, Row, Col, Card } from "react-bootstrap";
// import { Link } from "react-router-dom";

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
  let orderItems = [],
    isPaid = [],
    isDelivered = [];
  orders.forEach((order) => {
    order.orderItems.forEach((item) => {
      orderItems.push(item);
      isPaid.push(order.isPaid);
      isDelivered.push(order.isDelivered);
    });
  });

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
              {orderItems.map((item, i) => (
                <ListGroup.Item key={item._id} className="py-3">
                  <Row className="text-center">
                    <Col className="col-1">
                      <Image
                        fluid
                        src={item.productId.image}
                        alt="product image"
                      ></Image>
                    </Col>
                    <Col className="col-3 text-start">{item.name}</Col>
                    <Col className="col-2">{item.qty}</Col>
                    <Col className="col-2 ">
                      ${(item.price * item.qty).toFixed(2)}
                    </Col>
                    <Col
                      className={`col-2 font-weight-bold text-${
                        isPaid[i] ? "success" : "danger"
                      }`}
                    >
                      {isPaid[i] ? "Paid" : "Unpaid"}
                    </Col>
                    <Col
                      className={`col-2 font-weight-bold text-${
                        isDelivered[i] ? "success" : "danger"
                      }`}
                    >
                      {isDelivered[i] ? "Delivered" : "Not Delivered"}
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Orders;
