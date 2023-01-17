import classes from "./CurrentParty.module.css";

const CurrentParty = (props) => {
  const removeFromPartyHandler = (event) => {
    const filteredParty = props.pokemons.filter(
      (el) => el.id !== event.target.id
    );
    const buttonId = event.target.id;
    props.onRemove(filteredParty, Number(buttonId));
  };
  const pokemonDetailsHandler = (event) => {
    const detailsName = event.target.parentElement.textContent
      .slice(0, -6)
      .toLowerCase();
    props.onDetail(detailsName);
  };

  return (
    <div className={classes.card3}>
      <h1>Current Party</h1>
      <p>At the party: {props.pokemons.length}/6</p>
      <div className={classes.list}>
        <ul>
          {props.pokemons.map((el) => (
            <li key={el.id}>
              <img src={el.url} alt="" onClick={pokemonDetailsHandler} />
              <div onClick={pokemonDetailsHandler}>
                {el.name.toUpperCase().slice(0, 1) + el.name.slice(1)}
              </div>
              <button
                id={el.id}
                className={classes.active}
                onClick={removeFromPartyHandler}
              >
                REMOVE
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CurrentParty;
