import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaThumbsUp } from "react-icons/fa";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

const BestFood = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);

  return (
    <>
      <div className="mt-5">
        <h2 style={{ marginTop: "150px" }} className="text-center text-secondary  mb-3">
          All our <span className="text-warning"> Famous </span>
          Food here
        </h2>
        <p className="text-center text-muted  mb-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem <br /> perspiciatis quia
          cupiditate voluptatum repudiandae officia.
        </p>
      </div>

      <div className="cardDiv gap-4">
        {food.map((bestFood) => (
          <Card className="my-5" key={bestFood.id}>
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
              <Card.Img variant="top" src={bestFood.image} />
            </LazyLoad>
            <Card.Body>
              <Card.Title>Recipe Name :{bestFood.recipe}</Card.Title>
              <Card.Title>Name :{bestFood.chef}</Card.Title>

              <Card.Text>{bestFood.desc}</Card.Text>
              <div className="">
                <Button className="" variant="success">
                  View Details
                </Button>
              </div>
              <div className="text-center mt-4"></div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default BestFood;
