import React, { useState } from "react";
import FormContainer from "../components/FormContainer";
import { Form } from "react-bootstrap";
import Progress from "../components/Progress";
import { useSelector, useDispatch } from "react-redux";
import { savePaymentMethod } from "../store/actions/cartActions";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const dispatch = useDispatch();
  const defaultMethod = useSelector((state) => state.cart.paymentMethod);
  const [method, setMethod] = useState(defaultMethod);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(savePaymentMethod(method));
    navigate("/placeOrder");
  };

  return (
    <React.Fragment>
      <Progress step1 step2 step3 />
      <FormContainer>
        <h3 className="form-header text-center mb-2">Select Payment Method</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="my-3">
            {/*
            <Form.Check
              type="radio"
              id="payment-paypal"
              className="mb-1"
              label="Debit Card"
              name="method"
              value="Debit Card"
              onChange={(e) => setMethod(e.target.value)}
              checked={method == "Debit Card" ? true : false}
            />
            */}
            <Form.Check
              type="radio"
              id="payment-paypal"
              label="Cash On Delivery"
              name="method"
              value="Cash On Delivery"
              onChange={(e) => setMethod(e.target.value)}
              checked={method === "Cash On Delivery" ? true : false}
            />
          </Form.Group>
          <div className="d-grid gap-2 mt-3">
            <button className="btn btn-primary" type="submit">
              Continue
            </button>
          </div>
        </Form>
      </FormContainer>
    </React.Fragment>
  );
};

export default Payment;
