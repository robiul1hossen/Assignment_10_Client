import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { FaHeart, FaRegHeart, FaRegStar, FaStar, FaThumbsUp } from "react-icons/fa";
import Rating from "react-rating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useLoaderData, useParams } from "react-router-dom";

const Recipes = () => {
  const recipeData = useLoaderData();
  const { id, name, image_url, experience, recipes, likes, recipe1, recipe2, recipe3, recipe4, description } =
    recipeData;
  const [disable, setDisable] = useState(false);
  const [disable2, setDisable2] = useState(false);
  const [disable3, setDisable3] = useState(false);
  const [disable4, setDisable4] = useState(false);
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);

  const handleFavorite = () => {
    setDisable(true);
    setClick(true);
    toast("The Recipe is Added As Your Favorite");
  };
  const handleFavorite2 = () => {
    setDisable2(true);
    setClick2(true);
    toast("The Recipe is Added As Your Favorite");
  };
  const handleFavorite3 = () => {
    setDisable3(true);
    setClick3(true);
    toast("The Recipe is Added As Your Favorite");
  };
  const handleFavorite4 = () => {
    setDisable4(true);
    setClick4(true);
    toast("The Recipe is Added As Your Favorite");
  };

  return (
    <Container className="my-5">
      <Card className="w-75 mx-auto">
        <div>
          <Card.Img style={{ height: "80vh" }} variant="top" src={image_url} />
          <div className="mx-auto">
            <h5 className="px-2">Name : {name}</h5>
            <span className="fw-bold py-1 px-2 rounded-2">Experience : {experience} Years</span>
            <span className="fw-bold py-1 px-2 rounded-2  d-flex gap-2 align-items-center">
              <span className="text-primary">
                <FaThumbsUp></FaThumbsUp>
              </span>{" "}
              {likes}
            </span>
            <span className="fw-bold py-1 px-2 rounded-2">Recipes: {recipes}</span>
            <br />
            <span className="my-4 mx-2">
              <b>Descriptions</b> : {description}
            </span>
          </div>
        </div>
      </Card>

      <div className="row row-cols-2 w-75 mx-auto my-5  ">
        <Card className="mt-5  ">
          <Card.Img variant="top" className="p-2" src={recipe1?.foodImg} />
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
                    placeholderRating={4}
                    readonly
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                  ></Rating>
                </span>
                {!click2 ? (
                  <span onClick={handleFavorite2} disabled={disable2} className="fs-2">
                    <FaRegHeart></FaRegHeart>
                  </span>
                ) : (
                  <span className="fs-2">
                    <FaHeart></FaHeart>
                  </span>
                )}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mt-5">
          <Card.Img variant="top" className="p-2" src={recipe2?.foodImg} />
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
                    placeholderRating={4.8}
                    readonly
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                  ></Rating>
                </span>
                {!click3 ? (
                  <span onClick={handleFavorite3} disabled={disable3} className="fs-2">
                    <FaRegHeart></FaRegHeart>
                  </span>
                ) : (
                  <span className="fs-2">
                    <FaHeart></FaHeart>
                  </span>
                )}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className=" mt-5">
          <Card.Img variant="top" className="p-2" src={recipe3?.foodImg} />
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
                    placeholderRating={4.2}
                    readonly
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                  ></Rating>
                </span>
                {!click4 ? (
                  <span onClick={handleFavorite4} disabled={disable4} className="fs-2">
                    <FaRegHeart></FaRegHeart>
                  </span>
                ) : (
                  <span className="fs-2">
                    <FaHeart></FaHeart>
                  </span>
                )}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mt-5 ">
          <Card.Img variant="top" className="p-2" src={recipe4?.foodImg} />
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
                    placeholderRating={5}
                    readonly
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                  ></Rating>
                </span>
                {!click ? (
                  <span onClick={handleFavorite} disabled={disable} className="fs-2">
                    <FaRegHeart></FaRegHeart>
                  </span>
                ) : (
                  <span className="fs-2">
                    <FaHeart></FaHeart>
                  </span>
                )}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <ToastContainer />
    </Container>
  );
};

export default Recipes;
