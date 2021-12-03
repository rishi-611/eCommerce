import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          <Col className="text-center py-3">&#169; ECommerce</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
