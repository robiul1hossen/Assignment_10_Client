import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaThumbsUp } from "react-icons/fa";

const SingleCard = ({ card }) => {
  const { id, name, image_url, experience, recipes, likes } = card;
  return (
    <Container>
      <Card className="my-5">
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>Chef Name : {name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <p className="bg-success text-white py-1 px-2 rounded-2 fw-semibold">
              Experience : {experience} Years
            </p>
            <p className="bg-success text-white py-1 px-2 rounded-2 fw-semibold">
              <FaThumbsUp></FaThumbsUp> {likes}
            </p>
            <p className="bg-success text-white py-1 px-2 rounded-2 fw-semibold">Recipes: {recipes}</p>
          </div>
          <div className="text-center mt-4">
            <Button variant="primary">View Recipes</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SingleCard;
