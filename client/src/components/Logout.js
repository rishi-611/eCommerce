import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { logout } from "../store/actions/userActions";

const Logout = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, [isLoggedIn]);

  if (!isLoggedIn) return <Navigate to="/login" />;

  return <div></div>;
};

export default Logout;
