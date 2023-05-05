import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import "./cards.css";
import Video from "../../Video/Video";

const Cards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("https://foodify-robiul1hossen.vercel.app/recipes")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div>
      <div className="cardDiv">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card}></SingleCard>
        ))}
      </div>
      <Video></Video>
    </div>
  );
};

export default Cards;
