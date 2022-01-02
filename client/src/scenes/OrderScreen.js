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
    //order may already be there, if we come to this screen after placing order,
    //no need to fetch it again in this case
    if (!order) {
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
