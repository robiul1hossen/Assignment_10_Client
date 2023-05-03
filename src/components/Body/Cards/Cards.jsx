import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

const Cards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/recipes")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
      {cards.map((card) => (
        <SingleCard key={card.id} card={card}></SingleCard>
      ))}
    </div>
  );
};

export default Cards;
