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
    //get qty from query, default quantity is 1
    const { qty } = qs.parse(search) || 1;
    if (!qty || !id) return;
    // add product to cart
    dispatch(addToCart(id, qty));

    console.log(cartItems);
  }, []);
  return <div>Cart</div>;
};

export default Cart;
