import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllOrders } from "../store/actions/orderActions";
import Spinner from "../components/Spinner";
import Alert from "../components/Alert";
import GoBack from "../components/GoBack";
import { ListGroup, Image, Row, Col, Card } from "react-bootstrap";
import OrderListItem from "../components/OrderListItem";

const Orders = () => {
  const { loading, error, orders } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    if (orders?.length > 0) return;
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

  // const renderListGroup = (order) => (

  // );

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
                  {/*
                    <Col className="col-2 d-flex justify-content-center align-items-center">
                    <h5 className="mb-0">Qty</h5>
                  </Col>
                  <Col className="col-2 d-flex justify-content-center align-items-center">
                    <h5 className="mb-0">Total Price</h5>
                  </Col>
                    */}
                  <Col className="col-2 d-flex  justify-content-center align-items-center">
                    <h5 className="mb-0">Placed On</h5>
                  </Col>
                  <Col className="col-2 d-flex justify-content-center align-items-center">
                    <h5 className="mb-0">Paid</h5>
                  </Col>
                  <Col className="col-2 d-flex justify-content-center align-items-center">
                    <h5 className="mb-0">Delivered</h5>
                  </Col>
                  <Col className="col-2 d-flex justify-content-center align-items-center"></Col>
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
              {orders.map((order) => (
                <OrderListItem order={order} key={order._id} />
              ))}
            </ListGroup>
          </Card>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Orders;
