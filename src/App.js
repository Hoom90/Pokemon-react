import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0";

export default function App() {
  const [pokoemons, setPokoemons] = useState([]);

  const fetchPokemons = async () => {
    const { results } = (await axios.get(API_URL)).data;
    setPokoemons(results);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="container m-auto my-100">
      {!pokoemons && <h1>Loading ...</h1>}
      {pokoemons && (
        <ul className="grid grid-cols-12 gap-3">
          {pokoemons.map((item, index) => (
            <Fragment key={`pokemon-${index}`}>
              <Card name={item.name} url={item.url} />
            </Fragment>
          ))}
        </ul>
      )}
    </div>
  );
}
