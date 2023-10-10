import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");
  const [plantID, setPlantID] = useState("")

  //fetch plant data
  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r=> r.json())
    .then(setPlants)
    .catch(err => alert(err))
  }, [])

  //grab form data
  const onSubmit = (newPlantObj) => {
    setPlants((oldPlants) => [...oldPlants, newPlantObj])
  }
  //grab search data
  const onSearch = (searchValue) => {
    const modifiedSearch = searchValue.toUpperCase()
    setSearch((newSearch) => modifiedSearch)
  }
  //filter plants
  const visiblePlants = plants.filter((plant) => {
    const upperCasePlant = plant.name.toUpperCase()
    return upperCasePlant.includes(search)
  })
  .filter((plant) => (
    plant.id !== plantID
  ))

  //delete plants
  const onDelete = (id) => {
    setPlantID((newID) => id)
  }

  return (
    <main>
      <NewPlantForm onSubmit={onSubmit} />
      <Search onSearch={onSearch}/>
      <PlantList plants={visiblePlants} onDelete={onDelete}/>
    </main>
  );
}

export default PlantPage;
