import React from "react";
import { Link } from "react-router-dom";

import "../assets/css/auth.css";
const Login = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-2"></div>
        <div className="col-lg-6 col-md-8 login-box bg-dark p-4 text-light">
          <div className="col-lg-12 login-title">LOGIN</div>

          <div className="col-lg-12 login-form">
            <div className="col-lg-12 login-form">
              <form>
                <div className="form-group">
                  <label className="form-control-label">EMAIL</label>
                  <input
                    autoComplete="on"
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label className="form-control-label">PASSWORD</label>
                  <input
                    autoComplete="off"
                    type="password"
                    className="form-control"
                    placeholder="Your Password"
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
