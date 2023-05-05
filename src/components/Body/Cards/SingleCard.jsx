import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaThumbsUp } from "react-icons/fa";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

const SingleCard = ({ card }) => {
  const { id, name, image_url, experience, recipes, likes } = card;
  return (
    <Container>
      <Card className="my-5">
        <LazyLoad
          height={200}
          offset={100}
          placeholder={
            <img
              className="w-25"
              src="https://i.ibb.co/QFQ8kQ0/blur-hospital-clinic-interior.jpg"
              alt="Loading..."
            />
          }
        >
          <Card.Img variant="top" src={image_url} />
        </LazyLoad>
        <Card.Body>
          <Card.Title>Name : {name}</Card.Title>
          <h5>{experience} Years of Experience</h5>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
            <p className="bg-primary text-white py-1 px-2 mt-1 rounded-2 d-inline-block">
              <FaThumbsUp></FaThumbsUp> {likes}
            </p>
            <p className="bg-primary d-inline-block text-white py-1 px-2 mt-1 rounded-2">
              Recipes: {recipes}
            </p>
            <Link to={`/recipe/${id}`}>
              <Button className="" variant="success">
                View Recipes
              </Button>
            </Link>
          </div>
          <div className="text-center mt-4"></div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SingleCard;
