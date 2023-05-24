import './Cards.css'
import React from "react";
import { useSelector} from "react-redux";
import Card from "../Card/Card";

const Cards = () => {
  const dogs = useSelector((state) => state.dogs);
  const{numPage} = useSelector((state) => state)

  let desde = (numPage - 1) * 8
  let hasta = numPage * 8


  const viewsDogs = dogs.slice(desde, hasta) 
  return (
    <div className="cards">
      {viewsDogs.map((dog) => (
        <Card
            key={dog.id}
            image={dog.image || dog.image.url}
            id={dog.id}
            name={dog.name}
            temperament= {dog.temperament}
            weight= {dog.weight}
        />
      ))}
    </div>
  );
};

export default Cards;