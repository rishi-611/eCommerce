import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
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
                  <NavDropdown title="Profile" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/orders">
                      Orders
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/profile">
                      Edit Profile
                    </NavDropdown.Item>
                  </NavDropdown>

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
