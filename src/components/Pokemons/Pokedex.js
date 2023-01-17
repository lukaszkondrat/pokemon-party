import { useEffect, useState } from "react";
import Card from "../UI/Card";

import classes from "./Pokedex.module.css";

const Pokedex = (props) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setPokemons(props.pokemons);
  }, [props.pokemons]);

  const addPokemonHandler = (event) => {
    const addedPokemonId = event.target.parentElement.value;
    props.onAdd(addedPokemonId);
  };
  const pokemonDetailsHandler = (event) => {
    const pokemonDetailsId = event.target.parentElement.value;
    props.onName(pokemonDetailsId);
  };
  const searchPokemonHandler = (event) => {
    const filteredPokemons = props.pokemons.filter((el) =>
      el.name.includes(event.target.value)
    );
    setPokemons(filteredPokemons);
  };

  return (
    <Card>
      <h1>Pokedex</h1>
      <div className={classes.control}>
        <input
          onInput={searchPokemonHandler}
          type="text"
          placeholder="Search for Pokemon"
        />
      </div>
      <div className={classes.list}>
        <ul>
          {pokemons.map((el) => (
            <li key={el.id} value={el.id}>
              <img src={el.url} alt="" onClick={pokemonDetailsHandler} />
              <div onClick={pokemonDetailsHandler}>
                {el.name.toUpperCase().slice(0, 1) + el.name.slice(1)}
              </div>

              {props.isDisabled.includes(Number(el.id)) && (
                <button
                  id={el.id}
                  className={classes.inactive}
                  onClick={addPokemonHandler}
                >
                  ADD
                </button>
              )}
              {!props.isDisabled.includes(Number(el.id)) && (
                <button
                  id={el.id}
                  className={classes.active}
                  onClick={addPokemonHandler}
                >
                  ADD
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default Pokedex;
