import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, BrowserRouter } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <BrowserRouter>
            <Navbar.Brand as={Link} to="/">
              eCommerce
            </Navbar.Brand>
          </BrowserRouter>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="mr-auto">
              <BrowserRouter>
                <Nav.Link as={Link} to="/cart">
                  {" "}
                  <i className="fas fa-shopping-cart"></i> Cart{" "}
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  {" "}
                  <i className="fas fa-power-off"></i> Login{" "}
                </Nav.Link>
              </BrowserRouter>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
