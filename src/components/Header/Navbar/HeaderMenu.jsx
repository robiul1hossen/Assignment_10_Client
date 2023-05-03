import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const HeaderMenu = () => {
  const { user } = useContext(AuthContext);

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="position-relative">
      <Container className="position-sticky z-1">
        <Navbar.Brand href="#home">FOODIFY</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="me-3" to="/">
              Home
            </Link>
            <Link to="blogs">Blog</Link>
          </Nav>
          <Nav>
            <span className="me-3">
              {user ? user.displayName : <>{<FaUserCircle className="fs-1"></FaUserCircle>}</>}
            </span>
            <span>
              {user ? (
                <Button>Logout</Button>
              ) : (
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
              )}
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderMenu;
