import { useEffect } from "react";
import Card from "../UI/Card";

import classes from "./PokemonSelect.module.css";

const PokemonSelect = (props) => {
  return (
    <Card>
      <h2>Select a Pokemon to see its details</h2>

      {props.pokemon.map((el) => (
        <div className={classes.list} key={el.id} value={el.id}>
          <img src={el.url} alt="" />
          <span>
            <h3>{`Name: ${
              el.name.toUpperCase().slice(0, 1) + el.name.slice(1)
            }`}</h3>
            <p>{`PokeApi id: ${el.id}`}</p>
            <p>{`Types: `}</p>
          </span>
          <button>ADD</button>
          <button>REMOVE</button>
        </div>
      ))}
    </Card>
  );
};

export default PokemonSelect;
