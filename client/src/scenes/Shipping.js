import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { saveAddress } from "../store/actions/cartActions";
import Progress from "../components/Progress";

import "../assets/css/shipping.css";

const Shipping = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const initialAdress = useSelector((state) => state.cart.address);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [address, setAddress] = useState({
    phoneNumber: initialAdress.phoneNumber || "",
    street: initialAdress.street || "",
    city: initialAdress.city || "",
    state: initialAdress.state || "",
    pincode: initialAdress.pincode || "",
    country: initialAdress.country || "",
  });

  const handleChange = (e) =>
    setAddress((address) => ({ ...address, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    //call action to save address in state and localstorage
    e.preventDefault();
    dispatch(saveAddress(address));

    //navigate to next page
    navigate("/payment");
  };

  if (!isLoggedIn) return <Navigate to="/login?to=shipping" />;

  return (
    <React.Fragment>
      <Progress step1 step2 />
      <FormContainer>
        <h3 className="form-header text-center mb-2">Add Shipping Details</h3>

        <Form className="form-group" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="street"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              onChange={handleChange}
              value={address.phoneNumber}
              placeholder="eg: 987654321"
              required
              autoComplete="on"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Street</Form.Label>
            <Form.Control
              type="street"
              className="form-control"
              id="street"
              name="street"
              onChange={handleChange}
              value={address.street}
              placeholder="Enter Street"
              required
              autoComplete="on"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="city"
              className="form-control"
              id="inputCity"
              name="city"
              onChange={handleChange}
              value={address.city}
              placeholder="Enter City"
              required
              autoComplete="on"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="state"
              className="form-control"
              id="inputState"
              name="state"
              onChange={handleChange}
              value={address.state}
              placeholder="Enter State"
              required
              autoComplete="on"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Pincode</Form.Label>
            <Form.Control
              type="zip"
              className="form-control"
              id="inputZip"
              name="pincode"
              onChange={handleChange}
              value={address.pincode}
              placeholder="Enter Pincode"
              required
              autoComplete="on"
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="country"
              className="form-control"
              id="inputCountry"
              name="country"
              onChange={handleChange}
              value={address.country}
              placeholder="Enter Country"
              required
              autoComplete="on"
            />
          </Form.Group>
          <div className="d-grid gap-2 ">
            <button className="btn btn-primary" type="submit">
              Continue
            </button>
          </div>
        </Form>
      </FormContainer>
    </React.Fragment>
  );
};

export default Shipping;
