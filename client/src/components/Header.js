import React, { useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

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
              {isLoggedIn ? (
                <React.Fragment>
                  <Nav.Link as={Link} to="/cart">
                    {" "}
                    <i className="fas fa-shopping-cart"></i> Cart{" "}
                  </Nav.Link>
                  <Nav.Link as={Link} to="/profile">
                    {" "}
                    <i className="fas fa-user"></i> Profile{" "}
                  </Nav.Link>
                  <Nav.Link as={Link} to="/logout">
                    {" "}
                    <i className="fas fa-power-off"></i> Logout{" "}
                  </Nav.Link>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Nav.Link as={Link} to="/login">
                    {" "}
                    <i className="fas fa-power-off"></i> Login{" "}
                  </Nav.Link>
                  <Nav.Link as={Link} to="/register">
                    {" "}
                    <i className="fas fa-user-plus"></i> Sign Up{" "}
                  </Nav.Link>
                </React.Fragment>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
