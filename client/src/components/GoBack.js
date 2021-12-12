import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();
  return (
    <div className="mb-2">
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </div>
  );
};

export default GoBack;
