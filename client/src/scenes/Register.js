import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../store/actions/userActions";

import "../assets/css/auth.css";

const Register = () => {
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  // console.log(isLoggedIn);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) =>
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(register(formData));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-2"></div>
        <div className="col-lg-6 col-md-8 login-box bg-dark p-4 text-light">
          <div className="col-lg-12 login-title">SIGN UP</div>

          <div className="col-lg-12 login-form">
            <div className="col-lg-12 login-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-control-label">NAME</label>
                  <input
                    autoComplete="on"
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
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
                <div className="form-group">
                  <label className="form-control-label">CONFIRM PASSWORD</label>
                  <input
                    autoComplete="off"
                    type="password"
                    className="form-control"
                    placeholder="Confirm Your Password"
                    name="password2"
                    value={formData.password2}
                    onChange={handleChange}
                  />
                </div>

                <div className="loginbttm">
                  <div className="d-flex justify-content-center align-items-center login-btm login-button">
                    <button type="submit" className="btn btn-outline-light">
                      SIGN UP
                    </button>
                  </div>
                </div>
                <div className="loginbttm">
                  <div className="d-flex justify-content-center align-items-center login-btm login-button">
                    Already have an account?{" "}
                    <Link to="/login">
                      <span className="auth-bottom-link hover-underline-animation">
                        Log In
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

export default Register;
