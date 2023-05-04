import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const HeaderMenu = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then()
      .catch((error) => console.log(error));
  };

  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "900" : "normal",
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "gray" : "white",
    };
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="black" className=" sticky-top mt-2">
      <Container className="">
        <Navbar.Brand className="text-white fw-bold">FOODIFY</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink style={navLinkStyle} className="ms-5  " to="/">
              Home
            </NavLink>
            <NavLink style={navLinkStyle} className="ms-3 " to="blogs">
              Blog
            </NavLink>
          </Nav>

          <span className="me-3">{user ? user.displayName : <></>}</span>
          <span>
            {user ? (
              <>
                {<FaUserCircle className="fs-1 text-white"></FaUserCircle>}
                <Button onClick={handleLogout}>Logout</Button>
              </>
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
