import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const SingleCard = ({ card }) => {
  const { id, name, image_url, experience, recipes, likes } = card;
  return (
    <Container>
      <Card className="my-5">
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Button variant="primary">View Recipes</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SingleCard;
