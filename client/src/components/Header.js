import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to="/">
            eCommerce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/cart">
                {" "}
                <i className="fas fa-shopping-cart"></i> Cart{" "}
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                {" "}
                <i className="fas fa-power-off"></i> Login{" "}
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                {" "}
                <i className="fas fa-user-plus"></i> Sign Up{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
