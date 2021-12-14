import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/auth.css";

const Register = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-2"></div>
        <div className="col-lg-6 col-md-8 login-box bg-dark p-4 text-light">
          <div className="col-lg-12 login-title">SIGN UP</div>

          <div className="col-lg-12 login-form">
            <div className="col-lg-12 login-form">
              <form>
                <div className="form-group">
                  <label className="form-control-label">NAME</label>
                  <input
                    autoComplete="on"
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
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
                <div className="form-group">
                  <label className="form-control-label">CONFIRM PASSWORD</label>
                  <input
                    autoComplete="off"
                    type="password"
                    className="form-control"
                    placeholder="Confirm Your Password"
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
