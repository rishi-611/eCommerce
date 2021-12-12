import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import qs from "query-string";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import { addToCart, removeFromCart } from "../store/actions/cartActions";
import Alert from "../components/Alert";

const Cart = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const dispatch = useDispatch();
  const { cartItems, error, loading } = useSelector((state) => state.cart);
  useEffect(() => {
    //get qty from query, default quantity is 1
    const { qty } = qs.parse(search) || 1;
    if (!qty || !id) return;
    // add product to cart
    dispatch(addToCart(id, qty));

    console.log(cartItems);
  }, []);

  if (cartItems.length === 0 && !loading) {
    return (
      <Alert>Your Cart is empty. Add products to cart to view them here.</Alert>
    );
  }

  return <React.Fragment>Cart</React.Fragment>;
};

export default Cart;
