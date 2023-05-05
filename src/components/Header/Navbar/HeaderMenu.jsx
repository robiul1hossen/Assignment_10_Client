import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
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
      textDecoration: isActive ? "underline" : "none",
      color: isActive ? "black" : "white",
    };
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="success" variant="success" className=" sticky-top mt-2">
      <Container className="">
        <Navbar.Brand className="text-white fw-bold">FOODIFY</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink style={navLinkStyle} className="ms-lg-5  " to="/">
              Home
            </NavLink>
            <NavLink style={navLinkStyle} className="ms-lg-3 " to="/blogs">
              Blog
            </NavLink>
          </Nav>

          <div>
            <span className="me-3 text-white profileName">{user ? user.displayName : <></>}</span>
            <span>
              {user ? (
                <>
                  {
                    <img
                      className="profileImg"
                      style={{
                        width: "50px",
                        height: "50px",
                        lineHeight: "50px",
                        borderRadius: "50%",
                        marginRight: "20px",
                      }}
                      src={user.photoURL}
                      alt=""
                    />
                  }
                  <Button onClick={handleLogout}>Logout</Button>
                </>
              ) : (
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
              )}
            </span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderMenu;
