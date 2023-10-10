import React, {useState} from "react";

function PlantCard({plant, onDelete}) {
  const [inStock, setInStock] = useState(true)

  const handleClick = () => {
    setInStock((status) => !status)
  }
  const handleDelete = () => {
    onDelete(plant.id)

    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(r=> r.json())
    .catch(err => alert(err))
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
      <button onClick={handleDelete} className="primary" >Delete</button>
    </li>
  );
}

export default PlantCard;
