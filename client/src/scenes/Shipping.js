import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Shipping = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  if (!isLoggedIn) return <Navigate to="/login" />;
  return <div>shipping</div>;
};

export default Shipping;
