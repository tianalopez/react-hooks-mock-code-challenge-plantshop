import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  //render plant card
  const plantCard = plants.map((plant) => (
    <PlantCard key={plant.id} plant={plant} />
  ))

  return (
    <ul className="cards">{plantCard}</ul>
  );
}

export default PlantList;
