import React from "react";
import { Carousel, Container, Overlay } from "react-bootstrap";
import Cards from "../../Body/Cards/Cards";

const Banner = () => {
  return (
    <Container className="my-5">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "600px" }}
            src="https://i.ibb.co/3hvSmBJ/kazuo-ota-s-F90-YT-7ov-I-unsplash.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="bg-success" style={{ opacity: "80%" }}>
            <h3>you can get here all chinese food recipes here</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos laboriosam cupiditate, et
              earum rerum ipsa?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "600px" }}
            src="https://i.ibb.co/vP48n4v/lasse-bergqvist-TYj7ey6xn9-M-unsplash.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="bg-success" style={{ opacity: "80%" }}>
            <h3>you can get here all chinese food recipes here</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos laboriosam cupiditate, et
              earum rerum ipsa?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "600px" }}
            src="https://i.ibb.co/MN5P2Rs/lasse-bergqvist-ro3-H4m-JIAr-A-unsplash.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="bg-success" style={{ opacity: "80%" }}>
            <h3>you can get here all chinese food recipes here</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos laboriosam cupiditate, et
              earum rerum ipsa?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Cards></Cards>
    </Container>
  );
};

export default Banner;
