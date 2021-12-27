import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "query-string";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../store/actions/userActions";
import { Navigate } from "react-router-dom";

import "../assets/css/auth.css";
const Login = () => {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const to = "/" + (qs.parse(search).to || "");
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  //if desired redirect location is provided in query, redirect to that page, otherwise redirect to default products page
  if (isLoggedIn) return <Navigate to={to} />;

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-2"></div>
        <div className="col-lg-6 col-md-8 login-box bg-dark p-4 text-light">
          <div className="col-lg-12 login-title">LOGIN</div>

          <div className="col-lg-12 login-form">
            <div className="col-lg-12 login-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-control-label">EMAIL</label>
                  <input
                    autoComplete="on"
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-control-label">PASSWORD</label>
                  <input
                    autoComplete="off"
                    type="password"
                    className="form-control"
                    placeholder="Your Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="loginbttm">
                  <div className="d-flex justify-content-center align-items-center login-btm login-button">
                    <button type="submit" className="btn btn-outline-light">
                      LOGIN
                    </button>
                  </div>
                </div>

                <div className="loginbttm">
                  <div className="d-flex justify-content-center align-items-center login-btm login-button">
                    Don't have an account?{" "}
                    <Link to="/register">
                      <span className="auth-bottom-link hover-underline-animation">
                        Sign Up
                      </span>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-3 col-md-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
