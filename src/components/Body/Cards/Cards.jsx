import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import "./cards.css";
import Video from "../../Video/Video";
import ClientsWord from "../../ClientsWord/ClientsWord";
import BestFood from "./BestFood/BestFood";

const Cards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("https://foodify-robiul1hossen.vercel.app/recipes")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="mt-5">
      <div className="mt-5">
        <h2 style={{ marginTop: "150px" }} className="text-center text-secondary  mb-3">
          All our <span className="text-warning">Famous</span> and{" "}
          <span className="text-warning">Experienced</span> chef here
        </h2>
        <p className="text-center text-muted  mb-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem <br /> perspiciatis quia
          cupiditate voluptatum repudiandae officia.
        </p>
      </div>
      <div className="cardDiv">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card}></SingleCard>
        ))}
      </div>
      <BestFood></BestFood>
      <ClientsWord></ClientsWord>
      <Video></Video>
    </div>
  );
};

export default Cards;
