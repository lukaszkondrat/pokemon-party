import { useState } from "react";

import Card from "../UI/Card";
import classes from "./CurrentParty.module.css";

const CurrentParty = (props) => {
  return (
    <Card>
      <h2>Current Party</h2>
      <div className={classes.list}>
        <ul>
          {props.pokemons.map((el) => (
            <li key={el.id}>
              <img src={el.url} alt="" />
              {el.name.toUpperCase().slice(0, 1) + el.name.slice(1)}
              <button>REMOVE</button>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default CurrentParty;
