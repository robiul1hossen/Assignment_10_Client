import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { FaHeart, FaRegHeart, FaRegStar, FaStar, FaThumbsUp } from "react-icons/fa";
import Rating from "react-rating";

import { useLoaderData, useParams } from "react-router-dom";

const Recipes = () => {
  const recipeData = useLoaderData();
  const { id, name, image_url, experience, recipes, likes, recipe1, recipe2, recipe3, recipe4, description } =
    recipeData;

  return (
    <Container className="my-5">
      <Card className="w-75 mx-auto">
        <div>
          <Card.Img style={{ height: "80vh" }} variant="top" src={image_url} />
          <div className="mx-auto">
            <Card.Title>Chef Name : {name}</Card.Title>
            <span className="fw-bold py-1 px-2 rounded-2">Experience : {experience} Years</span>
            <span className="fw-bold py-1 px-2 rounded-2 d-flex gap-2 align-items-center">
              <FaThumbsUp></FaThumbsUp> {likes}
            </span>
            <span className="fw-bold py-1 px-2 rounded-2">Recipes: {recipes}</span>
            <span className="my-4">
              <b>Descriptions</b> : {description}
            </span>
          </div>
        </div>
      </Card>

      <div className="row row-cols-2 w-75 mx-auto my-5  ">
        <Card className="  ">
          <Card.Img variant="top" src={recipe1.foodImg} />
          <Card.Body>
            <Card.Text>
              <h4>Item-1 : {recipe1?.food_name}</h4>
              {recipe1?.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
              <b>Instructions</b> :{recipe1?.instructions}
              <div className="d-flex align-items-center gap-3">
                <span>
                  <Rating
                    placeholderRating={4.5}
                    readonly
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                  ></Rating>
                </span>
                <span className="fs-2">
                  <FaRegHeart></FaRegHeart>
                </span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="">
          <Card.Img variant="top" src={recipe2.foodImg} />
          <Card.Body>
            <Card.Text>
              <h4>Item-2 : {recipe2?.food_name}</h4>
              {recipe2?.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
              <b>Instructions</b> :{recipe2?.instructions}
              <div className="d-flex align-items-center gap-3">
                <span>
                  <Rating
                    placeholderRating={4.5}
                    readonly
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                  ></Rating>
                </span>
                <span className="fs-2">
                  <FaRegHeart></FaRegHeart>
                </span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className=" ">
          <Card.Img variant="top" src={recipe3.foodImg} />
          <Card.Body>
            <Card.Text>
              <h4>Item-3 : {recipe3?.food_name}</h4>
              {recipe3?.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
              <b>Instructions</b> :{recipe3?.instructions}
              <div className="d-flex align-items-center gap-3">
                <span>
                  <Rating
                    placeholderRating={4.5}
                    readonly
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                  ></Rating>
                </span>
                <span className="fs-2">
                  <FaRegHeart></FaRegHeart>
                </span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className=" ">
          <Card.Img variant="top" src={recipe4.foodImg} />
          <Card.Body>
            <Card.Text>
              <h4>Item-4 : {recipe4?.food_name}</h4>
              {recipe4?.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
              <b>Instructions</b> :{recipe4?.instructions}
              <div className="d-flex align-items-center gap-3">
                <span>
                  <Rating
                    placeholderRating={4.5}
                    readonly
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                  ></Rating>
                </span>
                <span className="fs-2">
                  <FaRegHeart></FaRegHeart>
                </span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Recipes;
