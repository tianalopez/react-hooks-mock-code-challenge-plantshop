import React, {useState} from "react";

function PlantCard({plant}) {
  const [inStock, setInStock] = useState(true)

  const handleClick = () => {
    setInStock((status) => !status)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
