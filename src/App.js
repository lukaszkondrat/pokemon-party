import { useState, useEffect } from "react";

import CurrentParty from "./components/Pokemons/CurrentParty";
import Pokedex from "./components/Pokemons/Pokedex";
import PokemonSelect from "./components/Pokemons/PokemonSelect";

import classes from "./App.module.css";

function App() {
  const [loadedPokemons, setLoadedPokemons] = useState([]);
  const [currentParty, setCurrentParty] = useState([]);
  const [currentDetail, setCurrentDetail] = useState([]);

  useEffect(() => {
    const pokemons = [];
    fetch("https://pokeapi.co/api/v2/pokemon?limit=30")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        for (const key in data.results) {
          const pokemon = {
            id: key,
            name: data.results[key].name,
            url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              Number(key) + 1
            }.png`,
          };
          pokemons.push(pokemon);
        }
        setLoadedPokemons(pokemons);
      });
  }, []);

  const addToPartyHandler = (pokemonId) => {
    const partyPokemon = loadedPokemons.filter(
      (el) => pokemonId === Number(el.id)
    );
    setCurrentParty(partyPokemon);
  };
  const seeDetailsHandler = (pokemonId) => {
    const pokemonDetail = loadedPokemons.find(
      (el) => pokemonId === Number(el.id)
    );
    setCurrentDetail([pokemonDetail]);
  };

  return (
    <div className={classes.container}>
      <Pokedex
        pokemons={loadedPokemons}
        onAdd={addToPartyHandler}
        onName={seeDetailsHandler}
      />
      <PokemonSelect pokemon={currentDetail} />
      <CurrentParty pokemons={currentParty} />
    </div>
  );
}

export default App;
