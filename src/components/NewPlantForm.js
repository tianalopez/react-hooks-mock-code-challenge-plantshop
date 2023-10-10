import React, {useState} from "react";

function NewPlantForm({onSubmit}) {
  const [newPlant, setNewPlant] = useState({
    name:"",
    image:"",
    price:0,
  })
  //submit form
  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(r => r.json())
    .then((newPlantObj) => onSubmit(newPlantObj))
    .catch(err => alert(err))
    //reset form input
    setNewPlant((reset) => ({
      name: "",
      image: "",
      price: 0,
    }) )
  }

  //grab value of input
  const handleChange = (e) => {
    const key = e.target.name
    let value;
    if (e.target.name === "price") {
      value = parseInt(e.target.value)
    }
    else {
      value = e.target.value
    }

    setNewPlant({...newPlant, [key]: value})
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
