import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import qs from "query-string";

import { addToCart } from "../store/actions/cartActions";

const Cart = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const dispatch = useDispatch();
  const { cartItems, error, loading } = useSelector((state) => state.cart);
  useEffect(() => {
    //get qty from query
    const { qty } = qs.parse(search);

    // add product to cart
    dispatch(addToCart(id, qty));
  }, []);
  return <div>Cart</div>;
};

export default Cart;
