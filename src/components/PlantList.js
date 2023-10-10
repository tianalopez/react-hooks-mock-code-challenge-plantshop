import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onDelete}) {
  //render plant card
  const plantCard = plants.map((plant) => (
    <PlantCard key={plant.id} plant={plant} onDelete={onDelete}/>
  ))

  return (
    <ul className="cards">{plantCard}</ul>
  );
}

export default PlantList;
