import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="position-relative">
      <Container className="position-sticky top-0">
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
              <FaUserCircle className="fs-1"></FaUserCircle>
            </span>
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderMenu;
