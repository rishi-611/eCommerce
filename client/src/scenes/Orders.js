import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllOrders } from "../store/actions/orderActions";
import Spinner from "../components/Spinner";
import Alert from "../components/Alert";
import GoBack from "../components/GoBack";
import { ListGroup, Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

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
  let orderItems = [];
  orders.forEach((order) => orderItems.push(...order.orderItems));
  console.log(orderItems);

  return (
    <React.Fragment>
      <GoBack />
      {loading ? (
        <Spinner></Spinner>
      ) : error ? (
        <Alert variant="danger">
          Page could not be loaded. Please try again later
        </Alert>
      ) : (
        "Products"
      )}
    </React.Fragment>
  );
};

export default Orders;
