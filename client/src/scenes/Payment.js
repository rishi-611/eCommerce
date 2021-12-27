import React, { useState } from "react";
import FormContainer from "../components/FormContainer";
import { Form } from "react-bootstrap";
import Progress from "../components/Progress";
import { useSelector, useDispatch } from "react-redux";
import { savePaymentMethod } from "../store/actions/cartActions";

const Payment = () => {
  const dispatch = useDispatch();
  const defaultMethod = useSelector((state) => state.cart.paymentMethod);
  const [method, setMethod] = useState(defaultMethod);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(savePaymentMethod(method));
  };
  return (
    <React.Fragment>
      <Progress step1 step2 step3 />
      <FormContainer>
        <h3 className="form-header text-center mb-2">Select Payment Method</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="my-3">
            <Form.Check
              type="radio"
              id="payment-paypal"
              className="mb-1"
              label="PayPal or Debit Card"
              name="method"
              value="paypal"
              onChange={(e) => setMethod(e.target.value)}
              checked={method == "paypal" ? true : false}
            />
            <Form.Check
              type="radio"
              id="payment-paypal"
              label="UPI"
              name="method"
              value="upi"
              onChange={(e) => setMethod(e.target.value)}
              checked={method == "upi" ? true : false}
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
