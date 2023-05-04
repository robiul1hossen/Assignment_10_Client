import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container className="my-5">
      <h2>Our Terms & Conditions</h2>
      <p className="w-50">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic rem voluptatem officiis, officia
        quisquam repudiandae iure sapiente unde fugit excepturi at, temporibus sit velit vel deleniti
        voluptatibus maiores modi fuga.
      </p>
      <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Sed do eiusmod tempor incididunt</li>
        <li>Ut labore et dolore magna aliqua</li>
        <li>Ut enim ad minim veniam</li>
        <li>Quis nostrud exercitation ullamco laboris</li>
        <li>Nisi ut aliquip ex ea commodo consequat</li>
        <li>Duis aute irure dolor in reprehenderit in voluptate</li>
      </ul>
      <p>
        Back to <Link to="/register">Register</Link>
      </p>
    </Container>
  );
};

export default Terms;
