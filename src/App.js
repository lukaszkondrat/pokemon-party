import { useState, useEffect } from "react";

import CurrentParty from "./components/Pokemons/CurrentParty";
import Pokedex from "./components/Pokemons/Pokedex";
import PokemonSelect from "./components/Pokemons/PokemonSelect";

import classes from "./App.module.css";

function App() {
  const [loadedPokemons, setLoadedPokemons] = useState([]);
  const [currentParty, setCurrentParty] = useState([]);
  const [currentDetail, setCurrentDetail] = useState([]);
  const [isDisabled, setIsDisabled] = useState([]);

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
          fetch(`https://pokeapi.co/api/v2/pokemon/${Number(key) + 1}`)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              pokemon.types = [
                data.types[0].type.name,
                data.types[1]?.type.name,
              ];
            });
          pokemons.push(pokemon);
        }
        setLoadedPokemons(pokemons);
      });
  }, []);

  const addToPartyHandler = (pokemonId) => {
    const partyPokemon = loadedPokemons.filter(
      (el) => pokemonId === Number(el.id)
    );

    if (currentParty.length < 6) {
      if (!currentParty.includes(partyPokemon[0])) {
        setCurrentParty((currParty) => [...currParty, partyPokemon[0]]);
        setIsDisabled((curr) => [...curr, pokemonId]);
      }
    }
  };
  const seeDetailsHandler = (pokemonId) => {
    const pokemonDetail = loadedPokemons.find(
      (el) => pokemonId === Number(el.id)
    );
    setCurrentDetail([pokemonDetail]);
  };

  const seePartyDetailsHandler = (name) => {
    const pokemonDetail = loadedPokemons.filter((el) => el.name === name);
    setCurrentDetail(pokemonDetail);
  };

  const removeFromPartyHandler = (filteredParty, id) => {
    setCurrentParty(filteredParty);
    setIsDisabled((curr) => curr.filter((el) => el !== id));
  };

  return (
    <div className={classes.container}>
      <Pokedex
        pokemons={loadedPokemons}
        onAdd={addToPartyHandler}
        onName={seeDetailsHandler}
        currentParty={currentParty}
        isDisabled={isDisabled}
      />
      <PokemonSelect
        pokemon={currentDetail}
        currentParty={currentParty}
        onAdd={addToPartyHandler}
        onRemove={removeFromPartyHandler}
        isDisabled={isDisabled}
      />
      <CurrentParty
        pokemons={currentParty}
        onRemove={removeFromPartyHandler}
        onDetail={seePartyDetailsHandler}
      />
    </div>
  );
}

export default App;
