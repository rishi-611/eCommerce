import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import "../assets/css/shipping.css";

const Shipping = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  if (!isLoggedIn) return <Navigate to="/login" />;
  return (
    <div className="shipping">
      <FormContainer>
        <Form class="form-group">
          <Form.Group className="mb-2">
            <Form.Label>Street</Form.Label>
            <Form.Control
              type="street"
              class="form-control"
              id="street"
              name="street"
              placeholder="Enter Street"
              required
              autoComplete="on"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="city"
              class="form-control"
              id="inputCity"
              name="city"
              placeholder="Enter City"
              required
              autoComplete="on"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="state"
              class="form-control"
              id="inputState"
              name="state"
              placeholder="Enter State"
              required
              autoComplete="on"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Pincode</Form.Label>
            <Form.Control
              type="zip"
              class="form-control"
              id="inputZip"
              name="pincode"
              placeholder="Enter Pincode"
              required
              autoComplete="on"
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="country"
              class="form-control"
              id="inputCountry"
              name="pincode"
              placeholder="Enter Country"
              required
              autoComplete="on"
            />
          </Form.Group>
          <div class="d-grid gap-2 ">
            <button class="btn btn-primary" type="submit">
              Continue
            </button>
          </div>
        </Form>
      </FormContainer>
    </div>
  );
};

export default Shipping;
