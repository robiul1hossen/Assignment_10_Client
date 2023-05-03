import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const HeaderMenu = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="black" className=" sticky-top mt-2">
      <Container className="">
        <Navbar.Brand className="text-white fw-bold">FOODIFY</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="ms-5 text-white text-decoration-none fw-semibold" to="/">
              Home
            </Link>
            <Link className="ms-3 text-white text-decoration-none fw-semibold" to="blogs">
              Blog
            </Link>
          </Nav>

          <span className="me-3">
            {user ? user.displayName : <>{<FaUserCircle className="fs-1 text-white"></FaUserCircle>}</>}
          </span>
          <span>
            {user ? (
              <Button onClick={handleLogout}>Logout</Button>
            ) : (
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            )}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderMenu;
