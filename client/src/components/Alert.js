import React from "react";
import { Alert } from "react-bootstrap";

const AlertMessage = ({ variant = "primary", children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

export default AlertMessage;
