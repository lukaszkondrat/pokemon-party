import classes from "./PokemonSelect.module.css";

const PokemonSelect = (props) => {
  const addToPartyHandler = (event) => {
    props.onAdd(Number(event.target.id));
  };
  const removeFromPartyHandler = (event) => {
    const filteredParty = props.currentParty.filter(
      (el) => el.id !== event.target.id
    );
    const buttonId = event.target.id;
    props.onRemove(filteredParty, Number(buttonId));
  };
  return (
    <div className={classes.card2}>
      <h1>Select a Pokemon to see its details</h1>

      {props.pokemon.map((el) => (
        <div className={classes.list} key={el.id} value={el.id}>
          <div className={classes.img}>
            <img src={el.url} alt="" />
          </div>
          <span>
            <h3>{`Name: ${
              el.name.toUpperCase().slice(0, 1) + el.name.slice(1)
            }`}</h3>
            <p>{`PokeApi id: ${Number(el.id) + 1}`}</p>
            <p>{`Types: ${props.pokemon[0]?.types[0]}${
              props.pokemon[0]?.types[1]
                ? `, ${props.pokemon[0]?.types[1]}`
                : ""
            }`}</p>
          </span>
          <div>
            {props.isDisabled.includes(Number(el.id)) && (
              <button
                className={classes.inactive}
                id={el.id}
                onClick={addToPartyHandler}
              >
                ADD
              </button>
            )}
            {!props.isDisabled.includes(Number(el.id)) && (
              <button
                className={classes.active}
                id={el.id}
                onClick={addToPartyHandler}
              >
                ADD
              </button>
            )}

            {props.isDisabled.includes(Number(el.id)) && (
              <button
                className={classes.active}
                id={el.id}
                onClick={removeFromPartyHandler}
              >
                REMOVE
              </button>
            )}
            {!props.isDisabled.includes(Number(el.id)) && (
              <button
                className={classes.inactive}
                id={el.id}
                onClick={removeFromPartyHandler}
              >
                REMOVE
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonSelect;
