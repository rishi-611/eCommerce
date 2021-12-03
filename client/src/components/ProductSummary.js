import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const ProductSummary = ({ product }) => {
  return (
    <React.Fragment>
      <Card className="p-2 shadow-box">
        <Link to={`/products/${product._id}`}>
          <Card.Img
            alt={`${product.name} Image`}
            variant="top"
            src={product.image}
            style={{ borderRadius: "0.3rem" }}
          />
        </Link>
        <Card.Body>
          <Link to={`/products/${product._id}`}>
            <Card.Title className="product-card-name">
              {product.name}
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <Rating
              rating={product.rating}
              text={`from ${product.numReviews} ratings`}
            />
          </Card.Text>
          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default ProductSummary;
