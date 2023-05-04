import React from "react";
import { Container } from "react-bootstrap";
import HeaderMenu from "./Header/Navbar/HeaderMenu";

const Error = () => {
  return (
    <Container>
      <HeaderMenu></HeaderMenu>
      <img
        className="w-100"
        style={{ height: "90vh" }}
        src="https://i.ibb.co/8XfPgqp/273806-P5-X28-A-300.jpg"
        alt=""
      />
    </Container>
  );
};

export default Error;
