import React from "react";
import { Card } from "react-bootstrap";

const ProductSummary = ({ product }) => {
  return (
    <React.Fragment>
      <Card>
        <Card.Img
          alt={`${product.name} Image`}
          variant="top"
          src={product.image}
        />
        <Card.Body>
          <Card.Title className="product-card-name">{product.name}</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default ProductSummary;
