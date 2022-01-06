import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOrder } from "../store/actions/orderActions";
import Spinner from "../components/Spinner";
import Alert from "../components/Alert";

const OrderScreen = () => {
  const { order, loading, error } = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    //check if order is already in state, with the same id as in params, in that case, no need to fetch
    if (!order || order._id !== id) {
      dispatch(fetchOrder(id));
    }
  }, []);

  if (loading) return <Spinner />;

  if (!loading && error)
    return (
      <Alert variant="danger">
        Oops! Order could not be fetched! Please try again later
      </Alert>
    );

  return <div>Order</div>;
};

export default OrderScreen;
